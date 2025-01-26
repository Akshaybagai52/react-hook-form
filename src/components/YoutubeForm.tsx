import React from "react";

const YoutubeForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
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
