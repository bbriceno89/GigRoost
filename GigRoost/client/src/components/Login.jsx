import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const { user, setUser } = useContext(UserContext)
    const [isError, setIsError] = useState(false)

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
      .then((r=>{
        if (r.ok) {
          setIsError(false)
          return r.json()
        }
        throw new Error('Something went wrong')
      }))
      .then(data=> {
        setUser(data)
        navigate('/', {replace: true})
      })
      .catch(error=>{
        console.log(error)
        setIsError(true)
      })
    }

    const errorMessage = (
      <div className="grid grid-cols-3 gap-4">
        <p className="col-start-2 w-fit outline outline-red-500 p-1 mb-4 text-sm text-red-600 bg-red-300">Error: Username or password does not exist</p>
      </div>
    )


  return (
    <div 
    className=" bg-pallette1 rounded-lg
    w-fill h-fit 
    mx-20 my-20 pb-12">
        <h2 className="text-pallette6 text-3xl font-bold text-center py-12">
            Welcome to GigRoost
        </h2>
      <div className="grid content-center">
        {!!isError ? errorMessage : null}
        <form className="grid grid-rows-4 grid-cols-3 gap-4 h-36"
          onChange={handleChange}
          onSubmit={handleSubmit}
          value = {formData}>
          <input className=" col-start-2 rounded-md"
          type="text" placeholder="Username" name="username" />
          <input className="col-start-2"
          type="password" placeholder="Password" name="password" />
          <button className="col-start-2 bg-pallette5" type="submit">Submit</button>
          <p className="text-pallette6 text-sm text-right col-start-2 hover:underline cursor-pointer" onClick={()=>alert("L")} >Forgot password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
