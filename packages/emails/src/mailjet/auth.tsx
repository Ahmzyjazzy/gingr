import { render } from "@react-email/render";
import { mailjet } from "./mailjet";
import { OtpEmail, ShareReferralEmail, WelcomeEmail } from "../emails";

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
  const HTMLPart = await render(<OtpEmail name={name} token={otpCode} />);
  const TextPart = await render(<OtpEmail name={name} token={otpCode} />, {
    plainText: true,
  });
  const emailSubject = subject;

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