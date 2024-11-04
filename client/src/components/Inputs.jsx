/* eslint-disable react/prop-types */
const Inputs = ({ type, placeholder, onChange, value }) => {
    return (
        <input
            className="w-full px-8 mb-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Inputs;
