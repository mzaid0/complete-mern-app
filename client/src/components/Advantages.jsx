import img1 from "../assets/images/rapid.png"
import img2 from "../assets/images/singleLanguage.png"
import img3 from "../assets/images/scalibility.png"
import img4 from "../assets/images/community.png"
const Advantages = () => {

    const AdvantagesCards = [
        {
            img: img1,
            title: "Rapid Development",
            description: "With MERN stack, developers can build and deploy applications quickly."
        },
        {
            img: img2,
            title: "Single Language",
            description: "With MERN stack, developers can build and deploy applications quickly."
        },
        {
            img:img3,
            title: "Scalability",
            description: "With MERN stack, developers can build and deploy applications quickly."
        },
        {
            img:img4,
            title: "Active Community",
            description: "With MERN stack, developers can build and deploy applications quickly."
        },
    
    ]

    return (
        <>
            <div className=" px-10">
                <h2
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="500"
                data-aos-delay="300"
                className="text-2xl text-center font-extrabold mb-2">Advantages of <span className="text-indigo-500">MERN Stack</span>  Development</h2>
                <div className="flex gap-7 flex-wrap sm:flex-nowrap  w-full">
                    {
                        AdvantagesCards.map(({ img, title, description },index) => (
                            <div className="sm:w-1/4" key={index}>
                                <div
                                data-aos="fade-up"
                                className="bg-white rounded-lg shadow-lg p-6">
                                    <img src={img} alt="Advantage 1" className="w-full h-[200px] mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Advantages