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
      newErrors.email = "Email is required";
    }
    if (!input.message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", input);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold mt-40">Contact Me</h2>
      <p className="text-2xl mt-10 mb-16">
        Thanks for taking the time to reach out. How can I help you today?
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-4">
          <div className="flex flex-col xl:ml-64">
            <label className="text-left text-2xl">Name</label>
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
              className="h-16 xl:w-[360px] border-2 border-gray-300 rounded-md p-2 mt-2 mb-4 text-black"
            />
            {error.username && (
              <p className="text-start text-red-600">{error.username}</p>
            )}
          </div>
          <div className="flex flex-col xl:ml-4">
            <label className="text-left text-2xl">E-mail</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="h-16 xl:w-[360px] border-2 border-gray-300 rounded-md p-2 mt-2 mb-4 text-black"
            />
            {error.email && (
              <p className="text-start text-red-600">{error.email}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col xl:ml-64 xl:mr-56">
          <label className="text-left text-2xl">Message</label>
          <textarea
            name="message"
            value={input.message}
            onChange={handleChange}
            className="h-48 border-2 border-gray-300 rounded-md p-2 mt-2 mb-4 text-black"
          />
          {error.message && <p className="text-red-600">{error.message}</p>}
        </div>
        <button
          type="submit"
          className="w-40 border-none p-2 rounded text-3xl mt-7 bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
