import React, { useState, useEffect, Fragment } from "react";
import { Form, DatePicker, Button, InputNumber, Select } from "antd";
import { EditFilled } from "@ant-design/icons";
import {
  layThongTinHeThongRap,
  layThongTinCumRap,
} from "../../../services/QuanLyRapService";
import { taoLichChieu } from "../../../services/QuanLyDatVeService";
import { useFormik } from "formik";
import moment from "moment";
import { history } from "../../../App";

export default function ShowTime(props) {
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "", // DD/MM/YYYY hh:mm:ss
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const result = await taoLichChieu(values);
        alert(result.data.content);
      } catch (errors) {
        console.log("errors", errors.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(async () => {
    try {
      let result = await layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  }, []);

  const handleChangeHeThongRap = async (value) => {
    // Từ HTR call API lấy thông tin rạp
    try {
      let result = await layThongTinCumRap(value);
      // Gán giá trị cụm rạp vào state.cumRap
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
    console.log("value", value);
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("values", values);
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("values", values);
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  const convertSelectHTR = () => {
    // state.heThongRapChieu?.map((htr, index) => {
    //     return { label: htr.tenHeThongRap, value: htr.tenHeThongRap };
    //   })
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  const { Option } = Select;

  const filter = (inputValue, path) => {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }

  return (
    <Fragment>
      <h3 className="text-2xl">
        Tạo lịch chiếu - {props.match.params.tenPhim}
      </h3>

      <div className="flex iphone:flex-col lg:flex-row w-full">
        <div className="mr-10 iphone:w-full iphonePlus:w-full md:w-3/4 lg:w-2/5">
          <img src={film.hinhAnh} alt="..." />
        </div>

        <div className="iphone:w-full iphonePlus:w-full md:w-full md:pt-8 lg:w-2/3">
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            initialValues={{ remember: true }}
            onSubmitCapture={formik.handleSubmit}
          >
            <Form.Item label="Hệ thống rạp">
              <Select
                options={convertSelectHTR()}
                onChange={handleChangeHeThongRap}
                placeholder="Chọn hệ thống rạp"
                showSearch={{ filter, matchInputWidth: false }}
              />
            </Form.Item>

            <Form.Item label="Cụm rạp">
              <Select
                options={state.cumRapChieu?.map((cumRap, index) => ({
                  label: cumRap.tenCumRap,
                  value: cumRap.maCumRap,
                }))}
                onChange={handleChangeCumRap}
                placeholder="Chọn cụm rạp"
              />
            </Form.Item>

            <Form.Item label="Ngày giờ chiếu">
              <DatePicker
                format="DD/MM/YYYY hh:mm:ss"
                showTime
                onChange={onChangeDate}
                onOk={onOk}
              />
            </Form.Item>

            <Form.Item label="Giá vé">
              <InputNumber onChange={onChangeInputNumber} min={20000} />
            </Form.Item>

            <Form.Item label="Tác vụ">
              <Button
                htmlType="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1890ff",
                  color: "white",
                  padding: "1rem",
                  transition: "ease-in-out",
                  borderRadius: "round",
                }}
                shape="round"
                icon={<EditFilled />}
                onClick={()=>{
                  history.push('/admin/films');
                }}
              >
                Tạo lịch chiếu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
}
