import FormData from "form-data";
import Mailgun from "mailgun.js";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const data = new URLSearchParams(event.body);
  const reqBody = Object.fromEntries(data.entries());

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
    url: "https://api.eu.mailgun.net",
  });

  try {
    const msg = {
      from: `${process.env.NAME} <info@${process.env.WEBSITE}>`,
      to: `stefan.ciobanu@topfed.com`,
      subject: `${reqBody.field2} - ${reqBody.field1}`,
      "h:Reply-To": `${reqBody.field2} <${reqBody.field3}>`,
      html: `
        <strong>Your Name:</strong> ${reqBody.field1} <br/>
        <strong>Business Name:</strong> ${reqBody.field2} <br/>
        <strong>Business Email:</strong> ${reqBody.field3} <br/>
        <strong>Business Phone:</strong> ${reqBody.field4} <br/>
        <strong>Company Location:</strong> ${reqBody.field5} <br/>
        <strong>Company Website:</strong> ${reqBody.field6} <br/>
        <strong>Date Established:</strong> ${reqBody.startDate} <br/>
        <strong>Details Company:</strong> ${reqBody.field9} <br/>
        <strong>Referer:</strong> ${reqBody.referer} <br/>
      `,
    };

    const mailResponse = await mg.messages.create(process.env.WEBSITE, msg);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent!",
        mailResponse,
      }),
    };
  } catch (error) {
    return {
      statusCode: error.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
