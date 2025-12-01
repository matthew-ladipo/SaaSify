import React from "react";
import TextInput from "../../component/TextInput";
import SelectInput from "../../component/SelectInput";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../component/AuthLayout";

export default function Details() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-gray-50 rounded-r-[50px]">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            Welcome to our CRM.
            <br />
            Sign Up to getting started.
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Enter your details to proceed further
          </p>

          {/* FORM */}
          <form className="mt-8 space-y-6">
            <TextInput label="Company name" placeholder="WhiteOnWhite" />

            <SelectInput label="Employees">
              <option>1-10 Employees</option>
              <option>10-50 Employees</option>
              <option>50-200 Employees</option>
            </SelectInput>

            <SelectInput label="Business">
              <option>Select business type</option>
              <option>Agency</option>
              <option>Finance</option>
              <option>Software</option>
            </SelectInput>

            <TextInput label="Phone" placeholder="Start typing..." />

            <div className="flex gap-4 pt-4">
              <Link
                to="/auth/register"
                className="w-full text-center bg-gray-100 py-2 rounded-md hover:bg-gray-200"
              >
                Cancel
              </Link>

              <button onClick={() => navigate('/finish')} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Next
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
          src="./signin&signup/Image-details.png"
          alt="Signup Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </div>
  );
}
