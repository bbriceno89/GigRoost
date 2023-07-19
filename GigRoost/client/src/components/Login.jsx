import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

function Login() {
    const [formData, setFormData] = useState({})
    const { user, setUser } = useContext(UserContext)

    function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      setFormData({...formData, [name]: value});
    }
    function handleSubmit(e) {
      e.preventDefault();
      fetch('/api/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((r=>r.json()))
      .then(data=>setUser(data))
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
        <button className="col-start-2 bg-pallette5" type="submit">Submit</button>
        <p className="text-pallette6 text-sm text-right col-start-2 hover:underline cursor-pointer" onClick={()=>alert("L")} >Forgot password?</p>
      </form>
    </div>
  );
}

export default Login;
