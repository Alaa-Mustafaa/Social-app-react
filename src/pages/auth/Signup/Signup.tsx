import React from "react";
import signupImage from "../../../assets/images/Sign up.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpFormValues } from "../../../schema/signupSchema";
import ErrorMessage from "../../../components/Error/ErrorMessage";
import { signUpData } from "../../../services/SignUpService";
import axios from "axios";

export default function Signup() {
  const { register, handleSubmit , formState :{errors}} = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "male",
    },
    mode: "all",
  });

async function onsubmit(data: SignUpFormValues) {
  try {
    const res = await axios.post('https://dummyjson.com/users/add', {
      firstName: data.name,
      email: data.email,
      password: data.password,
      birthDate: data.dateOfBirth,
      gender: data.gender,
      username: data.name,
    });
    console.log(res.data);
    // navigate to login on success
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
  }
}
  return (
    <section className="container   d-flex align-items-center justify-content-center min-vh-100">
      <div className="row g-4 w-100 bg-white shadow-lg p-4 rounded-3">
        <h1 className="text-center text-primary mb-3">Sign Up</h1>

        <div className="col-md-6">
          <div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  {...register("name")}
                />
                <ErrorMessage error={errors.name}></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email")}
                />
                <ErrorMessage error={errors.email}></ErrorMessage>
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
              <div className="mb-3">
                <label htmlFor="exampleInputRepassword" className="form-label">
                  Re-password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputRepassword"
                  {...register("rePassword")}
                />
                <ErrorMessage error={errors.rePassword}></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputDate" className="form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDate"
                  {...register("dateOfBirth")}
                />
                <ErrorMessage error={errors.dateOfBirth}></ErrorMessage>
              </div>
              <label>Gender</label>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="genderMale"
                  value="male"
                  {...register("gender")}
                />
                <label className="form-check-label" htmlFor="genderMale">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="female"
                  {...register("gender")}
                  id="genderFemale"
                />
                <label className="form-check-label" htmlFor="genderFemale">
                  Female
                </label>
              </div>
                <ErrorMessage error={errors.gender}></ErrorMessage>

              <button type="submit" className="btn btn-primary w-100 mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img src={signupImage} alt="Sign up photo" />
        </div>
      </div>
    </section>
  );
}
