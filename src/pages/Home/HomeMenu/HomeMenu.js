import React, { Fragment } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
  state = {tabPosition: window.innerWidth < 1280 ? "top" : "left"};

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex">
                      <img
                        className="iphone:w-8 iphone:h-8 md:w-11 md:h-11 lg:w-14 lg:h-14"
                        src={heThongRap.logo}
                        // width="50"
                        alt="{heThongRap.logo}"
                      />
                      <br />
                      <div className="text-left mx-2 md:mr-6">
                        <div>{cumRap.tenCumRap}</div>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* Load phim tuong ung */}
                  {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ height: 75, width: 75 }}
                              src={phim.hinhAnh}
                              alt="{phim.hinhAnh}"
                              onError={(e) => {
                                e.target.onerror = null; e.target.src="https://picsum.photos/75/75"
                              }}
                            />
                            <div className="ml-2">
                              <h1 className="text-2xl" style={{color:'#002766'}}>
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="flex flex-row flex-wrap">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        style={{color:'#1890ff'}}
                                        className="text-xl mr-6"
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  render() {
    console.log(this.props, "props123");
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </>
    );
  }
}
