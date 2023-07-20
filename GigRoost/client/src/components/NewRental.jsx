import React, { useState } from "react";

function NewRental() {
    const [formData, setFormData] = useState({})

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
    }

    return(
        <div className="bg-pallette1 w-fill h-fit py-6">
            <p className="text-center text-lg font-semibold text-pallette6 mb-5">New Listing</p>
            <form className="grid grid-cols-5 grid-rows-12 gap-y-1 gap-x-3 outline-double outline-8 outline-pallette4 bg-pallette2 py-3" >
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