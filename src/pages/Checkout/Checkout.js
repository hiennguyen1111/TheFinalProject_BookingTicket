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
  HomeOutlined,
} from "@ant-design/icons";
import "./Checkout.css";
import { CHANGE_TAB_ACTIVE, DAT_GHE } from "../../redux/types/QuanLyDatVeType";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungActions";
import moment from "moment";
import { connection } from "../../index";
import { history } from "../../App";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/settings/config";
import { NavLink } from "react-router-dom";

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
    connection.on("datVeThanhCong", () => {
      dispatch(action);
    });

    // Vua vao page thi load tat ca ghe cua nguoi khac dang dat
    connection.invoke("loadDanhSachGhe", props.match.params.id);

    // Load danh sach ghe dang dat tu server ve (lang nghe tin hieu tuu server tra ve)
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      // console.log('danhSachGheKhachDat',dsGheKhachDat);

      // B1: Loai minh ra khoi danh sach
      dsGheKhachDat = dsGheKhachDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );

      // B2: Gop danh sach ghe khach dat o tat ca user thanh 1 mang chung
      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);

        return [...result, ...arrGhe];
      }, []);

      // Dua du lieu ghe khach dat cap nhat redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");

      //
      dispatch({
        type: DAT_GHE,
        arrGheKhachDat,
      });
    });

    // Cai dat su kien khi reload trang
    window.addEventListener("beforeunload", clearGhe);

    return () => {
      clearGhe();
      window.removeEventListener("Beforeunload", clearGhe);
    };
  }, []);

  const clearGhe = function (event) {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

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
              const action = datGheAction(ghe, props.match.params.id);
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
          {window.innerWidth > 1280 ? (
            (index + 1) % 16 === 0 ? (
              <br />
            ) : (
              ""
            )
          ) : window.innerWidth > 768 ? (
            (index + 1) % 14 === 0 ? (
              <br />
            ) : (
              ""
            )
          ) : window.innerWidth > 414 ? (
            (index + 1) % 8 === 0 ? (
              <br />
            ) : (
              ""
            )
          ) : (index + 1) % 5 === 0 ? (
            <br />
          ) : (
            ""
          )}

          {/* {(index + 1) % 16 === 0 ? <br /> : ""} */}
        </Fragment>
      );
    });
  };

  const seatsList = [
    {
      tenGhe: "Ghế chưa đặt",
      classNameButton: "ghe gheChuaDat",
    },
    {
      tenGhe: "Ghế đang đặt",
      classNameButton: "ghe gheDangDat",
    },
    {
      tenGhe: "Ghế vip",
      classNameButton: "ghe gheVip",
    },
    {
      tenGhe: "Ghế đã đặt",
      classNameButton: "ghe gheDaDat",
    },
    {
      tenGhe: "Ghế mình đặt",
      classNameButton: "ghe gheDaDuocDat",
    },
    {
      tenGhe: "Ghế khách đặt",
      classNameButton: "ghe gheKhachDat",
    },
  ];

  return (
    <div className="min-h-screen mt-5">
      <div className="flex iphone:flex-col md:flex-row">
        <div className="iphone:w-full md:w-3/4">
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

          <div className="mt-5 flex flex-row flex-wrap gap-2 justify-center">
            {_.map(seatsList, (item, index) => {
              return (
                <div className="flex flex-col justify-center text-center">
                  <div className="font-bold px-1 text-center">{item.tenGhe}</div>
                  <div>
                    <button className={item.classNameButton}>
                      {" "}
                      <CheckOutlined style={{ fontWeight: "bold" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="iphone:w-full md:w-1/4">
          <h3
            className="text-center text-4xl"
            style={{ backgroundColor: "#87e8de" }}
          >
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
              style={{ backgroundColor: "#87e8de" }}
              className="w-full text-center py-3 font-bold text-2xl cursor-pointer"
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

export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    return () => {
      dispatch({
        type: CHANGE_TAB_ACTIVE,
        number: "1",
      });
    };
  }, []);

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <div>
          <button
            onClick={() => {
              history.push("/profile");
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#87e8de",
              }}
              className="rounded-full text-2xl font-bold"
            >
              {userLogin.taiKhoan.substr(0, 1)}
            </div>
          </button>{" "}
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN_CYBERSOFT);
              history.push("/home");
              window.location.reload();
            }}
            className="font-bold"
          >
            Đăng xuất
          </button>{" "}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <div className="p-5">
      <Tabs
        tabBarExtraContent={operations}
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
        <TabPane
          tab={
            <NavLink to="/home">
              <HomeOutlined
                style={{ color: "#000" }}
                className="text-2xl text-black mb-2"
              />
            </NavLink>
          }
          key="3"
        ></TabPane>
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
        <div
          className="flex iphone:m-1 md:mx-auto md:my-1 lg:m-2 box-border md:w-1/2 lg:w-1/3"
          style={{ backgroundColor: "#e6fffb", border: "4px solid #13c2c2" }}
          key={index}
        >
          <div className="h-full flex items-center m-2 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
              src="https://picsum.photos/200/200"
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-bold">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                Giờ chiếu: {moment(ticket.ngayDat).format("hh:mm A")} - Ngày
                chiếu: {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p>Địa điểm: {seats.tenHeThongRap}</p>
              <p>
                Tên rạp: {seats.tenCumRap} - Ghế{" "}
                {_.sortBy(ticket.danhSachGhe, ["maGhe"]).map((ghe, index) => {
                  return (
                    <span key={index} className="font-bold" style={{color:'#08979c'}}>
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
    <div className="p-4">
      <section className="text-gray-600 body-font">
        <div className="px-2 iphone:py-6 iphonePlus:py-8 md:py-10 lg:py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1
              className="iphone:text-2xl iphonePlus:text-2xl md:text-4xl lg:text-4xl font-medium title-font"
              style={{ color: "#08979c" }}
            >
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto mb-2 text-base">
              Vui lòng kiểm tra lại thông tin địa điểm và thời gian chiếu phim!
            </p>
          </div>
          <div className="flex iphone:flex-col md:flex-row md:flex-wrap lg:flex-nowrap">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
