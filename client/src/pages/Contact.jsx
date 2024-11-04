import { useState } from "react"
import Inputs from "../components/Inputs"

const Contact = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, message);

    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer " + token
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })
    
      console.log("Data from contact api", await response.json());
      if(response.ok){
        alert("Message sent successfully")
        setName("")
        setEmail("")
        setMessage("")
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <div className="  py-6 flex flex-col justify-center ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className=" relative px-4 py-10 bg-indigo-100 shadow-lg sm:rounded-3xl sm:p-20">

            <div
            data-aos="fade-down"
            className="text-center pb-6">
              <h1 className="text-3xl font-extrabold">Contact <span className="text-indigo-500">Us!</span> </h1>
              <p >
                Fill up the form below to send us a message.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <Inputs
                type={"text"}
                placeholder={"Name"}
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <Inputs
                type={"email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <textarea
                className="w-full px-8 mb-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Type your message here..." value={message} onChange={(e) => { setMessage(e.target.value) }} name="message" style={{ height: "121px" }}>
              </textarea>


              <div className="flex justify-between">
                <button
                  className="shadow bg-indigo-500 duration-300 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"  >Send ➤</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact