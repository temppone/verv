import FormData from "form-data";
import Mailgun from "mailgun.js";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.API_MAILGUN_KEY || "apikey",
    });
    const data = await mg.messages.create(
      "sandboxac203c9ff42f417a947555b3ea3d4790.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandboxac203c9ff42f417a947555b3ea3d4790.mailgun.org>",
        to: ["Giovani <oi@primitiva.cc>"],
        subject: `New message from: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }
    );
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
