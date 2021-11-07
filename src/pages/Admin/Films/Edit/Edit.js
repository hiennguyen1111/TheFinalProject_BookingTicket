import React, { useEffect, useState } from "react";
import { withFormik, ErrorMessage, Field } from "formik";
import { connect, useDispatch } from "react-redux";
import { history } from "../../../../App";
import { editFilmSchema } from "../../../../Validation/AddNewFilmValidation";
import { DatePicker, InputNumber, Switch } from "antd";
import { layThongTinPhimAction, capNhatPhimUploadAction } from "../../../../redux/actions/QuanLyPhimActions";
import moment from "moment";


function Edit(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, []);

  const [imgSrc, setImgSrc] = useState("");

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = props;

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    // Lấy file ra từ event
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // Đem dữ liệu file lưu vào formik
      await setFieldValue("hinhAnh", file);
      // Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      }; // Hình base 64
    }
    
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }


  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center w-full iphone:pt-8 md:pt-12 lg:pt-16">
        <h3 className="flex flex-row w-full justify-center iphone:text-xl md:text-2xl pb-2">
          Chỉnh sửa thông tin phim
        </h3>
        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Tên phim</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Field
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              value={values.tenPhim}
              name="tenPhim"
            />
            <ErrorMessage name="tenPhim">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
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
              onChange={handleChange}
              value={values.trailer}
              name="trailer"
            />
            <ErrorMessage name="trailer">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
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
              onChange={handleChange}
              value={values.moTa}
              name="moTa"
            />
            <ErrorMessage name="moTa">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
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
              value = {moment(values.ngayKhoiChieu)}
              disabledDate={disabledDate}
              className="iphone:w-full md:w-3/4 lg:w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
            />
            <ErrorMessage name="ngayKhoiChieu">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
              }}
            </ErrorMessage>
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Đang chiếu</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Switch
              className="w-4"
              defaultChecked = {values.dangChieu}
              onChange={handleChangeSwitch("dangChieu")}
            />
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Sắp chiếu</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Switch 
            className="w-4"
            defaultChecked = {values.sapChieu}
            onChange={handleChangeSwitch("sapChieu")} />
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Hot</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <Switch 
            className="w-4"
            defaultChecked = {values.hot}
            onChange={handleChangeSwitch("hot")} />
          </div>
        </div>

        <div className="flex iphone:flex-col md:flex-row w-full gap-2 mb-3">
          <div className="flex iphone:w-full iphone:justify-start md:justify-end md:w-1/3 md:mr-4">
            <label>Đánh giá</label>
          </div>
          <div className="flex flex-col iphone:w-full md:w-2/3 md:ml-4">
            <InputNumber
              value={values.danhGia}
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
            <img src={imgSrc === '' ? values.hinhAnh : imgSrc} style={{ width: 100, height: 100 }} alt="..." />
            <ErrorMessage name="hinhAnh">
              {(msg) => {
                return <p className="text-red-600 text-xs text-left">{msg}</p>;
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
            Cập nhật
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
    </form>
  );
}

const FilmForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { thongTinPhim } = props;
    console.log("thongTinPhim", thongTinPhim);
    return {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.danhGia,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null,
      maNhom: "GP10",
    };
  },
  validationSchema: editFilmSchema,

  handleSubmit: (values, { props, setSubmitting }) => {
    const { dispatch } = props;
    console.log("valueshinhAnh", values);
    // Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
    let formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key]);
      } else {
        if (values.hinhAnh !== null) {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
    }
    // Cập nhật phim upload hình
    dispatch(capNhatPhimUploadAction(formData));
  },

  // displayName: "BasicForm",
})(Edit);

const mapStateToProps = (state) => ({
  thongTinPhim: state.QuanLyPhimReducer.thongTinPhim,
});
export default connect(mapStateToProps)(FilmForm);
