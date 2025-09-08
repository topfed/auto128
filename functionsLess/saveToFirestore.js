import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
const bucket = admin.storage().bucket();
async function uploadBase64ToFirebase(fileData, fileName) {
  try {
    const matches = fileData.match(/^data:(image\/\w+);base64,/);
    if (!matches || matches.length < 2) {
      throw new Error("Invalid Base64 image data");
    }
    const mimeType = matches[1];
    const base64String = fileData.replace(/^data:image\/\w+;base64,/, "");
    const fileBuffer = Buffer.from(base64String, "base64");
    const filePath = `photosFront/${fileName}`;
    const fileRef = bucket.file(filePath);
    await fileRef.save(fileBuffer, {
      metadata: { contentType: mimeType },
    });
    return filePath;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }
  try {
    const { fileData, fileName, establishedDate, ...formData } = req.body;
    let filePath = "N/A";
    if (fileData && fileName) {
      filePath = await uploadBase64ToFirebase(fileData, fileName);
    }
    const firestoreData = {
      ...formData,
      photo: filePath,
      create: admin.firestore.Timestamp.now(),
      establishedDate: establishedDate
        ? admin.firestore.Timestamp.fromDate(new Date(establishedDate))
        : null,
    };
    // const docRef = await db
    //   .collection(process.env.FIREBASE_COLLECTION_NAME)
    //   .add(firestoreData);
    return res
      .status(200)
      .json({ success: true, id: docRef.id, fileUrl: filePath });
  } catch (error) {
    console.error("Error saving data:", error);
    return res.status(500).json({ error: error.message });
  }
}
