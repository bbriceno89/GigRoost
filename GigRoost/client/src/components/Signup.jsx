import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

function Signup() {
  const [signupData, setSignupData] = useState({})
  const { user, setUser } = useContext(UserContext)
  const [isError, setIsError] = useState(false)

  function handleType(e) {
    setSignupData({...signupData, account_type: e.target.value})
  }

  function handleChange(e) {
    const name = e.target.name;
    const value= e.target.value;
    setSignupData({...signupData, [name]: value})
  }
  console.log(signupData)
  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(signupData)
    })
    .then(r=>{
      if (r.ok) {
        setIsError(false)
        return r.json()}
      throw new Error("Account name already taken")
    })
    .then(data=>setUser(data))
    .catch((error)=>{
      console.log(error)
      setIsError(true)
    })
  }

  const errorMessage = (
    <div className="grid grid-cols-3 gap-4">
      <p className="col-start-2 w-fit outline outline-red-500 p-1 mb-4 text-sm text-red-600 bg-red-300">Error: Username already taken</p>
    </div>
  )


  return (
    <>
    <div 
    className=" bg-pallette1 rounded-lg
    w-fill h-fit 
    mx-20 my-20 pb-12">
      <h2 className="text-pallette6 text-3xl font-bold text-center py-12">
          Welcome to GigRoost
      </h2>
      {!!isError ? errorMessage : null}
      <form onChange={handleChange} onSubmit={handleSubmit} className="grid grid-rows-4 grid-cols-3 gap-4 h-36">
        <input placeholder="Username" name="username" type="text" className=" col-start-2 rounded-md"/>
        <input placeholder="Password" name="password" type="text" className=" col-start-2 rounded-md"/>
        <div className="col-start-2">
          <div className="grid grid-cols-2 gap-2">
            <button value="host" type='button' onClick={handleType} className="col-start-1 bg-pallette5 focus:bg-pallette3">Host</button>
            <button value="artist" type="button" onClick={handleType} className="col-start-2 bg-pallette5 focus:bg-pallette3">Artist</button>
          </div>
        </div>
        <button type="submit" className=" col-start-2 rounded-md bg-pallette5">Create Account</button>
      </form>
    </div>
    </>
  );
}

export default Signup;