import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({})

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
    }


  return (
    <>
      <p>Login</p>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        value = {formData}>
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
