import React, { useState, useEffect } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhimAction, capNhatPhimUploadAction } from "../../../../redux/actions/QuanLyPhimActions";
import { history } from "../../../../App";

const Edit = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize:true, // thuộc tính này áp dụng độc nhất trang edit, không áp dụng vs các state khác
    initialValues: {
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
      maNhom:'GP10',
    },
    onSubmit: (values) => {
      console.log("values", values);
      // Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh"){
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // Cập nhật phim upload hình
      dispatch(capNhatPhimUploadAction(formData));
    }
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
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
      await formik.setFieldValue("hinhAnh", file);
      // Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      }; // Hình base 64
    }
    
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="iphone:text-lg iphonePlus:text-xl md:text-2xl lg:text-3xl">Chỉnh sửa thông tin phim</h3>

        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/png"
          />
          <br />
          <img src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} style={{ width: 100, height: 100 }} alt="..." />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button type="submit" className="text-white bg-blue-400 p-2">
            Lưu thay đổi
          </button>
          <button type="submit" onClick={()=>{
            history.push('/admin/films');
          }} className="p-2 text-white ml-2" style={{backgroundColor:'#141414'}}>
            Quay lại
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
