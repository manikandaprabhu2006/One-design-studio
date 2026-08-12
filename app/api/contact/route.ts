import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const submission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
    });
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}
