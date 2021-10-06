import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Checkout.module.css";
import {
  datGheAction,
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeActions";
import { Fragment } from "react";
import {
  CloseOutlined,
  UserOutlined,
  CheckOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./Checkout.css";
import {
  CHANGE_TAB_ACTIVE, DAT_GHE
} from "../../redux/actions/types/QuanLyDatVeType";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungActions";
import moment from "moment";
import { connection } from '../../index';





function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } =
    useSelector((state) => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // Goi ham tao ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    // dispatch function nay di
    dispatch(action);

    // Co 1 client nao thuc hien dat ve thanh cong thi minh se load lai danh sach phong ve cua lich chieu do
    connection.on('datVeThanhCong',()=>{
      dispatch(action);
    })

    // Vua vao page thi load tat ca ghe cua nguoi khac dang dat
    connection.invoke('loadDanhSachGhe',props.match.params.id);

    // Load danh sach ghe dang dat tu server ve (lang nghe tin hieu tuu server tra ve)
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat)=>{
      // console.log('danhSachGheKhachDat',dsGheKhachDat);

      // B1: Loai minh ra khoi danh sach
      dsGheKhachDat = dsGheKhachDat.filter(item=>item.taiKhoan !== userLogin.taiKhoan);

      // B2: Gop danh sach ghe khach dat o tat ca user thanh 1 mang chung
      let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=>{
        let arrGhe = JSON.parse(item.danhSachGhe);

        return [...result,...arrGhe];
      },[]);

      // Dua du lieu ghe khach dat cap nhat redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat,'maGhe');

      // 
      dispatch({
        type: DAT_GHE,
        arrGheKhachDat
      })

    })

    // Cai dat su kien khi reload trang
    window.addEventListener('beforeunload',clearGhe);

    return () => {
      clearGhe();
      window.removeEventListener("Beforeunload", clearGhe);
    }

  }, []);

  const clearGhe = function(event){

    connection.invoke('huyDat',userLogin.taiKhoan,props.match.params.id);
  }

  // console.log({ chiTietPhongVe });

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  console.log("danhSachGheKhachDat", danhSachGheKhachDat);

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      // KT tung ghe render xem co trong mang ghe dang dat hay khong
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      // KT tung render xem co phai ghe khach dat hay khong
      let classGheKhachDat = "";

      let indexGheKD = danhSachGheKhachDat.findIndex(
        (gheKD) => gheKD.maGhe === ghe.maGhe
      );

      if (indexGheKD !== -1) {
        classGheKhachDat = "gheKhachDat";
      }

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDD !== -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              const action = datGheAction(ghe,props.match.params.id);
              dispatch(action);

            }}
            disabled={ghe.daDat || classGheKhachDat !== ""}
            className={`ghe 
            ${classGheVip} 
            ${classGheDaDat} 
            ${classGheDangDat} 
            ${classGheDaDuocDat} 
            ${classGheKhachDat} 
            text-center`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== "" ? (
                <UserOutlined style={{ fontWeight: "bold" }} />
              ) : (
                <CloseOutlined style={{ fontWeight: "bold" }} />
              )
            ) : classGheKhachDat !== "" ? (
              <SmileOutlined style={{ fontWeight: "bold" }} />
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table className="divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                <tr>
                  <td>
                    <button className="ghe text-center">
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center">
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip">
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDat">
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat">
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheKhachDat">
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-pink-600 text-center text-4xl">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-lg mr-2 bold">Ghế</span>
              {_.sortBy(danhSachGheDangDat, ["maGhe"]).map((gheDD, index) => {
                return (
                  <span key={index} className="text-xl text-pink-600 mr-2">
                    {gheDD.stt}
                    {(index + 1) % 5 === 0 ? <br /> : ""}
                  </span>
                );
              })}
            </div>

            <div className="text-right col-span-1">
              <span className="text-pink-800 text-lg">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <hr />

          <div className="my-5">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div
            className="mb-0 h-full flex flex-col items-center"
            style={{ marginBottom: 0 }}
          >
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(thongTinDatVe));
              }}
              className="bg-pink-600 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <Tabs
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            number: key.toString(),
          });
        }}
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();

  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://picsum.photos/200/200"
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                Giờ chiếu: {moment(ticket.ngayDat).format("hh:mm A")} - Ngày
                chiếu: {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p>Địa điểm: {seats.tenHeThongRap}</p>
              <p>
                Tên rạp: {seats.tenCumRap} - Ghế{" "}
                {_.sortBy(ticket.danhSachGhe,['maGhe']).map((ghe, index) => {
                  return (
                    <span key={index} className="text-red-300 font-bold">
                      [{ghe.tenGhe}]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Vui lòng kiểm tra lại thông tin địa điểm và thời gian chiếu phim!
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
