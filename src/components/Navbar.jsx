import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  IoNotifications
} from "react-icons/io5";
import { MdEmail, MdGroup, MdGroups2 } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const toggleBrowseDropdown = () => {
    setIsBrowseOpen(!isBrowseOpen);
    setIsCommunityOpen(false);
  };

  const toggleCommunityDropdown = () => {
    setIsCommunityOpen(!isCommunityOpen);
    setIsBrowseOpen(false);
  };

  return (
    <div className="flex bg-[#f4f1ea]  border-b-2 justify-between items-center">
      <div className="text-3xl font-light ml-12 text-[#382110]">
        <Link to='/home'>
          <h2>
            good<span className="font-semibold">reads</span>
          </h2>
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          to="/home"
          className=" hover:bg-[#382110] hover:cursor-pointer hover:text-white px-3 py-3"
        >
          Home
        </Link>
        <Link
          to="/mybooks"
          className=" hover:bg-[#382110] hover:cursor-pointer hover:text-white px-3 py-3"
        >
          My Books
        </Link>
        <div className=" hover:bg-[#382110] hover:text-white px-3 py-3">
          <p
            className="justify-center w-full cursor-pointer"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleBrowseDropdown}
          >
            Browse
          </p>
          {isBrowseOpen && (
            <div
              className="absolute mt-2 w-56  shadow-lg bg-white focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Recomendations
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Choice Awards
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Giveaways
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  New Releases
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Lists
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  News & Interviews
                </a>
              </div>
            </div>
          )}
        </div>

        <div className=" hover:bg-[#382110] hover:cursor-pointer hover:text-white px-3 py-3">
          <p
            className="justify-center w-full cursor-pointer"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleCommunityDropdown}
          >
            Community
          </p>
          {isCommunityOpen && (
            <div
              className="absolute mt-2 w-46  shadow-lg bg-white  focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Groups
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Discussions
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Quotes
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  Ask the Author
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-sm hover:underline hover:cursor-pointer"
                  role="menuitem"
                >
                  People
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center bg-white p-[2px] m-[2px] border rounded w-80">
        <input
          type="text"
          placeholder="Search and add books"
          className="m-[2px] w-full outline-none"
        />
        <p className="hover:cursor-pointer">
          <IoIosSearch />
        </p>
      </div>

      <div>
        <div className="flex justify-center gap-4 mr-10">
          <p className="hover:bg-[#382110]  hover:text-white hover:cursor-pointer px-3 py-3">
            <IoNotifications className="text-lg w-5 h-5" />
          </p>
          <p className="hover:bg-[#382110]  hover:text-white hover:cursor-pointer px-3 py-3">
            <MdGroup className="text-lg w-5" />
          </p>
          <p className="hover:bg-[#382110]  hover:text-white hover:cursor-pointer px-3 py-3">
            <MdEmail className="text-lg w-5" />
          </p>
          <p className="hover:bg-[#382110]  hover:text-white hover:cursor-pointer px-3 py-3">
            <MdGroups2 className="text-lg w-5" />
          </p>
          <p className="hover:bg-[#382110]  hover:text-white hover:cursor-pointer px-3 py-3">
            <FaBookReader className="text-lg w-5" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
