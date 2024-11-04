import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [IsAdmin, setIsAdmin] = useState(false)
    const isLoggedIn = !!token
    const userAuthentication = async () => {
        const jwtToken = localStorage.getItem("token");
        console.log(jwtToken);
        if (!jwtToken) {
            console.log("No token found.");
            return;
        }
        try {
            const response = await fetch("http://localhost:8000/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            console.log("Profile response", response);
            if (response.ok) {
                const data = await response.json();
                console.log("Data", data);
                const admin = data.isAdmin;
                setIsAdmin(admin)
                // window.location.reload();
            }
            else {
                console.log("Profile response error", response);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        userAuthentication()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const logOut = () => {
        localStorage.removeItem("token")
        setToken(null)
        setIsAdmin(false)
        navigate("/login")
    }
    console.log(isLoggedIn);
    return (
        <div>
            <div className="top-0 w-full bg-transparent lg:relative z-50 shadow-sm  ">
                <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-between">
                        <button>
                            <div className="flex items-center space-x-2">
                                <NavLink to={"/"} className=" text-indigo-500 font-extrabold text-2xl">MERN STACK</NavLink>
                            </div>
                        </button>
                        <div className="hidden lg:block">
                            <ul className="flex space-x-10 text-base font-semibold text-black/60 ">
                                <li className="hover:text-indigo-500 duration-300 ease-linear  " >
                                    <NavLink to="/" >Home</NavLink>
                                </li>
                                <li className=" hover:text-indigo-500 duration-300 ease-linear ">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="hover:text-indigo-500 duration-300 ease-linear">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li className="hover:text-indigo-500 duration-300 ease-linear">
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                {
                                    isLoggedIn && <li className="hover:text-indigo-500 duration-300 ease-linear">
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                }
                                {
                                    IsAdmin && <li className="hover:text-indigo-500 duration-300 ease-linear">
                                        <NavLink to="/admin">Admin</NavLink>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className="hidden lg:flex lg:items-center gap-x-2">
                            {
                                !isLoggedIn ? <>
                                    <NavLink to={"/signUp"} className="flex items-center text-black  justify-center px-3 py-2.5 font-semibold rounded-lg hover:bg-indigo-100 duration-300">Sign up</NavLink>
                                    <NavLink to={"/login"} className="flex items-center justify-center rounded-md bg-indigo-500 text-white px-6 py-2.5 font-semibold hover:drop-shadow transition hover:bg-indigo-700 duration-200">Login</NavLink>
                                </>
                                    :
                                    <button onClick={logOut} className="flex items-center justify-center rounded-md bg-indigo-500 text-white px-4 py-2.5 font-semibold hover:drop-shadow transition hover:bg-indigo-700 duration-200">Logout</button>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
