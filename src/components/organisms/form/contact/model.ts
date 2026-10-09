import * as z from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Please enter a valid email"),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type MessageValues = z.infer<typeof schema>;

export const fields: {
  name: keyof MessageValues;
  label: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "subject", label: "Subject", required: true },
  { name: "message", label: "Message", multiline: true, required: true },
];
