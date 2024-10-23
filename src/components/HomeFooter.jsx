import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const HomeFooter = () => {
  return (
    <div className="bg-[#f5f3ef] flex">
      <div className="w-[75%]"></div>

      <div className="w-[25%] pl-6">
        <div className="py-7">
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-semibold text-black h-7">COMPANY</h1>
              <ul className="text-sm">
                <li className="hover:underline hover:cursor-pointer">
                  About us
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Careers
                </li>
                <li className="hover:underline hover:cursor-pointer">Terms</li>
                <li className="hover:underline hover:cursor-pointer">
                  Privacy
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Interest Based Ads
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Ad Preferences
                </li>
                <li className="hover:underline hover:cursor-pointer">Help</li>
              </ul>
            </div>

            <div>
              <h1 className="text-sm font-semibold text-black h-7">
                WORK WITH US
              </h1>
              <ul className="text-sm">
                <li className="hover:underline hover:cursor-pointer">
                  Authors
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Advertise
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Authors & ads blog
                </li>
                <li className="hover:underline hover:cursor-pointer">API</li>
              </ul>
            </div>
          </div>

          <div className="py-4">
            <h1 className="text-sm font-semibold text-black h-8">CONNECT</h1>
            <div className="flex gap-2  space-x-2">
              <p className=" hover:cursor-pointer ">
                <FaFacebook />
              </p>
              <p className=" hover:cursor-pointer ">
                <FaTwitter />
              </p>
              <p className=" hover:cursor-pointer ">
                <FaInstagram />
              </p>
              <p className=" hover:cursor-pointer ">
                <FaLinkedinIn />
              </p>
            </div>
          </div>

          <div className="py-4">
            <div className="flex justify-around space-x-2">
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
            <p className="text-sm py-3">Mobile version</p>
            <p className="text-xs text-[#767676]">&copy; 2024 Goodreads,Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
