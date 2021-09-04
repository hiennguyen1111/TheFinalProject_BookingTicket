import React from "react";

export default function ShadowResponsiveDemo(props) {
  return (
    <div className="container mt-5">
      <button className="rounded-lg sm:bg-green-400 lg:bg-blue-400 text-4xl text-black text-center p-5 m-5 shadow-2xl">
        Savage Love
      </button>
      <br />
      <button className="sm:bg-purple-200 lg:bg-pink-200 text-4xl text-black text-center p-5 m-5 shadow-inner">
        Did somebody, did sombody break your heart?
      </button>
    </div>
  );
}
