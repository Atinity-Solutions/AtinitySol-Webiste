import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Configure the Nodemailer transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT as string, 10),
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Define the HTML content with placeholders
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Form Submission</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <style type="text/css">
          body, table, td, a {
            -webkit-text-size-adjust: 100%; 
            -ms-text-size-adjust: 100%;
          }
          table {
            border-collapse: collapse !important;
          }
          body {
            height: 100% !important; 
            margin: 0 !important; 
            padding: 0 !important; 
            width: 100% !important;
          }
          @media screen and (max-width: 525px) {
            .wrapper {
              width: 100% !important; 
              max-width: 100% !important;
            }
            .responsive-table {
              width: 100% !important;
            }
            .padding {
              padding: 10px 5% 15px 5% !important;
            }
            .section-padding {
              padding: 0 15px 50px 15px !important;
            }
          }
          .form-container {
            margin-bottom: 24px; 
            padding: 20px; 
            border: 1px dashed #ccc;
          }
          .form-heading {
            color: #2a2a2a; 
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; 
            font-weight: 400; 
            text-align: left; 
            line-height: 20px; 
            font-size: 18px; 
            margin: 0 0 8px; 
            padding: 0;
          }
          .form-answer {
            color: #2a2a2a; 
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; 
            font-weight: 300; 
            text-align: left; 
            line-height: 20px; 
            font-size: 16px; 
            margin: 0 0 24px; 
            padding: 0;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: #fff">
        <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table">
                <tr>
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323;" class="padding message-content">
                                <h2>New Contact Message</h2>
                                <div class="form-container">
                                  <p class="form-heading">Name:</p>
                                  <p class="form-answer">${name}</p>
                                  <p class="form-heading">Email:</p>
                                  <p class="form-answer">${email}</p>
                                  <p class="form-heading">Subject:</p>
                                  <p class="form-answer">${subject}</p>
                                  <p class="form-heading">Message:</p>
                                  <p class="form-answer">${message}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: process.env.EMAIL_USER, // The recipient’s email address
      replyTo: email, // Email address entered by the user
      subject: subject, // Include the subject
      html: htmlContent, // Use the HTML content
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    // Handle errors
    return new Response(
      JSON.stringify({
        success: false,
        message: `Error sending email via Nodemailer: ${error.message}`,
      }),
      { status: 500 }
    );
  }
}
