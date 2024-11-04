import { useState } from "react"
import Inputs from "../components/Inputs"
import { toast } from "react-toastify"

const AdminServices = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, description, image);
        const jwtToken = localStorage.getItem("token")

        const formData = new FormData()
        formData.set('title', title)
        formData.set('description', description)
        formData.append('image', image[0])
        // console.log(image[0]);
        const response = await fetch("http://localhost:8000/admin/services", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                // "content-type": "multipart/form-data"
            },
            body: formData
        })
        const responseData = await response.json();
        if(responseData){
            toast.success(responseData.msg)
            setTitle("")
            setDescription("")
            setImage(null)
        }
        console.log("response data", responseData);
    }
    return (
        <div className="m-10">
            <span className="text-3xl font-extrabold text-black border-b-2 border-indigo-500 uppercase">
                Add <span className="text-indigo-500">Services</span>
            </span>
            <div className="mt-10 w-1/2">
                <form onSubmit={handleSubmit} >
                    <Inputs
                        type={"text"}
                        placeholder={"Name"}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <Inputs
                        type={"text"}
                        placeholder={"Description"}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <Inputs
                        type={"file"}
                        // placeholder={"file"}
                        onChange={(e) => setImage(e.target.files)}
                        name="image"
                    />
                    <button
                        type="submit"
                        className="mt-5 tracking-wide px-2 w-auto font-semibold bg-indigo-500 text-gray-100 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminServices