"use server";

import { OtpEmail, sendEmail } from "@gingr/emails";

export async function sendOneTimePasswordAction(params: {
  email: string;
  name: string;
  token: string;
}) {
  const { email, name, token } = params;
  const component = OtpEmail({ name, token });

  await sendEmail(component, `Verify Your Email`, {
    to: email,
  })
    .then((res: any) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}
