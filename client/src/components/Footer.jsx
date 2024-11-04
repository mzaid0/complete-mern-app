import { NavLink } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="p-4 px-20 grid md:grid-cols-2 gap-12 xl:col-span-2 mt-10 bg-indigo-100/50">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Links</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li><NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">Homepage</NavLink></li>
                        <li><NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">FAQ</NavLink></li>
                        <li><NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">Sign up</NavLink></li>
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                            <NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">Terms and Conditions</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-sm leading-6 text-gray-600 hover:text-gray-900" to="#">Legal Notice</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our Newsletter</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">We will inform you about promotions and exclusive offers as well as new teaching materials.</p>
                <form className="mt-6 sm:flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only"> Email address</label>
                    <input type="email" name="email" id="email-address" autoComplete="email" required="" className="w-full min-w-0 border appearance-none rounded-md border-gray-300 bg-white px-2  text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="E-Mail Address" />
                    <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                        <div className="flex justify-end">
                            <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm duration-300 font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white w-full" type="submit">
                                <div className="relative">
                                    <div className="">Subscribe</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>
    )
}

export default Footer