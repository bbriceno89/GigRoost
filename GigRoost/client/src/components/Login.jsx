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
    <div className="grid content-center">
      <form className="grid grid-rows-4 grid-cols-3 gap-4 h-36"
        onChange={handleChange}
        onSubmit={handleSubmit}
        value = {formData}>
        <input className=" col-start-2 rounded-md"
        type="text" placeholder="Username" name="username" />
        <input className="col-start-2"
        type="text" placeholder="Password" name="password" />
        <button className="col-start-2 bg-pallette3" type="submit">Submit</button>
        <p className="text-pallette6 text-sm text-right col-start-2">Forgot password?</p>
      </form>
    </div>
  );
}

export default Login;
