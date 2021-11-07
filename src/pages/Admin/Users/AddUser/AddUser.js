import React, { useState } from "react";
import { useFormik, Form, ErrorMessage, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungActions";
import { GROUPID } from "../../../../util/settings/config";
import { history } from "../../../../App";
import { addUserSchema } from "../../../../Validation/UserValidation";


const AddUser = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;

      // Gọi API gửi các giá trị formdata về backend xử lý
      dispatch(themNguoiDungAction(values));
    },
  });

  const handleChangeMLND = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSubmit = (values) => {
    dispatch(themNguoiDungAction(values));
  };
  return (
    <>
      <Formik
          initialValues = {{
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GROUPID,
            maLoaiNguoiDung: "",
          }}
        validationSchema={addUserSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="w-full">
            <div className="flex flex-col justify-center w-full iphone:pt-8 md:pt-12 lg:pt-16">
              <h3 className="flex flex-row w-full justify-center iphone:text-xl md:text-2xl pb-2">
                Thêm người dùng
              </h3>
              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Họ tên</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Field
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.hoTen}
                    name="hoTen"
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
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
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.taiKhoan}
                    name="taiKhoan"
                  />
                  <ErrorMessage name="taiKhoan">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
                    }}
                  </ErrorMessage>
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
                    onChange={formikProps.handleChange}
                    value={formikProps.values.matKhau}
                    name="matKhau"
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
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
                    onChange={formikProps.handleChange}
                    value={formikProps.values.email}
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
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
                    onChange={formikProps.handleChange}
                    value={formikProps.values.soDt}
                    name="soDt"
                  />
                  <ErrorMessage name="soDt">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
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
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.maLoaiNguoiDung}
                    name="maLoaiNguoiDung"
                  />
                  <ErrorMessage name="maLoaiNguoiDung">
                    {(msg) => {
                      return (
                        <p className="text-red-600 text-xs text-left">{msg}</p>
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex flex-row w-full justify-center mt-2">
                <button
                  type="submit"
                  className="text-white p-2 rounded"
                  style={{ backgroundColor: "#1890ff" }}
                >
                  Thêm người dùng
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
          </Form>
        )}
      />
    </>

    // <>
    //   <Form
    //     onSubmitCapture={formik.handleSubmit}
    //     labelCol={{
    //       span: 4,
    //     }}
    //     wrapperCol={{
    //       span: 14,
    //     }}
    //     layout="horizontal"
    //     initialValues={{
    //       size: componentSize,
    //     }}
    //     onValuesChange={onFormLayoutChange}
    //     size={componentSize}
    //   >
    //     <h3 className="text-2xl pb-5">Thêm người dùng mới</h3>

    //     <Form.Item label="Form Size" name="size">
    //       <Radio.Group>
    //         <Radio.Button value="small">Small</Radio.Button>
    //         <Radio.Button value="default">Default</Radio.Button>
    //         <Radio.Button value="large">Large</Radio.Button>
    //       </Radio.Group>
    //     </Form.Item>

    //     <Form.Item label="Họ tên">
    //       <Input name="hoTen" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Tài khoản">
    //       <Input name="taiKhoan" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Mật khẩu">
    //       <Input name="matKhau" type="password" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Email">
    //       <Input name="email" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Số điện thoại">
    //       <Input name="soDt" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Mã loại người dùng">
    //       <Select
    //         options={[
    //           { label: "Quản trị", value: "QuanTri" },
    //           { label: "Khách hàng", value: "KhachHang" },
    //         ]}
    //         name="maLoaiNguoiDung"
    //         value={formik.values.maLoaiNguoiDung}
    //         onChange={handleChangeMLND}
    //       />
    //     </Form.Item>
    //     <Form.Item label="Tác vụ">
    //       <button type="submit" className="p-2 text-white" style={{backgroundColor:'#1890ff'}}>
    //         Thêm người dùng
    //       </button>
    //       <button type="submit" onClick={()=>{
    //         history.push('/admin');
    //       }} className="p-2 text-white ml-2" style={{backgroundColor:'#141414', cursor:'pointer'}}>
    //         Quay lại
    //       </button>
    //     </Form.Item>
    //   </Form>
    // </>
  );
};

export default AddUser;
