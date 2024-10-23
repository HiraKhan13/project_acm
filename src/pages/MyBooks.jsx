import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Hero from "../components/Hero";
import novelsData from "../UrduNovelsData.json";

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(novelsData);
  }, []);
  return (
    <div className="px-24">
      <div className="flex items-center justify-around p-3">
        <h1 className="font-serif text-xl text-[#00635d] font-bold">
          My Books
        </h1>
        <div className="flex items-center justify-center gap-8">
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
          <div className="flex justify-center gap-3 text-[#00635d]">
            <Link
              to="/batch edit"
              className=" hover:underline hover:cursor-pointer"
            >
              Batch Edit
            </Link>
            <Link
              to="/settings"
              className=" hover:underline hover:cursor-pointer"
            >
              Settings
            </Link>
            <Link to="/stats" className=" hover:underline hover:cursor-pointer">
              Stats
            </Link>
            <Link to="/print" className=" hover:underline hover:cursor-pointer">
              Print
            </Link>
          </div>
        </div>
      </div>
        <hr className="border-t-1.5 border-[#f4f1ea] w-full" />

      <div className="flex ">
        <Hero />

        <div className="pr-4 mb-8">
          <div className="grid grid-cols-6 gap-6 mt-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col items-center bg-white shadow-md shadow-y-gray-400-slate-400 rounded-md hover:cursor-pointer "
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-lg text-center">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-center">{book.author}</p>
                <p className="text-sm text-gray-500 text-center">
                  ({book.year})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
