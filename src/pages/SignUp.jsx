import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-10 rounded-md shadow-md mt-8 w-[50%] border border-[#bfbebd] text-center">
        <h1 className="text-xl font-bold font-serif text-center text-[#382110] mb-4">Sign Up to Goodreads</h1>
        <div className="flex flex-col space-y-4 justify-center  ">
          <button className="bg-[#f5d47a] hover:bg-[#f8c15d] w-[55%] ml-32 text-black font-normal py-2 px-4 rounded border border-black">
            Continue with Amazon
          </button>
          <button className="bg-[#ffffff] text-black font-normal w-[55%] ml-32 py-2 px-4 rounded border border-black">
            Continue with Apple
          </button>
          <button className="bg-[#ffffff] text-black font-normal w-[55%] ml-32 py-2 px-4 rounded border border-black">
            Sign up with Google
          </button>
          <Link to="/home">
            <button className="bg-[#382110]  hover:bg-[#58371f] w-[55%] h-11 text-white font-normal py-2 px-4 rounded border border-black">
              Sign up  with Email
            </button>
          </Link>
        </div>
        <br />
        <p className="font-normal text-sm text-center text-[#999999]">
          By creating an account, you agree to the Goodreads{" "}
          <span className="text-[#00635d] hover:cursor-pointer hover:underline ">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#00635d] hover:cursor-pointer hover:underline ">
            Privacy Policy
          </span>
          .
        </p>
        <br />
        <hr />
        <p className="p-2">
          Already have an account{" "}
          <Link to="/">
            <span className="text-[#00635d] hover:cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
