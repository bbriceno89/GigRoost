import React, { useState } from "react";

function Signup() {
  const [signupData, setSignupData] = useState({})

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
  }


  return (
    <>
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
    </>
  );
}

export default Signup;
