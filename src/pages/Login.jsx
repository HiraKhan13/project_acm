import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="relative bg-[#f4f2e9] container mx-auto py-4 ">
          <h1 className="ml-40 mb-6 text-4xl font-thin text-[#382110]">
            good<span className="font-bold text-[#382110]">reads</span>
          </h1>
          <hr />
          <img src="bg.jpeg" alt="backgrond" className="relative w-full h-72" />
          <img src="meet.png" alt="meet" className="absolute top-32 left-60 " />
        </div>

        <div className="absolute top-16 right-40 bg-white p-6 rounded-md shadow-md mt-8 w-[24%] border border-[#bfbebd] text-center">
          <h3 className="text-xl font-normal  text-center text-gray-800 mb-4">
            Discover &amp; read more
          </h3>
          <div className="flex flex-col space-y-4">
            <button className="bg-[#f5d47a] hover:bg-[#f8c15d] text-black font-normal py-2 px-4 rounded border border-black">
              Continue with Amazon
            </button>
            <button className="bg-[#ffffff] hover:bg-[#d1d0d0] text-black font-normal py-2 px-4 rounded border border-black">
              Continue with Apple
            </button>
            <Link to='/home'>
              <button className="bg-[#58371f] hover:bg-[#382110] text-white font-normal py-2 px-4 rounded border border-black">
              Sign in with Email
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
            Dont have an account?{" "}
            <Link to="/signup">
              <span className="text-[#00635d] hover:cursor-pointer hover:underline">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="ml-36 mr-36">
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

        <div className="flex">
          <div className="w-full">
            <img src="discover.png" alt="discover" />
            <p>Search and Browse Books</p>
            <div className="flex justify-center items-center bg-white p-[2px] m-[2px] border-2 rounded-md border-[#f4f1ea]">
              <input
                type="text"
                placeholder="Search and add books"
                className="m-[2px] w-full outline-none"
              />
              <p className="hover:cursor-pointer">
                <IoIosSearch />
              </p>
            </div>
            <div className="flex">
              <div>
                <ul className="text-[#00635d] hover:cursor-pointer ">
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
            <p>2024 Debut Novels By Genre: Discover a New Voice</p>
            <img src="side.png" alt="side" />
            <p className="text-[#767676] text-xs">
              51 Likes <span className="text-black"> . </span> 11 comments
            </p>
            <br />
            <div>
              <h1 className="text-lg">Love lists?</h1>
              <div className="flex">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best Crime & Mystery Books
                  </h1>
                  <p className="text-[#999999] text-xs">
                    7,177 books | 16,655 voters
                  </p>
                </div>
                <div className="flex">
                  <img src="1.jpg" alt="1" />
                  <img src="2.jpg" alt="2" />
                  <img src="3.jpg" alt="3" />
                  <img src="4.jpg" alt="4" />
                </div>
              </div>
              <hr />

              <div className="flex ">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best for Book Clubs
                  </h1>
                  <p className="text-[#999999] text-xs">
                    13,283 books | 18,190 voters
                  </p>
                </div>

                <div className="flex">
                  <img src="5.jpg" alt="5" />
                  <img src="6.jpg" alt="6" />
                  <img src="7.jpg" alt="7" />
                  <img src="8.jpg" alt="8" />
                </div>
              </div>
              <hr />

              <div className="flex">
                <div>
                  <h1 className="text-[#00635d] text-sm hover:cursor-pointer hover:underline">
                    Best Books of the 20th Century
                  </h1>
                  <p className="text-[#999999] text-xs">
                    7,775 books | 51,188 voters
                  </p>
                </div>

                <div className="flex">
                  <img src=".jpg" alt="9" />
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
              <h1>Are you an author or a publisher?</h1>
              <p>
                Gain access to a massive audience of book lovers. Goodreads is a
                great place to promote your books.
              </p>
              <br />
              <div className="flex space-x-4 ">
                <button className="px-4 p-1 rounded-md bg-[#f4f1ea] hover:bg-[#ede6d6]">
                  Author Program
                </button>
                <button className="px-4 p-1 rounded-md bg-[#f4f1ea] hover:bg-[#ede6d6]">
                  Advertise
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <h1>Quotes</h1>
            <q>You only live once, but if you do it right, once is enough.</q>
            <p>― Mae West</p>
          </div>
          <div>
            <ul className="text-[#00635d] hover:cursor-pointer ">
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

        <div>
          <h1>Goodreads Choice Awards: The Best Books 2023</h1>
          <div className="flex">
            <div>
              <img src="choice.png" alt="choice" />
            </div>

            <div>
              <ul className="text-[#00635d] hover:cursor-pointer ">
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
              <ul className="text-[#00635d] hover:cursor-pointer ">
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
