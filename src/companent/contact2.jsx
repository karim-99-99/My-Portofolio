// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

// function ContactForm() {
//   const [state] = useForm("xnndeovn");

//   if (state.succeeded) {
//     return (
//       <div className="text-center text-white mt-8">
//         <p className="text-2xl font-semibold text-teal-400">
//           Thanks for your message!
//         </p>
//         <p className="text-gray-300 mt-2">
//           I'll get back to you as soon as possible.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form
//       action="https://formspree.io/f/xnndeovn"
//       method="POST"
//       className="mt-8 max-w-2xl mx-auto text-white"
//     >
//         <h2 className="text-4xl font-bold mt-40">Contact Me</h2>
//       <p className="text-2xl mt-10 mb-16">
//         Thanks for taking the time to reach out. How can I help you today?
//       </p>
//       <div className="mb-6">
//         <label htmlFor="email" className="block text-2xl mb-2">
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           className="w-full h-12 px-4 rounded-md border-2 border-gray-300 bg-white text-black focus:border-teal-500 focus:outline-none"
//           placeholder="Enter your email"
//           required
//         />
//         <ValidationError
//           prefix="Email"
//           field="email"
//           errors={state.errors}
//           className="text-red-500 text-sm mt-1"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="message" className="block  text-2xl mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           className="w-full h-32 px-4 py-2 rounded-md border-2 border-gray-300 bg-white text-black focus:border-teal-500 focus:outline-none"
//           placeholder="Enter your message"
//           required
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//           className="text-red-500 text-sm mt-1"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={state.submitting}
//         className="w-40 border-none p-2 rounded text-xl bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {state.submitting ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   );
// }

// export default ContactForm;

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnndeovn");

  if (state.succeeded) {
    return (
      <div className="text-center text-white mt-8 max-w-2xl mx-auto">
        <div className="bg-teal-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <p className="text-3xl font-semibold text-teal-300 mb-4">
            Thanks for your message!
          </p>
          <p className="text-xl text-gray-300">
            I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto text-white">
      <h2 className="text-4xl font-bold mt-40">Contact Me</h2>
      <p className="text-2xl mt-10 mb-16">
        Thanks for taking the time to reach out. How can I help you today?
      </p>

      <div className="mb-6">
        <label htmlFor="email" className="block text-2xl mb-2 text-start">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full h-12 px-4 rounded-md border-2 border-gray-300 bg-white text-black focus:border-teal-500 focus:outline-none"
          placeholder="Enter your email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-2xl mb-2 text-start">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-32 px-4 py-2 rounded-md border-2 border-gray-300 bg-white text-black focus:border-teal-500 focus:outline-none"
          placeholder="Enter your message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-40 border-none p-2 rounded text-xl bg-teal-800 bg-opacity-50 text-teal-300 hover:text-teal-100 shadow hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
