import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        <p>{errors.username?.message}</p>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          {...register("email", { required: "Email is required" })}
          id="email"
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Passowrd is Required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Password must be at least 8 characters and contain at least one letter and one number",
            },
          })}
          id="password"
        />
        <p>{errors.password?.message}</p>

        <button>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default YoutubeForm;
