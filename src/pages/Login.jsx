import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="relative bg-[#f4f2e9] container mx-auto py-4">
          <h1 className="sm:ml-1 md:ml-40 mb-6 text-3xl md:text-4xl font-thin text-[#382110] text-center md:text-left">
            good<span className="font-bold text-[#382110]">reads</span>
          </h1>
          <hr className="mx-4" />
          <img
            src="bg.jpeg"
            alt="backgrond"
            className="relative w-full h-40 sm:h-56 md:h-72 object-cover"
          />
          <img
            src="meet.png"
            alt="meet"
            className="absolute top-24 left-1/4 md:top-32 md:left-60 w-24 md:w-32"
          />
        </div>

        <div className="absolute top-16 right-4 sm:right-10 md:right-20 bg-white p-4 sm:p-6 rounded-md shadow-md mt-8 w-[95%] sm:w-[80%] md:w-[40%] lg:w-[30%] border border-[#bfbebd] text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-center text-gray-800 mb-4">
            Discover &amp; read more
          </h3>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <button className="bg-[#f5d47a] hover:bg-[#f8c15d] text-black font-normal py-2 px-4 rounded border border-black">
              Continue with Amazon
            </button>
            <button className="bg-white hover:bg-gray-200 text-black font-normal py-2 px-4 rounded border border-black">
              Continue with Apple
            </button>
            <Link to="/home">
              <button className="bg-[#58371f] w-full h-11 hover:bg-[#382110] text-white font-normal py-2 px-4 rounded border border-black">
                Sign in with Email
              </button>
            </Link>
          </div>
          <br />
          <p className="font-normal text-xs sm:text-sm text-center text-[#999999]">
            By creating an account, you agree to the Goodreads{" "}
            <span className="text-[#00635d] hover:cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#00635d] hover:cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
          <br />
          <hr />
          <p className="p-2 text-xs sm:text-sm">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-[#00635d] hover:cursor-pointer hover:underline">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-5 md:mx-36">
        <div className="flex gap-10 w-[70%] ">
          <div className="w-[40%]">
            <h1 className="text-lg py-2 ">Deciding what to read next?</h1>
            <p className="text-sm pb-3">
              You're in the right place. Tell us what titles or genres you've
              enjoyed in the past, and we'll give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div className="w-[40%]">
            <h1 className="text-lg py-2 ">What are your friends reading?</h1>
            <p className="text-sm pb-3">
              Chances are your friends are discussing their favorite (and least
              favorite) books on Goodreads.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <img
              src="discover.png"
              alt="discover"
              className="object-cover w-full"
            />
            <p className="mt-6 mb-4">Search and Browse Books</p>
            <div className="flex justify-between items-center bg-white border-2 rounded-md border-[#f4f1ea] w-2/3">
              <input
                type="text"
                placeholder="Title / Author / ISBN"
                className="m-[2px] outline-none"
              />
              <p className="hover:cursor-pointer text-gray-500 text-[20px] font-medium">
                <IoIosSearch />
              </p>
            </div>
            <div className="flex mt-4 justify-between text-sm mr-20">
              <div>
                <ul className="text-[#00635d] hover:cursor-pointer">
                  <li className="hover:underline">Biography</li>
                  <li className="hover:underline">Business</li>
                  <li className="hover:underline">Art</li>
                  <li className="hover:underline">Children's</li>
                  <li className="hover:underline">Christian</li>
                  <li className="hover:underline">Classics</li>
                  <li className="hover:underline">Comics</li>
                  <li className="hover:underline">Cookbooks</li>
                </ul>
              </div>

              <div>
                <ul className="text-[#00635d] hover:cursor-pointer ">
                  <li className="hover:underline">Ebooks</li>
                  <li className="hover:underline">Fantasy</li>
                  <li className="hover:underline">Fiction</li>
                  <li className="hover:underline">Graphic Novels</li>
                  <li className="hover:underline">Historical Fiction</li>
                  <li className="hover:underline">History</li>
                  <li className="hover:underline">Horror</li>
                  <li className="hover:underline">Memoir</li>
                </ul>
              </div>

              <div>
                <ul className="text-[#00635d] hover:cursor-pointer ">
                  <li className="hover:underline">Music</li>
                  <li className="hover:underline">Mystery</li>
                  <li className="hover:underline">Nonfiction</li>
                  <li className="hover:underline">Poetry</li>
                  <li className="hover:underline">Psychology</li>
                  <li className="hover:underline">Romance</li>
                  <li className="hover:underline">Science</li>
                  <li className="hover:underline">Science Fiction</li>
                </ul>
              </div>

              <div>
                <ul className="text-[#00635d] hover:cursor-pointer ">
                  <li className="hover:underline">Self Help</li>
                  <li className="hover:underline">Sports</li>
                  <li className="hover:underline">Thriller</li>
                  <li className="hover:underline">Travel</li>
                  <li className="hover:underline">Young Adult</li>
                  <li className="hover:underline">More genres</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p>News & Interviews</p>
            <p className="mt-4 text-xs mb-4 hover:underline cursor-pointer text-[#00635d] font-semibold font-serif">
              2024 Debut Novels By Genre: Discover a New Voice
            </p>
            <img src="side.png" alt="side" />
            <p className="text-[#767676] text-xs mt-3 font-medium">
              51 Likes <span className="text-black"> . </span> 11 comments
            </p>
            <br />
            <div className="max-w-96">
              <h1 className="text-lg mb-1">Love lists?</h1>
              <div className="flex gap-20">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best Crime & Mystery Books
                  </h1>
                  <p className="text-[#999999] text-xs">
                    7,177 books | 16,655 voters
                  </p>
                </div>
                <div className="flex max-w-6 gap-1">
                  <img src="1.jpg" alt="1" />
                  <img src="2.jpg" alt="2" />
                  <img src="3.jpg" alt="3" />
                  <img src="4.jpg" alt="4" />
                </div>
              </div>
              <hr />

              <div className="flex gap-[105px]">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best for Book Clubs
                  </h1>
                  <p className="text-[#999999] text-xs">
                    13,283 books | 18,190 voters
                  </p>
                </div>

                <div className="flex max-w-6 gap-1">
                  <img src="5.jpg" alt="5" />
                  <img src="6.jpg" alt="6" />
                  <img src="7.jpg" alt="7" />
                  <img src="8.jpg" alt="8" />
                </div>
              </div>
              <hr />

              <div className="flex gap-16">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best Books of the 20th Century
                  </h1>
                  <p className="text-[#999999] text-xs">
                    7,775 books | 51,188 voters
                  </p>
                </div>

                <div className="flex max-w-6 gap-1">
                  <img src="9.jpg" alt="9" />
                  <img src="10.jpg" alt="10" />
                  <img src="11.jpg" alt="11" />
                  <img src="12.jpg" alt="12" />
                </div>
              </div>
              <hr />
              <br />
              <p className="text-[#00635d] hover:cursor-pointer hover:underline">
                More book lists
              </p>
            </div>

            <div>
              <br />
              <h1 className="font-medium text-lg">
                Are you an author or a publisher?
              </h1>
              <p className="text-sm">
                Gain access to a massive audience of book lovers. Goodreads is a
                great place to promote your books.
              </p>
              <br />
              <div className="flex gap-4 justify-center ">
                <button className="px-3  border border-[#bfbebd] rounded-md bg-[#f4f1ea] hover:bg-[#ede6d6] text-xs">
                  Author Program
                </button>
                <button className="px-3 border border-[#bfbebd] rounded-md bg-[#f4f1ea] hover:bg-[#ede6d6] text-xs">
                  Advertise
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <h1 className="font-semibold text-lg p-2">Quotes</h1>
            <div className="flex gap-1">
              <img src="mae.jpeg" alt="" className="rounded-full w-14 h-14" />
              <q className="font-serif">
                You only live once, but if you do it right, once is enough.
              </q>
            </div>
            <p className="font-medium ml-16 mt-[-30px]">― Mae West</p>
          </div>
          <div className="mt-12">
            <ul className="text-[#00635d] hover:cursor-pointer text-sm">
              <li className="hover:underline">Best Quotes</li>
              <li className="hover:underline">Love Quotes</li>
              <li className="hover:underline">Inspirational Quotes</li>
              <li className="hover:underline">Funny Quotes</li>
              <li className="hover:underline">Motivational Quotes</li>
              <li className="hover:underline">Life Quotes</li>
              <li className="hover:underline">Friends Quotes</li>
              <li className="hover:underline">Positive Quotes</li>
              <li className="hover:underline">More Quotes</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 my-8">
          <h1 className="font-medium text-xl">
            Goodreads Choice Awards: The Best Books 2023
          </h1>
          <div className="flex gap-3">
            <div className="mt-3 mr-2">
              <img src="choice.png" alt="choice" />
            </div>

            <div>
              <ul className="text-[#00635d] hover:cursor-pointer flex flex-col gap-2 text-sm font-medium mr-20">
                <li className="hover:underline">Best Books 2023 </li>
                <li className="hover:underline">Best Fiction</li>
                <li className="hover:underline">Best Historical Fiction</li>
                <li className="hover:underline">Best Mystery & Thriller</li>
                <li className="hover:underline">Best Romance</li>
                <li className="hover:underline">Best Romantasy</li>
                <li className="hover:underline">Best Fantasy</li>
                <li className="hover:underline">Best Science Fiction</li>
              </ul>
            </div>

            <div>
              <ul className="text-[#00635d] hover:cursor-pointer flex flex-col gap-2 text-sm font-medium">
                <li className="hover:underline">Best Horror</li>
                <li className="hover:underline">
                  Best Young Adult Fantasy & Science Fiction
                </li>
                <li className="hover:underline">Best Young Adult Fiction</li>
                <li className="hover:underline">Best Debut Novel</li>
                <li className="hover:underline">Best Nonfiction</li>
                <li className="hover:underline">Best Memoir & Autobiography</li>
                <li className="hover:underline">Best History & Biography</li>
                <li className="hover:underline">Best Humor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
