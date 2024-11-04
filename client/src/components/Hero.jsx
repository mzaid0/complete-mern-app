import { NavLink } from "react-router-dom"
import heroImage from "../assets/images/hero.png"

const Hero = () => {
    const token = localStorage.getItem("token")
    return (
        <div className="sm:flex sm:justify-between sm:px-20 px-10 mb-10">
            {/* Left side */}
            <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="true"
                className="w-full sm:w-1/2 sm:p-8 ">
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl font-extrabold mb-4">MERN <span className="text-indigo-500">STACK</span></h1>
                <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-gray-600 mb-8 w-full">
                    The MERN stack is a collection of JavaScript-based technologies used for building modern web applications.
                    It stands for MongoDB, Express.js, React.js, and Node.js.
                    <br />
                    {!token &&
                        <span className="font-semibold text-black">For download this project, Login and go down</span>
                    }
                </p>
                <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="mb-4 space-x-3">
                    <NavLink to="#" className=" text-black px-3 py-2.5 border border-indigo-500  font-semibold rounded-lg hover:bg-indigo-100 duration-300">Learn More</NavLink>
                    <NavLink to="/contact" className=" rounded-md bg-indigo-500 text-white px-6 py-2.5 font-semibold hover:drop-shadow transition hover:bg-indigo-700 duration-200">Connect Now</NavLink>
                </div>
            </div>
            {/* Right side */}
            <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="500"
                data-aos-delay="300"
                className="w-1/3">
                <img src={heroImage} alt="MERN Stack" className="w-full h-auto hidden sm:block" />
            </div>
        </div>
    )
}
export default Hero