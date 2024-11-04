import company1 from "../assets/images/company1.png"
import company2 from "../assets/images/company2.png"
import company3 from "../assets/images/company3.png"

const Companies = () => {
    const CompanyCards = [
        {
            img: company1,
            title: "Finance",
            description: "The words of finance companies is, We have found MERN stack to be incredibly efficient for our development needs. It has helped us deliver high-quality applications to our clients in record time."
        },
        {
            img:company2 ,
            title: "Entertainment",
            description: "MERN stack has revolutionized our development process. Its seamless integration of technologies allows our team to collaborate more effectively and deliver exceptional results"
        },
        {
            img: company3,
            title: "Ride Sharing",
            description: "With MERN stack, we ve experienced unparalleled scalability and performance. It has become the backbone of our development infrastructure, allowing us to tackle projects of any size with confidence."
        }
    ]
    return (
        <div className="mt-12 px-8">
            <h2
            data-aos="fade-up"
            
            className="text-3xl font-extrabold mb-4 text-center ">Collaboration with <span className="text-indigo-500"> MERN Stack</span></h2>
            <div className="flex flex-wrap">
                {
                    CompanyCards.map(({ img, title, description }, index) => (
                        <div className=" w-full sm:w-1/3 p-4 " key={index}>
                            <div
                            data-aos="fade-up"
                            className="bg-white rounded-lg shadow-lg p-6">
                                <img src={img} alt="Company 1" className="w-full  h-[250px] object-contain mb-4" />
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-600">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Companies