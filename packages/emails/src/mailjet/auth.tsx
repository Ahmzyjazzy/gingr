import { render } from "@react-email/render";
import { mailjet } from "./mailjet";
import { OtpEmail, ShareReferralEmail, WelcomeEmail } from "../emails";
import nodemailer from "nodemailer";

export const sendOneTimePassword = async ({
  subject,
  email,
  name,
  otpCode,
}: {
  subject: string;
  email: string;
  name: string;
  otpCode: string;
  }) => {
  console.log("Mail from sendOneTimePassword");
  
  const HTMLPart = await render(<OtpEmail name={name} token={otpCode} />);
  const TextPart = await render(<OtpEmail name={name} token={otpCode} />, {
    plainText: true,
  });
  // const emailSubject = subject;

  // console.log({ mailjet: mailjet.getConfig(), api: mailjet.getAPIKey(), secret: mailjet.getAPISecret() }, );

  // return await mailjet.post("send", { version: "v3.1" }).request({
  //   Messages: [
  //     {
  //       From: {
  //         Email: "noreply@gingr.io",
  //         Name: "Gingr",
  //       },
  //       To: [
  //         {
  //           Email: email,
  //         },
  //       ],
  //       Subject: emailSubject,
  //       TextPart,
  //       HTMLPart,
  //     },
  //   ],
  // });
  try {

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || "smtp.ethereal.email",
      port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: process.env.EMAIL_SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_SERVER_USER || "gavin17@ethereal.email",
        pass: process.env.EMAIL_SERVER_PASSWORD || "PRHvj55c1vBjEvDVsX",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "olanrewajuahmed095@yahoo.com",
      subject: "One Time Password",
      text: TextPart,
      html: HTMLPart,
    });

    return {
      message: "Email sent successfully",
    };
  } catch (error: any) {
    console.error("Email error:", error);

    return { message: "Failed to send email", error: error.message };
  }
};

export const sendWelcomeEmail = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  const HTMLPart = await render(<WelcomeEmail name={name} />);
  const TextPart = await render(<WelcomeEmail name={name} />, {
    plainText: true,
  });
  const emailSubject = 'Welcome to Gingr';

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "noreply@gingr.io",
          Name: "Gingr",
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: emailSubject,
        TextPart,
        HTMLPart,
      },
    ],
  });
};

export const sendRefferalLink = async ({
  email,
  name,
  refferalCode,
  refferalLink,
}: {
  email: string;
  name: string;
  refferalCode: string;
  refferalLink: string;
}) => {
  const HTMLPart = await render(<ShareReferralEmail name={name} refferalCode={refferalCode} refferalLink={refferalLink} />);
  const TextPart = await render(<ShareReferralEmail name={name} refferalCode={refferalCode} refferalLink={refferalLink} />, {
    plainText: true,
  });
  const emailSubject = `Join ${name} on Gingr`;

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "noreply@gingr.io",
          Name: "Gingr",
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: emailSubject,
        TextPart,
        HTMLPart,
      },
    ],
  });
};