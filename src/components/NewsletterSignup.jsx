import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
      <div className="relative bg-[#1f2943] rounded-2xl max-w-6xl w-full flex items-center justify-center gap-6 py-10 px-6 sm:px-12">
        {/* Left Icon */}
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
          alt="3D pink @ icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[120px] h-[160px] object-contain pointer-events-none select-none z-[1]"
          width="120"
          height="160"
        /> */}
        {/* Right Icon */}
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="3D blue mail icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[120px] h-[120px] object-contain pointer-events-none select-none z-[1]"
          width="120"
          height="120"
        /> */}

        {/* Form */}
        <form className="relative z-10 flex flex-col items-center gap-4 max-w-3xl w-full text-center">
          <h2 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
            Join Abhiko newsletter
          </h2>
          <p className="text-[#e1e6f0] text-sm sm:text-base max-w-md">
            Be among the first ones to receive our latest news and offers
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-6xl">
            {/* Name Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#6b7280]">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full rounded-md py-3 pl-10 pr-4 text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c7ff7]"
              />
            </div>

            {/* Email Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#6b7280]">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md py-3 pl-10 pr-4 text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c7ff7]"
              />
            </div>
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#6b7280]">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your Mobile no."
                className="w-full rounded-md py-3 pl-10 pr-4 text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c7ff7]"
              />
            </div>
           

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-br from-[#7c7ff7] to-[#5a5de0] text-white rounded-md px-6 py-3 shadow-[0_4px_10px_rgba(124,127,247,0.5)] hover:brightness-110 transition"
            >
              Join
            </button>
          </div>

          <p className="text-[#e1e6f0] text-xs sm:text-sm mt-4">
            You can easily unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
