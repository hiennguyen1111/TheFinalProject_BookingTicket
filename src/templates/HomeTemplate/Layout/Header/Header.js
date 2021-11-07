import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select } from "antd";
import _ from "lodash";
import { Fragment } from "react";
import { USER_LOGIN, TOKEN_CYBERSOFT } from "../../../../util/settings/config";
// Hook da ngon ngu
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-3 rounded font-semibold"
          >
            {t("Sign in")}
          </button>

          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
          >
            {t("Register")}
          </button>

        </Fragment>
      )
    };

    return <Fragment>
      <button
            onClick={() => {
              history.push("/profile");
            }}
            className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
          >
            Hello! {userLogin.taiKhoan}
      </button>
      
      <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN_CYBERSOFT);
              history.push("/home");
              window.location.reload();
            }}
            style={{color:'00474f', fontWeight:'bold', marginRight:'10px'}}>
            Log out
      </button>

    </Fragment>

  };

  return (
    <header className="p-4 bg-gray-800 text-white fixed w-full h-1/10 z-10">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cybersoftlogo"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex mb-0">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent border-violet-600 text-white text-md"
              activeClassname="border-b-2 border-white"
            >
              {t("Home")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white text-md"
              activeClassname="border-b-2 border-white"
            >
              {t("Contact")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white text-md"
              activeClassname="border-b-2 border-white"
            >
              {t("News")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/application"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white text-md"
              activeClassname="border-b-2 border-white"
            >
              {t("Application")}
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}

          <Select
            defaultValue="en"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="en">Eng</Option>
            <Option value="chi">Chi</Option>
            <Option value="vi">Vi</Option>
          </Select>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
