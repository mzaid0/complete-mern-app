import { useState } from "react"
import Inputs from "../components/Inputs"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const responseData = await response.json()
            console.log(responseData);
            if (response.ok) {
                // toast.success(responseData.msg)
                navigate('/')
                const jwtToken = (responseData.token)
                console.log("jwtToken",jwtToken);
                localStorage.setItem("token",jwtToken )
                window.location.reload()
            }
            else {
                toast.error(responseData.message ? responseData.message : responseData.msg)
            }
            

        } catch (error) {
            console.log("Failed to login", error);
        }
    }
    return (
        <div className=" bg-gray-100 text-gray-900 flex justify-center">
            <div className="w-screen m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className=" xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className=" flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold mb-3">
                            Log <span className="text-indigo-500">In</span>
                        </h1>
                        <div className="w-full flex-1 mt-3">
                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleSubmit}>

                                    <Inputs
                                        type={"email"}
                                        placeholder={"Email"}
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />

                                    <Inputs
                                        type={"password"}
                                        placeholder={"Password"}
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />


                                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <span className="ml-3">Log In</span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by templatanas
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login