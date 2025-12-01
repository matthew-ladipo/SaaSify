import React from 'react'

export default function AuthLayout({ children, illustration }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-10">
        <div className="max-w-md w-full">{children}</div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 justify-center items-center">
        <img
        src="illustration"
          alt="Illustration"
          className="w-[70%] object-contain"
        />
      </div>
    </div>
  );
}
