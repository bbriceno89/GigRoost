import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function NewRental() {
    const [formData, setFormData] = useState({})
    const { user, setUser } = useContext(UserContext)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value})
    }
    console.log(JSON.stringify(formData))
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/rentals', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r=>{
            if (r.ok) {
              setIsError(false)
              return r.json()}
            throw new Error("Something went wrong")
          })
          .then(data=>{
            setUser(data)
            navigate('/my_rentals', {replace: true})
          })
          .catch((error)=>{
            console.log(error)
            setIsError(true)
          })
      
    }

    return(
        <div className="bg-pallette1 w-fill h-fit py-6">
            <h2 className="text-center text-lg font-semibold text-pallette6 mb-5">New Listing</h2>
            {!!isError ? <p className="text-center mb-4">Something went wrong</p> : null}
            <form onSubmit={handleSubmit} onChange={handleChange} value={formData} className="grid grid-cols-5 grid-rows-12 gap-y-1 gap-x-3 outline-double outline-8 outline-pallette4 bg-pallette2 py-3" >
                <span className="col-start-2">Location:</span>
                <input name="location" className="col-start-2 col-span-3" />
                <span className="col-start-2">Beds:</span>
                <span className="col-start-3">Baths:</span>
                <span className="col-start-4">Square Feet:</span>
                <input name="beds" type="number" className="col-start-2" />
                <input name="baths" type="number" step="0.5" className="col-start-3" />
                <input name="sq_ft" className="col-start-4" />
                <span className="col-start-2">Image:</span>
                <input name="image_url" placeholder="Image URL" className="col-start-2 col-span-2" />
                <span className="col-start-2">Description:</span>
                <input name="description"className="col-start-2 col-span-3"/>
                <button type="submit" className="col-start-4 bg-pallette5 hover:bg-pallette3 outline outline-pallette4 outline-1">Submit</button>
            </form>
        </div>


    )
}

export default NewRental;