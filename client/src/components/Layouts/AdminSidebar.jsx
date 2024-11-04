import { NavLink } from "react-router-dom"
import { HiUsers } from "react-icons/hi2";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { SiPhpmyadmin } from "react-icons/si";
import { FaHome } from "react-icons/fa";
const AdminSidebar = () => {
    return (
        <>
            <header>
                <div className="container h-screen bg-indigo-100 w-60 rounded-tr-md rounded-br-md">
                    <nav>
                        <ul className="w-full  space-y-2 p-4">
                            <div className=" p-2 rounded-lg hover:bg-indigo-300 duration-300 cursor-pointer text-indigo-900 font-semibold flex items-center gap-2 ">
                                <HiUsers />
                                <li ><NavLink to={"/admin/users"}>Users</NavLink></li>
                            </div>
                            <div className=" p-2 rounded-lg hover:bg-indigo-300 duration-300 cursor-pointer text-indigo-900 font-semibold flex items-center gap-2">
                                <RiContactsBook2Fill />
                                <li ><NavLink to={"/admin/contacts"}>Contacts</NavLink></li>
                            </div>
                            <div className=" p-2 rounded-lg hover:bg-indigo-300 duration-300 cursor-pointer text-indigo-900 font-semibold flex items-center gap-2">
                                <MdPlaylistAddCheckCircle />
                                <li ><NavLink to={"/admin/services"}>Services</NavLink></li>
                            </div>
                            <div className=" p-2 rounded-lg hover:bg-indigo-300 duration-300 cursor-pointer text-indigo-900 font-semibold flex items-center gap-2">
                                <FaHome />
                                <li ><NavLink to={"/"}>Home</NavLink></li>
                            </div>
                        </ul>
                        <span className=" text-indigo-300/50 flex items-center justify-center"><SiPhpmyadmin size={150} /></span>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default AdminSidebar