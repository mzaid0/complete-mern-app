import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/Layouts/AdminSidebar"

const Admin = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <Outlet />
    </div>
  )
}

export default Admin