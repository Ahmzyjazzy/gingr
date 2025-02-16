import { render } from "@react-email/render";
import { Login } from "../emails";
import { mailjet } from "./mailjet";

export const sendMagicLogin = async ({
  email,
  magicLink,
}: {
  email: string;
  magicLink: string;
}) => {
  const { host } = new URL(magicLink);
  const HTMLPart = await render(<Login loginLink={magicLink} host={host} />);
  const TextPart = await render(<Login loginLink={magicLink} host={host} />, {
    plainText: true,
  });
  const emailSubject = `Login to ${host}`;

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "noreply@m30.io",
          Name: "m30",
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
