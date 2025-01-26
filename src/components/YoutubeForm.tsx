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
  const { register, control, handleSubmit } = form;
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email">E-mail</label>
        <input type="text" {...register("email")} id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} id="password" />

        <button>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default YoutubeForm;
