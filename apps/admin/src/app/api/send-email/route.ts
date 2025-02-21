import { NextRequest, NextResponse } from "next/server";
import { OtpEmail, sendEmail } from "@gingr/emails";

export async function POST(req: NextRequest) {
  try {
    const { email, name, token } = await req.json();
    const component = OtpEmail({ name, token });

    await sendEmail(component, `Verify Your Email`, {
      to: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
