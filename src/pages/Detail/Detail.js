import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log("filmDetail", filmDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    // Get param's information from url

    const { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "250px", height: "250px" }}
                alt="123"
              />
              <div className="col-span-2 ml-5">
                <p className="text-sm">
                  Ngày khởi chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-2xl leading-3">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <h1
              style={{
                marginLeft: "15%",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Đánh giá
            </h1>
            <h1 style={{ marginLeft: "5%" }} className="text-blue-400 text-2xl">
              <Rate
                allowHaft
                value={filmDetail.danhGia / 2}
                style={{ color: "rgb(81, 152, 233)", fontSize: 30 }}
              />
            </h1>

            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <span className="text-white">{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="mt-10 ml-72 w-2/3 bg-white p-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              src={htr.logo}
                              className="rounded-full w-full"
                              style={{ width: 50 }}
                              alt="htr.logo"
                            />
                            <div className="text-center ml-2">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="mt-5" key={index}>
                              <div className="flex flex-row">
                                <img
                                  stle={{ width: 60, height: 60 }}
                                  src="https://picsum.photos/60/60"
                                />
                                <div className="ml-2">
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p
                                    className="text-gray-400"
                                    style={{ marginTop: 0 }}
                                  >
                                    {cumRap.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 thong-tin-lich-chieu">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                        className="col-span-1 text-blue-400 font-bold"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
