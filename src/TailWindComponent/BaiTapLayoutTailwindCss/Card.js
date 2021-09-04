import React from "react";

export default function Card(props) {
  return (
    <div className="card w-full">
      <div className="content bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg">
        <h3 className="text-purple-600 font-bold text-xs">
          Category
        </h3>
        <p className="text-black text-1xl">
          Cybersoft FrontEnd Developer
        </p>
        <p className="text-black text-1xl font-thin my-2 pl-1 pr-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi
          aspernatur sit voluptate quidem reiciendis omnis quis dolorem ea nisi?
        </p>
      </div>
      <div className="card-footer flex justify-between bg-gray-100 px-2">
        <p className="mt-4">1 USD</p>
        <button className="rounded-lg bg-purple-500 text-white px-2 my-2 py-2 transition hover:text-purple-500 hover:bg-gray-300 duration-200">Register</button>
      </div>
    </div>
  );
}
