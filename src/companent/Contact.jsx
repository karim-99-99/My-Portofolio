import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({ username: "", email: "", message: "" });
  const [error, setErrors] = useState({});



  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!input.username) {
      newErrors.username = "Username is required";
    }
    if (!input.email) {
      newErrors.email = "email is required";
    }
    if (!input.message) {
      newErrors.password = "message is required";
    }
    setErrors(newErrors);
    console.log(input);
    if (Object.keys(newErrors).length === 0) {
      // Save authentication token when user registers
      localStorage.setItem('authToken', 'registered-user-token');
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl mt-16 font-bold">Contact Me </h2>
      <p className="text-2xl mt-10 mb-16">Thanks for taking the time to reach out. How can I help you today?</p>
    <form  onSubmit={handleSubmit}>
      <div className=" grid md:grid-cols-2 md:gap-4 ">
        <div className="flex flex-col  xl:ml-64">
        <label className="text-left text-2xl">Name</label>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleChange}
        className="h-16 xl:w-[360px]  border-2 border-gray-300 rounded-md p-2 mt-2 mb-4"
      />
      {error.username && <p>{error.username}</p>}
      </div>
      <div className="flex flex-col xl:ml-4">
      <label className="text-left text-2xl">E-mail</label>
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange}
        className="h-16 xl:w-[360px] border-2 border-gray-300 rounded-md p-2 mt-2 mb-4"
      />
      {error.email && <p>{error.email}</p>}
      </div>
      </div>
      <div className="flex flex-col xl:ml-64 xl:mr-56">
      <label className="text-left text-2xl"> Message</label>
      <textarea
        type="message"
        name="message"
        value={input.password}
        onChange={handleChange}
        className="h-48  border-2 border-gray-300 rounded-md p-2 mt-2 mb-4"

      />
      {error.message && <p>{error.message}</p>}
      </div>
      <button type="submit" className="w-40 border-none p-2 rounded text-3xl mt-7 bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600 ">Submit</button>
    </form>
    </div>
  );
};
export default Contact;
