import { useEffect, useState } from "react";
import user from "../assets/images/user.png";

const Profile = () => {

    const [users, setUsers] = useState({})
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
                console.log("Profile data", data);
                setUsers(data)
                console.log("Profile users", users);
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

    return (
        <section className="w-full mb-2 border p-4 rounded-lg max-w-full ">
            <div className="sm:w-1/2 mx-auto bg-neutral-100 p-10 sm:p-20">
                <div className="card md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                        <img className="object-cover rounded-full" src={user} alt="User profile" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <p className="font-bold mt-2 mb-3">Name : {users.name}</p>
                        <h3 className="heading">Email : {users.email}</h3>
                        {users.isAdmin ? <p className="mt-2 mb-3">Admin : Admin</p> : <p className="mt-2 mb-3">Admin : Not Admin</p>}
                        <div>
                            <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{users.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile