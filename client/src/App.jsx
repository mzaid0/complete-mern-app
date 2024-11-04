import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Error from "./pages/Error"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Profile from "./pages/Profile"
import AdminUsers from "./pages/AdminUsers"
import AdminContacts from "./pages/AdminContacts"
import Admin from "./pages/Admin"
import AdminUserUpdate from "./pages/AdminUserUpdate"
import AdminServices from "./pages/AdminServices"
const App = () => {

  const token = localStorage.getItem("token")
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    })
    AOS.refresh()
  }, [])
  const [IsAdmin, setIsAdmin] = useState(false)
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

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {token && <Route path="/profile" element={<Profile />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Error />} />
          {IsAdmin&&<Route path="/admin" element={<Admin/>}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="users/update/:id" element={<AdminUserUpdate/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="services" element={<AdminServices/>}/>
          </Route>}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App