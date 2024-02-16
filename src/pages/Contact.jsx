import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
      <div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Connect with Our Digital Marketing Experts
          </h1>
          <h4 className="text-lg font-signature">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together.
          </h4>
        </div>
        <div className="color-container" id="spot4"></div>
        <div className="color-container" id="spot5"></div>

        <div
          className="bg-white shadow-lg rounded-lg p-8"
          style={{ width: "904px", height: "424px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side - Contact Information */}
            <div>
              <div className="grid grid-cols-1 gap-4 ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mt-10 mb-10"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-10"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-10"
                />
              </div>
            </div>

            {/* Right side - Message */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Message</h2>
              <textarea
                rows="9"
                placeholder="Your Message"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="font-semibold rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white hover:shadow-blue transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
