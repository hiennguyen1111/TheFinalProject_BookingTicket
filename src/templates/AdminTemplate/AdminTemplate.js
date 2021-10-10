import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import { history } from "../../App";
import { USER_LOGIN, TOKEN_CYBERSOFT } from "../../util/settings/config";
import { Route, Redirect } from "react-router";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import "../../assets/styles/admin/admin.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này!");
    return <Redirect to="/" />;
  }
  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Bạn không có quyền truy cập vào trang này!");
    return <Redirect to="/" />;
  }

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
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
            style={{ color: "00474f", fontWeight: "bold" }}
          >
            Đăng xuất
          </button>{" "}
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo p-5">
                  <img
                    src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                    alt="cybersoftlogo"
                  />
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>

                  <SubMenu key="sub1" icon={<UserOutlined />} title="Films">
                    <Menu.Item key="2" icon={<FileOutlined />}>
                      <NavLink to="/admin/films">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/addnew">Add New</NavLink>
                    </Menu.Item>
                  </SubMenu>

                  <Menu.Item key="4" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/showtimes">ShowTime</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>

              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="text-right pr-10 pt-1">{operations}</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Footer</Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
}
