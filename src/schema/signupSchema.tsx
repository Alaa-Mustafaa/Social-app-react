import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z.string().nonempty("Name is Required"),
    email: z.string().email().nonempty("Email is Required"),
    password: z.string().nonempty("Password is Required"),
    rePassword: z.string().nonempty("RePassword is Required"),
    dateOfBirth: z.string().nonempty("Date Of Birth is Required"),
    gender: z.enum(["male", "female"]),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords Must Match",
    path: ["rePassword"],
  });

export type SignUpFormValues = z.infer<typeof SignUpSchema>;
