import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io";

const Home = () => {
  const [books, setBooks] = useState(1);

  const handleInputChange = (e) => {
    setBooks(e.target.value);
  };

  const startChallenge = () => {
    alert(`You are starting a challenge to read ${books} book(s) in 2024!`);
  };

  return (
    <div className="flex justify-around bg-[#f5f3ef]">

      <div className="w-[25%] text-start mx-10">
        <div>
          <h1 className="font-semibold py-2">CURRENTLY READING</h1>
          <div className="flex">
            <div>
              <img className="w-20 h-37" src="maala.jpg" alt="maala" />
            </div>
            <div className="font-serif px-3">
              <h1 className="font-semibold hover:cursor-pointer hover:underline">Maala Part 1 / مالا حصہ اول</h1>
              <p>by <span className="hover:cursor-pointer hover:underline"> Nemrah Ahmed</span></p>
              <button className="border-2 border-slate-950 text-xs px-2 rounded-md">Update Progress</button>
            </div>
          </div>
          <p className="text-sm py-2 text-[#00635d]">
            <span className="hover:cursor-pointer hover:underline">View all books</span>
            <span> . </span>
            <span className="hover:cursor-pointer hover:underline">Add a book</span>
            <span> . </span>
            <span className="hover:cursor-pointer hover:underline">General update</span>
          </p>
        </div>
        <hr className="border-t-1 border-gray-300" />

        <div>
          <h1 className="font-semibold p-1">2024 READING CHALLENGE</h1>
          <p className="py-2 text-sm">Challenge yourself to read more this year!</p>
          <div className="flex">
            <div>
              <img className="w-20 h-40" src="challenge.png" alt="challenge" />
            </div>
            <div className='px-3'>
              <p>I want to read</p>
              <form>
                <input
                  type="number"
                  value={books}
                  min="1"
                  onChange={handleInputChange}
                  className="border-2 border-[#f4f1ea] rounded-md  w-16 text-center shadow-sm "
                />
                <p>books in 2024</p>
              </form>
              <button
                onClick={startChallenge}
                className="bg-[#f8f7f5] hover:bg-[#e8ddc3] border-gray-900 text-gray-800  py-1 px-2 rounded-md"
              >
                Start Challenge
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr className="border-t-1 border-gray-300" />

        <div>
          <h1 className='font-semibold p-2'>BOOKSHELVES</h1>
          <ul className="text-[#00635d] ">
            <li className="hover:underline hover:cursor-pointer ">14 <span className="hover:underline hover:cursor-pointer "> All</span></li>
            <li className="hover:underline hover:cursor-pointer "> 1 <span className="hover:underline hover:cursor-pointer ">Currently Reading</span></li>
            <li className="hover:underline hover:cursor-pointer ">12 <span className="hover:underline hover:cursor-pointer ">Read</span> </li>
          </ul>
        </div>

      </div>

      <div className="w-[50%]">
        <img src="pic.png" alt="pic" className='p-3' />
        <div className='flex justify-between'>
          <div>
            <h1 className='font-semibold'>UPDATES</h1>
          </div>
          <div className='flex  text-[#767676]'>
            <p className='p-1 hover:cursor-pointer'><IoIosSettings /></p>
            <h1 className=' hover:cursor-pointer text-sm'>Customize</h1>
          </div>
        </div>

        <p className='flex justify-center text-sm'> No More Updates! </p>

        <img src="" alt="" />
      </div>

      <div className="w-[25%] p-2">
        <div className='p-2'>
          <h1 className='font-semibold py-2'>NEWS & INTERVIEWS</h1>
          <p className="text-[#00635d] hover:underline hover:cursor-pointer text-sm font-semibold font-serif ">The Goodreads Editors' Picks for New October Reaading</p>
          <img className='py-3' src="news.jpg" alt="news" />
          <p className='text-[#767676] text-xs'>51 Likes <span className='text-black'> . </span> 11 comments</p>
        </div>
        <br />
        <hr className="border-t-1 border-gray-300" />

        <div>
        <h1 className='font-semibold py-2'>RECOMMENDATIONS</h1>
        <p>Because you are currently reading <span className='font-semibold'>Maala Part 1 / مالا حصہ اول:</span></p>
        <div className='flex'>
          <div>
            <img className='py-3' src="haalim.jpg" alt="haalim" />
          </div>
          <div className='px-2 py-2'>
            <h1 className='font-semibold'>Haalim / حالم</h1>
            <p>by <span className='hover:underline hover:cursor-pointer'>Nemrah Ahmed</span></p><br />
            <button className='rounded-sm bg-emerald-800 text-white hover:bg-emerald-900 px-4 py-1'>Want to Read</button>
          </div>
        </div>
        <p className='text-[#00635d] hover:underline hover:cursor-pointer text-sm'>View all books similar to Maala Part 1 / مالا حصہ اول</p>
        </div>
        <br />
        <hr className="border-t-1 border-gray-300" />

        <div>
          <h1 className='font-semibold py-2'>IMPROVE RECOMMENDATIONS</h1>
          <p className='text-sm'>Rating atleast 20 books improves your recommendations. You have rated 0.</p>
          <button className='bg-[#aca593] h-3 w-60'></button>
          <p className='text-[#aca593] text-xs'>0 / 20 (0%)</p>
          <p className='text-[#00635d] hover:underline hover:cursor-pointer text-sm py-2'>Rate more books</p>
        </div>
        <hr className="border-t-1 border-gray-300" />

        <div>
        <h1 className='font-semibold py-2'>GOODREADS CHOICE AWARDS</h1>
        <img src="awards.png" alt="awards" />
        </div>
        <br />
        <hr className="border-t-1 border-gray-300" />

        
      </div>

    </div>
  );
};

export default Home;
