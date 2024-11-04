import aboutusImage from "../assets/images/about.png"
const About = () => {
    return (
        <>
            <div className="sm:flex items-center max-w-screen-xl ">
                <div className="sm:w-1/3 p-10 ">
                    <div className="image object-center text-center">
                        <img 
                        data-aos="fade-right"
                        src={aboutusImage} alt="Company Logo" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div
                    data-aos="fade-left"
                    className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-500 uppercase">About us</span>
                        <h2 className="my-4 font-extrabold text-3xl  sm:text-4xl ">About <span className="text-indigo-500">Our Company</span>
                        </h2>
                        <p className="text-gray-700">

                            Welcome to <span className="text-indigo-500 font-extrabold">MERN</span>, where we thrive on the MERN stack. MongoDB, Express.js, React.js, and Node.js come together to power our cutting-edge solutions. With MongoDB handling data, Express.js managing the backend, React.js crafting dynamic interfaces, and Node.js ensuring top-notch performance, we deliver high-quality web applications that exceed expectations. Join us as we innovate, one stack at a time.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About