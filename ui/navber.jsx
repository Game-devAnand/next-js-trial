import React from "react";

export default function Navber() {
  return (
    <div className="bg-gray-800 p-4 flex flex-row justify-between sticky top-0">
      <h1 className="text-white font-bold text-2xl">Events</h1>
      <div className="flex space-x-4">
        <button
          className="text-white font-normal"
          type="button"
          //onClick={() => router.push("/about")}
        >
          Home
        </button>
        <button
          className="text-white font-normal"
          type="button"
          //onClick={() => router.push("/about")}
        >
          About
        </button>
        <button
          className="text-white font-normal"
          type="button"
          //onClick={() => router.push("/about")}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
