import fetch from "node-fetch";

export default async function handler() {
  const BUILD_HOOK_URL = process.env.NETLIFY_BUILD_HOOK;

  try {
    const response = await fetch(BUILD_HOOK_URL, { method: "POST" });

    if (!response.ok) {
      throw new Error(`Build trigger failed: ${response.statusText}`);
    }

    return { statusCode: 200, body: "Build triggered successfully!" };
  } catch (error) {
    return { statusCode: 500, body: `Error: ${error.message}` };
  }
}
