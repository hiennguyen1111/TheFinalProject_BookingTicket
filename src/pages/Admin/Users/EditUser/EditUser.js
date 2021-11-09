import React, { useEffect } from "react";
import { withFormik, ErrorMessage, Field } from "formik";
import { connect, useDispatch } from "react-redux";
import { history } from "../../../../App";
import { userSchema } from "../../../../Validation/UserValidation";
import { layThongTinNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungActions";
import { capNhatThongTinNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungActions";

function EditUser(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = props;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center w-full iphone:pt-8 md:pt-12 lg:pt-16">
      <h3 className="flex flex-row w-full justify-center iphone:text-xl md:text-2xl pb-2">Chỉnh sửa thông tin người dùng</h3>
        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Họ tên</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Field
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              value={values.hoTen}
              name="hoTen"
            />
            <ErrorMessage name="hoTen">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
              }}
            </ErrorMessage>
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Tài khoản</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
          <Field
            disabled
            className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={handleChange}
            value={values.taiKhoan}
            name="taiKhoan" />
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Mật khẩu</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Field
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              onChange={handleChange}
              value={values.matKhau}
              name="matKhau"
            />
            <ErrorMessage name="matKhau">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
              }}
            </ErrorMessage>
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Email</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Field
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
              }}
            </ErrorMessage>
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Số điện thoại</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Field
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              value={values.soDt}
              name="soDt"
            />
            <ErrorMessage name="soDt">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
              }}
            </ErrorMessage>
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Mã loại người dùng</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
          <Field
            disabled
            className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={handleChange}
            value={values.maLoaiNguoiDung}
            name="maLoaiNguoiDung" />
          </div>
        </div>

        <div className="flex flex-row w-full justify-center mt-2">
          <button
            type="submit"
            className="text-white p-2 rounded"
            style={{ backgroundColor: "#1890ff" }}
          >
            Lưu thay đổi
          </button>
          <button
            type="submit"
            onClick={() => {
              history.push("/admin");
            }}
            className="p-2 text-white ml-2 rounded"
            style={{ backgroundColor: "#141414", cursor: "pointer" }}
          >
            Quay lại
          </button>
        </div>
      </div>
    </form>
  );
}

const UserForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { thongTinNguoiDung } = props;
    console.log("thongTinNguoiDung123", thongTinNguoiDung);
    return {
      hoTen: thongTinNguoiDung.hoTen,
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      email: thongTinNguoiDung.email,
      soDt: thongTinNguoiDung.soDT,
      maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
      maNhom: "GP10",
    };
  },
  validationSchema: userSchema,

  handleSubmit: (values, { props, setSubmitting }) => {
    const { dispatch } = props;
    console.log("handleSubmit", values);
    // Cập nhật thông tin người dùng
    dispatch(capNhatThongTinNguoiDungAction(values));
  },

  displayName: "BasicForm",
})(EditUser);

const mapStateToProps = (state) => ({
  thongTinNguoiDung: state.QuanLyNguoiDungReducer.thongTinNguoiDung,
});
export default connect(mapStateToProps)(UserForm);
