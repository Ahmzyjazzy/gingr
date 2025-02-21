import { ReactElement } from "react";
import { render } from "@react-email/render";
import { createTransport, getTestMessageUrl } from "nodemailer";

interface Config {
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };
  env: "production" | "staging" | "development";
  sender: {
    name: string;
    email: string;
  };
}

const config: Config = {
  smtp: {
    host: process.env.EMAIL_SERVER_HOST || "smtp.ethereal.email",
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    secure: process.env.EMAIL_SMTP_SECURE === "true",
    auth: {
      user: process.env.EMAIL_SERVER_USER || "gavin17@ethereal.email",
      pass: process.env.EMAIL_SERVER_PASSWORD || "PRHvj55c1vBjEvDVsX",
    },
  },
  env: process.env.NODE_ENV === "production" ? "production" : "development",
  sender: {
    name: process.env.EMAIL_FROM_NAME || "Decide - Indicina",
    email: process.env.EMAIL_FROM_ADDRESS || "no-reply@indicina.co",
  },
};

export const sendEmail = async (
  component: ReactElement,
  subject: string,
  options: {
    from?: string;
    to: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    attachments?: {
      filename: string;
      content: string;
      encoding: string;
    }[];
  },
) => {
  const transport = createTransport(config.smtp);

  try {
    const htmlContent = await render(component);
    const textContent = await render(component, { plainText: true });

    const result = await transport.sendMail({
      from: options.from || `${config.sender.name} <${config.sender.email}>`,
      to: options.to,
      cc: options.cc,
      bcc: options.bcc,
      replyTo: options.replyTo,
      subject,
      text: textContent,
      html: htmlContent,
      attachments: options.attachments,
    });

    if (config.env === "development") {
      console.log("Email sent successfully:", result, options);
      console.log("Preview URL: ", getTestMessageUrl(result));
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const renderEmail = render;
