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
        <div className="grid xl:grid-cols-12 md:grid-cols-12">
          <div className="xl:col-span-6 xl:col-start-3 md:col-span-6 md:col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1 w-60 xl:h-60 md:h-52"
                src={filmDetail.hinhAnh}
                alt="{filmDetail.hinhAnh}"
              />
              <div className="col-span-2 ml-5">
                <p className="xl:text-sm md:text-sm">
                  <span>
                    Ngày khởi chiếu:{" "}
                  </span>
                  <span>
                    {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                  </span>
                </p>
                <p className="iphone:text-lg iphonePlus:text-xl md:text-2xl font-bold">
                  {filmDetail.tenPhim}
                </p>
                <p>
                  {filmDetail.moTa?.length > 150
                    ? filmDetail.moTa.substr(0, 150) + "..."
                    : filmDetail.moTa}
                </p>
              </div>
            </div>
          </div>

          <div className={window.innerWidth < 768 ? "hidden" : "col-span-4 md:col-start-9 flex flex-col justify-center" }>
            <div>
              <h1 className="iphone:ml-8 iphonePlus:ml-8 md:ml-10 xl:ml-14 text-white bold xl:text-2xl md:text-2xl">
                Đánh giá
              </h1>
            </div>
            <div>
              <h1 className="xl:ml-10 md:ml-7 text-blue-400 xl:text-2xl md:text-lg">
                <Rate
                  allowHaft
                  value={filmDetail.danhGia / 2}
                  style={{ color: "#69c0ff" }}
                />
              </h1>
            </div>
            <div
              className={`c100 xl:pl-10 md:pl-7 p${
                filmDetail.danhGia * 10
              } iphone:small md:medium xl:big`}
            >
              <span className="xl:ml-10 md:ml-7 text-white">
                {filmDetail.danhGia * 10}%
              </span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>

            <br />
          </div>
        </div>

        <div className="mt-10 xl:w-2/3 md:w-2/3 bg-white xl:container md:container xl:ml-44 md:ml-32">
          <Tabs className="flex flex-col" defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs
                  tabPosition={window.innerWidth < 768 ? "top" : "left"}
                >
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="m-2 flex iphone:flex-col md:flex-row items-center justify-center">
                            <div>
                              <img
                                src={htr.logo}
                                className="rounded-full iphone:block iphone:w-6 md:w-10 xl:w-16"
                                alt="htr.logo"
                              />
                            </div>

                            <div className="text-center ml-2">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="container mt-5" key={index}>
                              <div className="flex flex-row">
                                <img
                                  className="sm:w-6 sm:h-6 md:w-12 md:h-12 xl:h-20 xl:w-20"
                                  src="https://picsum.photos/60/60"
                                />
                                <div className="ml-2">
                                  <p className="xl:text-lg md:text-sm font-bold">
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

                              <div className="flex flex-row flex-wrap thong-tin-lich-chieu">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 8)
                                  .map((lichChieu, index) => {
                                    return (
                                      <div className="mr-2">
                                        <NavLink
                                          to={`/checkout/${lichChieu.maLichChieu}`}
                                          key={index}
                                          className="col-span-1 gap-2 text-blue-400 font-bold "
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      </div>
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
              <div className="grid grid-cols-12">
                <div className="col-span-4 col-start-1">
                  <img
                    className="col-span-1 w-60 xl:h-60 md:h-52"
                    src={filmDetail.hinhAnh}
                    // style={{ width: "250px", height: "250px" }}
                    alt="{filmDetail.hinhAnh}"
                  />
                </div>
                <div className="col-span-8 ml-5">
                  <p className="xl:text-xl md:text-lg font-bold">
                    Ngày khởi chiếu:{" "}
                    <span className="text-blue-400 font-medium">
                      {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                    </span>
                  </p>
                  <p className="xl:text-xl md:text-lg font-bold">
                    Tên phim:{" "}
                    <span className="text-blue-400 font-medium">
                      {filmDetail.tenPhim}
                    </span>
                  </p>

                  <p className="xl:text-xl md:text-lg font-bold">
                    Sơ lược nội dung:{" "}
                  </p>
                  <p>{filmDetail.moTa}</p>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              <div className="text-center">
                <Rate
                  style={{ paddingTop: 0 }}
                  allowHaft
                  value={filmDetail.danhGia / 2}
                  style={{ color: "#69c0ff", fontSize: 30 }}
                />
                <br />

                <div
                  className={`c100 p${filmDetail.danhGia * 10} medium center`}
                >
                  <span className="text-blue-900 text-center">
                    {filmDetail.danhGia * 10}%
                  </span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
