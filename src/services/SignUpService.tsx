import axios from "axios";
import type { SignUpFormValues } from "../schema/signupSchema";

export async function signUpData(data: SignUpFormValues) {
  const response = await axios.post(
    "https://linked-posts.routemisr.com/users/signup",
    data,
  );
  console.log(response);

  return response;
}
