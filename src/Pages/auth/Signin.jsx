import React from "react";
import TextInput from "../../component/TextInput";
import SelectInput from "../../component/SelectInput";
import { Link, useNavigate } from "react-router-dom";


export default function Signin() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-50 rounded-r-[50px]">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            Welcome to our CRM.
            <br />
            Sign In to See The Latest Update.
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Enter your details to proceed further
          </p>

          {/* FORM */}
          <form className="space-y-6">
            {/* Full Name */}

            <TextInput label="Email" placeholder="support@craftui.com" />
            <TextInput
              label="Password"
              placeholder="Start typing..."
              type="password"
            />
            {/* TERMS */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input type="checkbox" className="accent-blue-600" />
                Remember Me
              </label>

              <label className="flex items-center gap-2 text-blue-800 text-sm cursor-pointer" onClick={() => navigate('/recover')}>
                Forgot Password?
              </label>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => navigate('/recover')}
                className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* SOCIAL LOGIN */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">Or sign in with</p>

            <div className="flex items-center justify-center mt-4 gap-4">
              <button className="p-2  rounded-md text-gray-600">
                <img
                  src="./signin&signup/twitter.png"
                  alt="Signup Illustration"
                  className="max-w-lg w-full"
                />
              </button>
              <button className="p-2  rounded-md text-gray-600">
                <img
                  src="./signin&signup/google.png"
                  alt="Signup Illustration"
                  className="max-w-lg w-full"
                />
              </button>
              <button className="p-2  rounded-md text-gray-600">
                <img
                  src="./signin&signup/facebook.png"
                  alt="Signup Illustration"
                  className="max-w-lg w-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center p-10">
        <img
          src="./signin&signup/Image-signin.png"
          alt="Signup Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </div>
  );
}
