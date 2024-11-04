import projectImg from "../assets/images/download.png"

const ProjectSection = () => {
    return (
        <div>
            <div className="w-full flex items-center justify-center bg-gray-100">
                <div className=" w-full p-6 bg-white rounded-lg shadow-sm">
                    <div className="flex justify-center mb-2">
                        <img
                        data-aos="fade-up"
                        src={projectImg} alt="Logo" className="w-52 h-auto" />
                    </div>
                    <h1
                    data-aos="fade-up"
                     className="text-2xl font-semibold text-center mb-6">Download this <span className="text-indigo-600 font-extrabold">Project</span></h1>
                    <p 
                    data-aos="fade-up"
                    className="text-sm text-gray-600 text-justify mt-8 mb-6"></p>
                    <div className="flex justify-center space-x-4 my-4">
                        <button
                        data-aos="fade-up"
                        className="w-1/3 mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            Download
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectSection