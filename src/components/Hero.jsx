import React from "react";

const Hero = () => {
  return (
    <div className="mx-16 w-36">
      <div className="p-2">
        <h1 className="font-semibold text-black">
          Bookshelves{" "}
          <span className=" text-[#00635d] font-semibold">(Edit)</span>
        </h1>
        <ul className="text-[#00635d] hover:cursor-pointer ">
          <li className="hover:underline"> All (20)</li>
          <li className="hover:underline">Read (12)</li>
          <li className="hover:underline">Currently Reading (1)</li>
          <li className="hover:underline">Want To Read (7)</li>
        </ul>
      </div>
      <hr className="border-t-1.5 border-[#f4f1ea] w-36" />

      <div className="p-2">
        <h1 className="font-semibold text-black">Your reading activity</h1>
        <ul className="text-[#00635d] hover:cursor-pointer ">
          <li className="hover:underline">Review drafts</li>
          <li className="hover:underline">Kindle Notes & Highlights</li>
          <li className="hover:underline">Reading Challenge</li>
          <li className="hover:underline">Year in Books</li>
          <li className="hover:underline">Reading Stats</li>
        </ul>
      </div>

      <div className="p-2">
        <h1 className="font-semibold text-black">Add books</h1>
        <ul className="text-[#00635d] hover:cursor-pointer">
          <li className="hover:underline">Recomendations</li>
          <li className="hover:underline">Explore</li>
        </ul>
      </div>

      <div className="p-2">
        <h1 className="font-semibold text-black">Tools</h1>
        <ul className="text-[#00635d] hover:cursor-pointer">
          <li className="hover:underline">Find duplicates</li>
          <li className="hover:underline">Widgets</li>
          <li className="hover:underline">Import and export</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
