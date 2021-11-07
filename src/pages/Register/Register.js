import React from "react";
import { Formik, useFormik, Form, ErrorMessage, Field } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSchema } from "../../Validation/RegisterValidation";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungActions";
import * as yup from "yup";

export default function Register(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("userLogin", userLogin);

  const handleSubmit = (values) => {
    const action = dangKyAction(values);
    dispatch(action);
  };

  return (
    <>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          xacNhanMatKhau: "",
          email: "",
          soDt: "",
          hoTen: "",
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2
                style={{ backgroundColor: "##feffe6", color: "#876800" }}
                className="text-5xl font-display font-semibold lg:text-center"
              >
                Đăng ký
              </h2>
              <div className="mt-10">
                <div>
                  <div className="mt-2">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Họ tên
                    </div>
                    <Field
                      name="hoTen"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Nhập họ và tên"
                    />
                    <ErrorMessage name="hoTen">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-2">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Tài khoản
                    </div>
                    <Field
                      name="taiKhoan"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Nhập vào tài khoản"
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Mật khẩu
                      </div>
                    </div>
                    <Field
                      name="matKhau"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      type="password"
                      placeholder="Nhập vào mật khẩu"
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Xác nhận mật khẩu
                      </div>
                    </div>
                    <Field
                      name="xacNhanMatKhau"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                    />
                    <ErrorMessage name="xacNhanMatKhau">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-2">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Email
                    </div>
                    <Field
                      name="email"
                      type="email"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Nhập email"
                    />
                    <ErrorMessage name="email">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Số điện thoại
                      </div>
                    </div>
                    <Field
                      name="soDt"
                      onChange={formikProps.handleChange}
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Nhập số điện thoại"
                    />
                    <ErrorMessage name="soDt">
                      {(msg) => {
                        return (
                          <p className="text-red-600 text-xs text-left">
                            {msg}
                          </p>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <div className="mt-10">
                    <button
                      style={{ backgroundColor: "#feffe6", color: "#876800" }}
                      type="submit"
                      className="text-black text-lg p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-300
                          shadow-lg"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
                <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                  Bạn đã có tài khoản?{" "}
                  <NavLink
                    to="/login"
                    className="cursor-pointer"
                    style={{ color: "#d4b106" }}
                  >
                    Đăng nhập
                  </NavLink>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </>
  );
}
