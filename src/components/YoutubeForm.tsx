import React from "react";
import { useForm } from "react-hook-form";

const YoutubeForm = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username")}
          />
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
