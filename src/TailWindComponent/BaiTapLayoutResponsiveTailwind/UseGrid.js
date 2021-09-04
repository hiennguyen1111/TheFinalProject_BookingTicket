import React, { Component } from "react";

export default class UseGrid extends Component {
  render() {
    return (
      <div className="grid lg:grid-cols-5 grid-flow-col gap-2 m-10 h-2/3">
          <div className="lg:row-span-1 col-span-2"></div>
          <div className="lg:row-span-1 col-span-2">
            <p className="text-sm text-gray-500">Entire horse</p>
            <p className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-xl sm:text-xl bold">
              Beach house in collingwood
            </p>
            <p className="text-base mb-6 pt-4">
              ★ 4.94(128) - Collingwood, Ontario
            </p>
            <div className="flex pt-10">
              <a href="#">
                <img
                  src="https://picsum.photos/200/200"
                  className="w-6 h-6 rounded-full"
                />
              </a>
              <p className="bold text-base pl-2">Hosted by Kevin Francis</p>
            </div>
            <p className="bold text-xl pt-3 pl-4">Check availability</p>
          </div>
        

          <div class="lg:row-span-2 col-span-2 rounded-md overflow-hidden">
            <img
              className="w-full h-full"
              src="https://picsum.photos/200/200"
            />
          </div>
        
          <div className="lg:row-span-1 col-span-1 rounded-md overflow-hidden">
            <img className="w-full" src="https://picsum.photos/200/200" />
          </div>
          <div className="lg:row-span-1 rounded-md overflow-hidden">
            <img className="w-full" src="https://picsum.photos/200/200" />
          </div>
        
      </div>
    );
  }
}
