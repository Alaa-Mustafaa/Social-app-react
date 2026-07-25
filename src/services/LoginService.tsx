import axios from "axios";
import type { LoginFormValues } from "../schema/loginSchema";

export async function loginData(data : LoginFormValues) {
  const response = await axios.post(
    "https://linked-posts.routemisr.com/users/login",
    data,
  );

  return response;
}
