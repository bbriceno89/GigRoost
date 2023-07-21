import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const { user, setUser } = useContext(UserContext)
  const [isError, setIsError] = useState(false)
  
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values)=> {
      fetch('/api/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
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
  })


  const errorMessage = (
    <div className="grid grid-cols-3 gap-4">
      <p className="col-start-2 w-fit outline outline-red-500 p-1 mb-4 text-sm text-red-600 bg-red-300">Error: Username or Password Incorrect.</p>
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
        <form className="grid grid-rows-4 grid-cols-3 gap-y-4 h-fill"
        onSubmit={formik.handleSubmit}>
          <input 
          className={formik.errors.username && formik.touched.username ? "col-start-2 rounded-md bg-red-300 placeholder-black" : "col-start-2 rounded-md placeholder-black"}
          type="text" placeholder="Username" name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}/>
          {formik.errors.username && formik.touched.username ? <p>{formik.errors.username}</p> : null}
          <input 
          className={formik.errors.password && formik.touched.password ? "col-start-2 rounded-md bg-red-300 placeholder-black" : "col-start-2 rounded-md placeholder-black"}
          type="password" placeholder="Password" name="password"
          onChange={formik.handleChange}
          onBlur={formik.onBlur}
          value={formik.values.password}/>
          {formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : null}
          <button className="col-start-2 bg-pallette6" type="submit">Submit</button>
          <h4 className="text-pallette6 text-sm text-right col-start-2 hover:underline cursor-pointer" onClick={()=>alert("L")} >Forgot password?</h4>
        </form>
      </div>
    </div>
  );
}

export default Login;