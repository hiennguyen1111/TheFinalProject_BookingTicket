import { DribbbleOutlined, GithubOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);

  return (
    <div className="container max-w-md pt-32 bg-coolGray-50 text-coolGray-800 mx-auto">
      <Fragment>
      {/* key={index} */}
      <img
        src={`https://i.pravatar.cc?u=${userLogin.hoTen}`}
        alt={`https://i.pravatar.cc?u=${userLogin.hoTen}`}
        className="object-cover w-full h-64 pb-6 rounded-sm sm:h-96 bg-coolGray-500"
      />
      </Fragment>
      <div>
        <h2 className="text-xl text-pink-500 font-semibold">{userLogin.hoTen}</h2>
        <p>
          Số điện thoại : {userLogin.soDT}
        </p>
        <p>
          Email : {userLogin.email}
        </p>
      </div>

      <div className="flex justify-center pt-4 space-x-4 align-center">
        <button><GithubOutlined className="text-xl p-2 rounded-md bg-pink-500 hover:text-white" /></button>
        <button><DribbbleOutlined className="text-xl p-2 rounded-md bg-pink-500 hover:text-white" /></button>
        <button><TwitterOutlined className="text-xl p-2 rounded-md bg-pink-500 hover:text-white" /></button>
        <button><MailOutlined className="text-xl p-2 rounded-md bg-pink-500 hover:text-white" /></button> 
      </div>
    </div>
  );
}
