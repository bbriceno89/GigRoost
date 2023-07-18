import React from "react";

function Login() {
  return (
    <>
      <p>Login</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
