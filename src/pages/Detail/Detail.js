import React, { useEffect } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs, Radio, Space, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";



const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log( 'filmDetail',filmDetail );

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
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "250px", height:'250px' }}
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
              style={{ marginLeft: "15%", color:'#fff', fontWeight:'bold', fontSize:20 }}>Đánh giá</h1>
              <h1 style={{ marginLeft: "5%"}}
              className="text-blue-400 text-2xl"
            ><Rate allowHaft value={filmDetail.danhGia/2} style={{color:'rgb(81, 152, 233)', fontSize:30}} /></h1>
              
            
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

        <div className="container mt-20">
          <Tabs tabPosition={"left"}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab 3
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
