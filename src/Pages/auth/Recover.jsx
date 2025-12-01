import React from "react";
import { useNavigate } from "react-router-dom";

export default function Recover() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-gray-50 rounded-r-[50px]">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="w-full max-w-md p-8">
          
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
           Lost your password?<br />
           Enter your details to recover.          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Enter your details to proceed further
          </p>

          {/* FORM */}
          <form className="space-y-6">
            {/* Full Name */}
           

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <div className="flex items-center mt-1 border-b border-gray-300">
                <input
                  type="email"
                  placeholder="support@craftui.com"
                  className="w-full py-2 outline-none text-gray-700"
                />
                <span className="text-gray-400">✉️</span>
              </div>
            </div>

           

            
           

            {/* BUTTONS */}
        
              <button
                type="button"
                onClick={() => navigate('/details')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Recover Password
              </button>
             
            
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
          src="./signin&signup/Image-recover.png"
          alt="Signup Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </div>
  );
}
