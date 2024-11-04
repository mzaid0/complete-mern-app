import { useEffect, useState } from "react";
import Inputs from "../components/Inputs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUserUpdate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getSingleUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const userData = await response.json();
            setName(userData.name);
            setEmail(userData.email);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const updatedUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ name, email })
            });
            if (!response.ok) {
                toast.error("Failed to update user");
            }
            else{
                toast.success("User updated successfully");
                navigate("/admin/users")
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="m-10">
            <span className="text-3xl font-extrabold text-black border-b-2 border-indigo-500 uppercase">
                Update <span className="text-indigo-500">User</span>
            </span>
            <div className="mt-10">
                <form onSubmit={updatedUser}>
                    <Inputs
                        type={"text"}
                        placeholder={"Name"}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Inputs
                        type={"email"}
                        placeholder={"Email"}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button
                        type="submit"
                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-1/4 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminUserUpdate;
