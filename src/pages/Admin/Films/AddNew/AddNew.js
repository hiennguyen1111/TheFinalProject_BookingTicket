import React, { useState } from "react";
import { useFormik, Form, ErrorMessage, Formik, Field } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimActions";
import { GROUPID } from "../../../../util/settings/config";
import { history } from "../../../../App";
import { DatePicker, InputNumber, Switch } from 'antd';
import { addNewFilmSchema } from "../../../../Validation/AddNewFilmValidation";


const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;
      // Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      // Gọi API gửi các giá trị formdata về backend xử lý
      dispatch(themPhimUploadHinhAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    // Lấy file ra từ event
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      }; // Hình base 64
    }
    // Đem dữ liệu file lưu vào formik
    formik.setFieldValue("hinhAnh", file);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }


  return (
    <>
      <Formik
        initialValues={{
          tenPhim: "",
          trailer: "",
          moTa: "",
          ngayKhoiChieu: "",
          dangChieu: false,
          sapChieu: false,
          hot: false,
          danhGia: 1,
          hinhAnh: {},
        }}
        validationSchema={addNewFilmSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="w-full">
            <div className="flex flex-col justify-center w-full iphone:pt-8 md:pt-12 lg:pt-16">
              <h3 className="flex flex-row w-full justify-center iphone:text-xl md:text-2xl pb-2">
                Thêm phim mới
              </h3>
              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Tên phim</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Field
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.tenPhim}
                    name="tenPhim"
                  />
                  <ErrorMessage name="tenPhim">
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
                  <label>Trailer</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Field
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.trailer}
                    name="trailer"
                  />
                  <ErrorMessage name="trailer">
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
                  <label>Mô tả</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Field
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.moTa}
                    name="moTa"
                  />
                  <ErrorMessage name="moTa">
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
                  <label>Ngày khởi chiếu</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <DatePicker
                    disabledDate = {disabledDate}
                    className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    format={"DD/MM/YYYY"}
                    onChange={handleChangeDatePicker}
                  />
                  <ErrorMessage name="ngayKhoiChieu">
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
                  <label>Đang chiếu</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Switch className="w-4" onChange={handleChangeSwitch("dangChieu")} />
                </div>
              </div>

              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Sắp chiếu</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Switch className="w-4" onChange={handleChangeSwitch("sapChieu")} />
                </div>
              </div>

              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Hot</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <Switch className="w-4" onChange={handleChangeSwitch("hot")} />
                </div>
              </div>

              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Đánh giá</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <InputNumber
                    onChange={handleChangeInputNumber("danhGia")}
                    min={1}
                    max={10}
                  />
                </div>
              </div>

              <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
                <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
                  <label>Hình ảnh</label>
                </div>
                <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
                  <input
                    type="file"
                    onChange={handleChangeFile}
                    accept="image/png, image/jpeg, image/gif, image/png"
                  />
                  <br />
                  <img
                    src={imgSrc}
                    style={{ width: 100, height: 100 }}
                    alt="..."
                  />
                  <ErrorMessage name="hinhAnh">
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
                  Thêm phim mới
                </button>

                <button
                  type="submit"
                  onClick={() => {
                    history.push("/admin/films");
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
    //     <h3 className="text-2xl pb-5">Thêm phim mới</h3>

    //     <Form.Item label="Form Size" name="size">
    //       <Radio.Group>
    //         <Radio.Button value="small">Small</Radio.Button>
    //         <Radio.Button value="default">Default</Radio.Button>
    //         <Radio.Button value="large">Large</Radio.Button>
    //       </Radio.Group>
    //     </Form.Item>

    //     <Form.Item label="Tên phim">
    //       <Input name="tenPhim" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Trailer">
    //       <Input name="trailer" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Mô tả">
    //       <Input name="moTa" onChange={formik.handleChange} />
    //     </Form.Item>
    //     <Form.Item label="Ngày khởi chiếu">
    //       <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
    //     </Form.Item>
    //     <Form.Item label="Đang chiếu">
    //       <Switch onChange={handleChangeSwitch("dangChieu")} />
    //     </Form.Item>
    //     <Form.Item label="Sắp chiếu">
    //       <Switch onChange={handleChangeSwitch("sapChieu")} />
    //     </Form.Item>
    //     <Form.Item label="Hot">
    //       <Switch onChange={handleChangeSwitch("hot")} />
    //     </Form.Item>
    //     <Form.Item label="Đánh giá">
    //       <InputNumber
    //         onChange={handleChangeInputNumber("danhGia")}
    //         min={1}
    //         max={10}
    //       />
    //     </Form.Item>
    //     <Form.Item label="Hình ảnh">
    //       <input
    //         type="file"
    //         onChange={handleChangeFile}
    //         accept="image/png, image/jpeg, image/gif, image/png"
    //       />
    //       <br />
    //       <img src={imgSrc} style={{ width: 100, height: 100 }} alt="..." />
    //     </Form.Item>
    //     <Form.Item label="Tác vụ">
    //       <button type="submit" className="p-2 text-white" style={{backgroundColor:'#1890ff'}}>
    //         Thêm phim
    //       </button>
    //       <button type="submit" onClick={()=>{
    //         history.push('/admin/films');
    //       }} className="p-2 text-white ml-2" style={{backgroundColor:'#141414', cursor:'pointer'}}>
    //         Quay lại
    //       </button>
    //     </Form.Item>
    //   </Form>
    // </>
  );
};

export default AddNew;
