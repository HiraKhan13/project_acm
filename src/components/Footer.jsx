import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between bg-[#f4f1ea] px-10 py-5 border-b-2">
      <div>
        <h1 className="font-semibold text-[#767676] h-7">COMPANY</h1>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Interest Based Ads</li>
          <li>Ad Preferences</li>
          <li>Help</li>
        </ul>
      </div>

      <div>
        <h1 className="font-semibold text-[#767676] h-7">WORK WITH US</h1>
        <ul>
          <li>Authors</li>
          <li>Advertise</li>
          <li>Authors & ads blog</li>
          <li>API</li>
        </ul>
      </div>

      <div>
        <h1 className="font-semibold text-[#767676] h-7">CONNECT</h1>
        <div className="flex gap-2 justify-center items-center space-x-2">
          <p className="p-1 hover:cursor-pointer ">
            <FaFacebook />
          </p>
          <p className="p-1 hover:cursor-pointer ">
            <FaTwitter />
          </p>
          <p className="p-1 hover:cursor-pointer ">
            <FaInstagram />
          </p>
          <p className="p-1 hover:cursor-pointer ">
            <FaLinkedinIn />
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center space-x-1.5">
          <img
            className="hover:cursor-pointer rounded-md h-10 w-25"
            src="download.png"
            alt="App Store"
          />
          <img
            className="hover:cursor-pointer rounded-md h-10 w-23"
            src="download2.png"
            alt="Google Play"
          />
        </div>
        <p className="text-sm">&copy; 2024 Goodreads,Inc.</p>
        <p className="text-sm">Mobile version</p>
      </div>
    </div>
  );
};

export default Footer;
