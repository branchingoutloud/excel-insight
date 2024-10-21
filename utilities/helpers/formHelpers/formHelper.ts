"use server";
import { NextRequest, NextResponse } from "next/server";
import { BASE_URL, postData } from "@/utilities/api/apiConfig";
import { waitlistFormSchema } from "@/utilities/commonInterface/zodSchema";
import { prisma } from "../generalHelpers/generalHelpers";
import { z } from "zod";

export async function waitingListFormSubmit(
  values: z.infer<typeof waitlistFormSchema>
) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  // check if the email already exists in the database
  const emailExists = await prisma.waitlist.findFirst({
    where: {
      email: values.email,
    },
  });

  if (emailExists) {
    console.log("Email already exists");
    return { message: "Email already exists" };
  }

  const result = await prisma.waitlist.create({
    data: {
      email: values.email,
      type: values.type,
    },
  });

  return result;
}
