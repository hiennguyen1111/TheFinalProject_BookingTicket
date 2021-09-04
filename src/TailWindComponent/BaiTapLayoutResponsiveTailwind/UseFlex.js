import React, { Component } from "react";
import './UseFlex.css';


export default class BaiTapLayoutResponsiveTailwind extends Component {
  render() {
    return (
      <div className="flex flex-row flex-wrap m-10 box-border relative">
        <div className="w-2/5 allText">
          <div className="lg:absolute md:absolute bottom-0 left-0">
            <p className="text-sm text-gray-500 text1">Entire horse</p>
            <p className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-xl sm:text-xl bold text2">
              Beach house in collingwood
            </p>
            <p className="text-base mb-6 pt-4 text3">
              ★ 4.94(128) - Collingwood, Ontario
            </p>
            <div className="flex pt-10 text4">
              <a href="#">
                <img
                  src="https://picsum.photos/200/200"
                  className="w-6 h-6 rounded-full"
                />
              </a>
              <p className="bold text-base pl-2">Hosted by Kevin Francis</p>
            </div>
            <p className="bold text-xl pt-3 pl-4 text5">Check availability</p>
          </div>
        </div>

        <div class="w-2/5 overflow-hidden pl-2 pr-2 imgBig">
          <img
            className="w-full h-full rounded-md"
            src="https://picsum.photos/200/200"
          />
        </div>

        <div className="w-1/5 overflow-hidden imgSmall">
          <div className="pb-2">
            <img
              className="w-full rounded-md"
              src="https://picsum.photos/200/200"
            />
          </div>
          <div>
            <img
              className="w-full rounded-md"
              src="https://picsum.photos/200/200"
            />
          </div>
        </div>
      </div>
    );
  }
}
