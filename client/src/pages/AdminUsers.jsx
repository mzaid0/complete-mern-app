import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminUsers = () => {
    const [users, setUsers] = useState([])

    const jwtToken = localStorage.getItem("token");
    const getAllUsersData = async () => {
        const response = await fetch("http://localhost:8000/admin/users", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        })
        const responseData = await response.json();
        setUsers(responseData);
    }
    useEffect(() => {
        getAllUsersData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const deleteUser = async (id) => {
        // console.log(id);
        try {
            const response = await fetch(`http://localhost:8000/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            const responseData = await response.json();
            console.log("users deleted", responseData);
            if (response.ok) {
                toast.success(responseData.msg);
                getAllUsersData();
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="w-full max-h-screen overflow-y-scroll">
            <table className="w-full divide-y divide-gray-200 ">
                <thead className="bg-indigo-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user,index) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{index+1}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                <Link to={`/admin/users/update/${user._id}`} className="text-gray-500 hover:text-indigo-600 duration-150"><RiEdit2Line size={20} />
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                <button onClick={() => deleteUser(user._id)} className="text-gray-500 hover:text-red-600 duration-150"><RiDeleteBinLine size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default AdminUsers