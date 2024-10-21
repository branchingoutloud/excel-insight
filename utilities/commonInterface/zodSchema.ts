import { z } from "zod";

const waitlistFormSchema = z.object({
  email: z.string().email().min(1, { message: "Valid Email is required" }),
  type: z.enum(["CTA", "FOOTER"]),
});

export { waitlistFormSchema };
