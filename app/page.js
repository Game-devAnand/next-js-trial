"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  //flex justify-center items-center
  return (
    <main className="bg-white">
      <div className="bg-gray-800 p-4 flex flex-row justify-between sticky top-0">
        <h1 className="text-white font-bold text-2xl">Events</h1>
        <div className="flex space-x-4">
          <button
            className="text-white font-normal"
            type="button"
            onClick={() => (window.location.hash = "#home")}
          >
            Home
          </button>
          <button
            className="text-white font-normal"
            type="button"
            onClick={() => (window.location.hash = "#about")}
          >
            About
          </button>
          <button
            className="text-white font-normal"
            type="button"
            onClick={() => (window.location.hash = "#speaker")}
          >
            Speakers
          </button>
          <button
            className="text-white font-normal"
            type="button"
            onClick={() => (window.location.hash = "#contact")}
          >
            Contact
          </button>
        </div>
      </div>
      <div
        id="home"
        className="bg-gray-700 h-screen flex justify-center items-center"
      >
        <h1 className="text-white text-2xl font-bold">Home</h1>
      </div>
      <div
        id="about"
        className="bg-gray-950 h-72 flex justify-center items-center"
      >
        <h1 className="text-white text-2xl font-bold">About</h1>
      </div>
      <div
        id="speaker"
        className="bg-gray-700 h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-2xl font-bold pt-10">EVENT SPEAKERS</h1>
        <div id="speaker" className=" flex flex-row justify-between">
          <div className="bg-gray-900 max-w-sm rounded overflow-hidden shadow-lg m-10">
            <div id="image" className="bg-black h-48"></div>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">SPEAKERS1</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #programmer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          {/* card1 */}
          <div className="bg-gray-900 max-w-sm rounded overflow-hidden shadow-lg m-10">
            <div id="image" className="bg-black h-48"></div>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">SPEAKERS1</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #programmer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-gray-900 max-w-sm rounded overflow-hidden shadow-lg m-10">
            <div id="image" className="bg-black h-48"></div>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">SPEAKERS1</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #programmer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div
        id="contact"
        className="bg-gray-900 h-80 flex justify-center items-center"
      >
        <h1 className="text-white text-2xl font-bold">Contact</h1>
      </div>
    </main>
  );
}
