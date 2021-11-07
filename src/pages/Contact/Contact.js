import React from "react";

export default function Contact(props) {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 pt-36 pb-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="iphone:text-2xl iphonePlus:text-2xl md:text-3xl lg:text-5xl text-purple-800 font-bold leading-tight">
            Let's contact with us!
          </h2>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt
          className="p-6 h-52 md:h-64"
        />
      </div>
      <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid">
        
        <div>
          <label htmlFor="name" className="text-md text-purple-600">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder
            className="w-full p-3 rounded"
            style={{border:'1px solid #391085'}}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-md text-purple-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded"
            style={{border:'1px solid #391085'}}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-md text-purple-600">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full p-3 rounded"
            style={{border:'1px solid #391085'}}
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-purple-800 text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
