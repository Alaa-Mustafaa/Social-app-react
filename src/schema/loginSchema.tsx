import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().nonempty("User Name is Required"),
  password: z.string().nonempty("Password is Required"),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
