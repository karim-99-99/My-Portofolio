import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { emailjsConfig } from "../config/emailjs.config";

function ContactForm() {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });

    try {
      await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        {
          to_email: emailjsConfig.toEmail,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        emailjsConfig.publicKey
      );

      setFormState({ submitting: false, succeeded: true, error: null });
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormState({
        submitting: false,
        succeeded: false,
        error: "Failed to send message. Please try again or use WhatsApp.",
      });
    }
  };

  if (formState.succeeded) {
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
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-lg border-2 border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
            {formState.error && (
              <p className="text-red-400 text-sm mt-2">{formState.error}</p>
            )}
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
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 resize-none"
              placeholder="Enter your message"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState.submitting}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {formState.submitting ? (
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

          {/* WhatsApp Contact Button */}
          <div className="mt-6 pt-6 border-t border-teal-400/20">
            <p className="text-center text-gray-300 mb-4 text-sm sm:text-base">
              Or contact me directly on WhatsApp
            </p>
            <a
              href="https://wa.me/201036064417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto mx-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;