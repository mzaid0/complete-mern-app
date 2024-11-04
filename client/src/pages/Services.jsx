import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([])

  const allServices = async () => {
    const response = await fetch("http://localhost:8000/services")
    const responseData = await response.json()
    if (response.ok) {
      setServices(responseData)
    }
    console.log(responseData);
  }
  useEffect(() => {
    allServices()
  }, [])

  return (
    <>
      <div className="flex justify-start items-center gap-16 flex-wrap  w-full p-10">
        {
          services.map((services, index) => (
            <div className="sm:w-1/5 h-full" key={index}>
              <div
                data-aos="fade-up"
                className="bg-white rounded-lg shadow-lg p-6">
                <img src={"http://localhost:8000/" + services.image} alt="Advantage 1" className="w-[150px] h-[150px] object-cover mb-4" />
                <h3 className="text-xl font-bold mb-2">{services.title}</h3>
                <p className="text-gray-600">{services.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Services;
