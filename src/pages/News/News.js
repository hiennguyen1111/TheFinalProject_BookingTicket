import React from "react";
import { Divider } from "antd";
import { ForwardOutlined } from '@ant-design/icons';

export default function News(props) {
  return (
    <div>
      <section className="px-5 pt-28 pb-10 bg-coolGray-100 text-coolGray-800">
        <Divider style={{fontSize:'30px', color:'#ad8b00'}} orientation="center">
          News and Hot deals
        </Divider>
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">

              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-coolGray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
                  <span style={{color:'#ad8b00'}} className="text-xs font-bold tracking-wider uppercase">
                    Hot deals for you
                  </span>
                </h3>
                <a href="#" className="font-serif hover:underline text-purple-500">
                  Lotte Cinema Khuyến Mãi Ngày Trở Lại: Giá Vé Từ 45K, Hoàn Tới
                  100K
                </a>
                <p className="text-xs text-coolGray-600">
                  47 minutes ago by
                  <a href="#" style={{color:'#08979c'}} className="hover:underline text-violet-600 ml-1">
                    Leroy Jenkins
                  </a>
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-coolGray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
                  <span style={{color:'#ad8b00'}} className="text-xs font-bold tracking-wider uppercase">
                    Hot deals for you
                  </span>
                </h3>
                <a href="#" className="font-serif hover:underline text-purple-500">
                  BHD Star Cineplex Khuyến Mãi: Tặng Popcorn, Hoàn Tiền 20K
                </a>
                <p className="text-xs text-coolGray-600">
                  2 hours ago by
                  <a href="#" style={{color:'#08979c'}} className="hover:underline ml-1">
                    Leroy Jenkins
                  </a>
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-coolGray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
                  <span style={{color:'#ad8b00'}} className="text-xs font-bold tracking-wider uppercase">
                    Hot deals for you
                  </span>
                </h3>
                <a href="#" className="font-serif hover:underline text-purple-500">
                  Tặng combo CGV khi mua vé xem phim dành cho chủ thẻ VIB
                </a>
                <p className="text-xs text-coolGray-600">
                  4 hours ago by{" "}
                  <a href="#" style={{color:'#08979c'}} className="hover:underline text-violet-600 ml-1">
                    Leroy Jenkins
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-violet-600">
                <div className="w-1/2 h-full bg-violet-600" />
              </div>
              <a href="#" className="flex items-center justify-between w-full">
                <span style={{color:'#ad8b00'}} className="text-xs font-bold tracking-wider uppercase hover:text-blue-400">
                  See more hot deals <ForwardOutlined className="text-xl" />
                </span>                
              </a>
            </div>
          </div>
          
          <div
            className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-coolGray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/239x319")',
            }}
          >
            
            <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-coolGray-900 to-coolGray-900">
              <span className="flex items-center mb-4 space-x-2 text-violet-600">
                <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-600">
                  <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-600" />
                </span>
                
              </span>
              <h1
                href="#"
                className="font-serif text-2xl font-semibold group-hover:underline text-coolGray-100"
              >
                Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec
                venenatis?
              </h1>
            </a>
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
              <button
                type="button"
                style={{color:'#ad8b00'}}
                className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-600"
              >
                Latest
              </button>
              <button
                type="button"
                style={{color:'#ad8b00'}}
                className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-coolGray-600"
              >
                Popular
              </button>
            </div>
            <div className="flex flex-col divide-y divide-coolGray-300">
              <div className="flex px-1 py-4">
                <img
                  alt
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500"
                  src="https://source.unsplash.com/random/245x325"
                />
                <div className="flex flex-col flex-grow">
                  <a href="#" style={{color:'#08979c'}} className="font-serif hover:underline">
                    TAROT LIVESTREAM - WHAT ARE YOU WAITING FOR?
                  </a>
                  <p className="mt-auto text-xs text-coolGray-600">
                    5 minutes ago
                    <a
                      href="#"
                      className="block text-purple-500 lg:ml-2 lg:inline hover:underline"
                    >
                      Politics
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500"
                  src="https://source.unsplash.com/random/246x326"
                />
                <div className="flex flex-col flex-grow">
                  <a href="#" style={{color:'#08979c'}} className="font-serif hover:underline">
                    CREATIVE TALENT WITH DO-IT-YOURSELF SERIES
                  </a>
                  <p className="mt-auto text-xs text-coolGray-600">
                    14 minutes ago
                    <a
                      href="#"
                      className="block text-purple-500 lg:ml-2 lg:inline hover:underline"
                    >
                      Sports
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500"
                  src="https://source.unsplash.com/random/247x327"
                />
                <div className="flex flex-col flex-grow">
                  <a href="#" style={{color:'#08979c'}} className="font-serif hover:underline">
                    NEW FLAVOR – STRAWBERRY POPCORN
                  </a>
                  <p className="mt-auto text-xs text-coolGray-600">
                    22 minutes ago
                    <a
                      href="#"
                      className="block text-purple-500 lg:ml-2 lg:inline hover:underline"
                    >
                      World
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500"
                  src="https://source.unsplash.com/random/248x328"
                />
                <div className="flex flex-col flex-grow">
                  <a href="#" style={{color:'#08979c'}} className="font-serif hover:underline">
                    EDUCATION WITH CINEMA
                  </a>
                  <p className="mt-auto text-xs text-coolGray-600">
                    37 minutes ago
                    <a
                      href="#"
                      className="block text-purple-500 lg:ml-2 lg:inline hover:underline"
                    >
                      Business
                    </a>
                  </p>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
