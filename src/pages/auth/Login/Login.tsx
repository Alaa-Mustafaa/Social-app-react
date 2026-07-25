import React from "react";
import loginImage from "../../../assets/images/Login.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Error/ErrorMessage";
import { LoginSchema, type LoginFormValues } from "../../../schema/loginSchema";
import { loginData } from "../../../services/LoginService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });

  async function onsubmit(data: LoginFormValues) {
    console.log(data, "l");

    try {
      const res = await axios.post('https://dummyjson.com/user/login', data);
      console.log(res);
      if (res.status == 200) {
        navigate('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  return (
    <section className="container   d-flex align-items-center justify-content-center min-vh-100">
      <div className="row g-4 w-100 bg-white shadow-lg p-4 rounded-3 d-flex align-items-center">
        <h1 className="text-center text-primary mb-3">Login</h1>

        <div className="col-md-6">
          <div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User Name
                </label>
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("username")}
                />
                <ErrorMessage error={errors.username}></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password")}
                />
                <ErrorMessage error={errors.password}></ErrorMessage>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img src={loginImage} alt="Login photo" />
        </div>
      </div>
    </section>
  );
}
