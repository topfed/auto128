import FormData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "API_KEY",
    url: "https://api.eu.mailgun.net",
  });
  try {
    const msg = {
      from: `${process.env.NAME} <info@${process.env.WEBSITE}>`,
      to: `stefan.ciobanu@topfed.com`,
      subject: `List - ${req.body.field1}`,
      "h:Reply-To": `${req.body.field2} <${req.body.field1}>`,
      html: `
        <strong>Your Name:</strong> ${req.body.field1} <br/>
        <strong>Your Email:</strong> ${req.body.field2} <br/>
        <strong>Your Feedback:</strong> ${req.body.field3} <br/>
        <strong>URL:</strong> ${req.body.url} <br/>
        <strong>Referer:</strong> ${req.body.referer} <br/>
      `,
    };
    const data = await mg.messages.create(process.env.WEBSITE, msg);
    return res
      .status(200)
      .json({ success: true, message: "Email sent!", data });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Mailgun request failed" });
  }
}
