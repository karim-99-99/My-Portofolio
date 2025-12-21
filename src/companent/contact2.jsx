import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import useScrollAnimation from "../hooks/useScrollAnimation";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnndeovn");
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 });

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center text-white max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-teal-500/20 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-teal-300 mb-4">
              Thanks for your message!
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full text-white"
      >
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Contact <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Thanks for taking the time to reach out. How can I help you today?
          </p>
        </div>

        {/* Form Container */}
        <div 
          ref={formRef}
          className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 shadow-2xl ${
            formVisible ? "animate-scale-in" : "opacity-0 scale-95"
          }`}
        >
          {/* Email Field */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="email"
              className="block text-lg sm:text-xl mb-3 text-teal-400 font-semibold"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-lg border-2 border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-2"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="message"
              className="block text-lg sm:text-xl mb-3 text-teal-400 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 resize-none"
              placeholder="Enter your message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-400 text-sm mt-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {state.submitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;