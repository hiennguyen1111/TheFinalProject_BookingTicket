import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space, Input } from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungActions";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import Highlighter from "react-highlight-words";

const { Search } = Input;

export default function UserDetail(props) {
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  const { danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  const { size } = props;

  console.log("size",size);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput?.current?.select(), 100);
      }
    },
    render: (text) =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setState({ searchText: "" });
  };

  let searchInput = useRef(null);

  const [state, setState] = useState({
    sortedInfo: null,
    searchText: "",
    searchedColumn: "",
  });

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
      responsive: ["lg"],
      ...getColumnSearchProps("hoTen"),
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "hinhAnh",
      render: (text, nguoiDung, index) => {
        return (
          <Fragment key={index}>
            <img
              src={`https://picsum.photos/id/${index}/50/50`}
              alt={`https://picsum.photos/id/${index}/50/50`}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/10/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: size.width >= 768 ? "15%" : "auto",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      // render: (text, record, index) => {
      //   console.log("renderTaiKhoan",record)
      //   return (
      //     <p>
      //       {record.taiKhoan?.length > 11
      //         ? record.taiKhoan.slice(0, 10) + "..."
      //         : record.taiKhoan}    
      //     </p>
      //   );
      // },
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
      ...getColumnSearchProps("taiKhoan"),
      responsive: ["lg"]
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
      responsive: ["md"],
      ...getColumnSearchProps("email"),
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung - b.maLoaiNguoiDung,
      sortDirections: ["descend", "ascend"],
      width: "15%",
      responsive: ["lg"],
    },
    {
      title: "Hành động",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              // className="mr-2"
              to={`/admin/users/edituser`}
            >
              <EditOutlined
                className="iphone:text-xl iphonePlus:text-2xl md:text-3xl bold"
                style={{
                  color: "#1890ff",
                  // fontSize: "30px",
                  fontWeight: "bold",
                }}
              />{" "}
            </NavLink>

            <span
              style={{ cursor: "pointer" }}
              key={2}
              onClick={() => {
                // Gọi action xoá
                if (
                  window.confirm(
                    "Bạn có chắc muốn xoá tài khoản " +
                      user.taiKhoan +
                      " không?"
                  )
                ) {
                  dispatch(xoaNguoiDungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined
                className="iphone:text-xl iphonePlus:text-2xl md:text-3xl bold"
                style={{
                  color: "#eb2f96",
                  // fontSize: "30px",
                  fontWeight: "bold",
                }}
              />{" "}
            </span>

            {/* <NavLink
              key={3}
              className="mr-2"
              onClick={() => {
                //localStorage.setItem
                localStorage.setItem("userParams", JSON.stringify(user));
              }}
              to={`/admin/users/${user.taiKhoan}`}>
              <CalendarOutlined
                style={{
                  color: "#a0d911",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              />{" "}
            </NavLink>
           */}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
  ];

  const data = danhSachNguoiDung;

  const onSearch = (value) => {
    // Gọi API lấy danh sách người dùng
    dispatch(layDanhSachNguoiDungAction(value));
    console.log("value", value);
  };

  const filter = (inputValue, path) => {
    console.log(
      "FILTER",
      path.some(
        (option) =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    );
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="iphone:text-lg iphonePlus:text-xl md:text-2xl lg:text-3xl">
        Quản lý người dùng
      </h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/adduser");
        }}
      >
        Thêm tài khoản mới
      </Button>
      <Search
        className="mb-5"
        placeholder="Nhập tên người dùng bạn muốn tìm kiếm"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        showSearch={{filter, matchInputWidth: false}}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(record) => record.taiKhoan}
        expandable={{
          expandedRowRender: (record) => (
            <div className="flex flex-col">
              <p className="block mb-3">Họ tên: {record.hoTen}</p>
              <p className="block mb-3">Tài khoản: {record.taiKhoan}</p>
              <p className="block mb-3 md:hidden">Email: {record.email}</p>
              <p className="block mb-3">
                Mã người dùng: {record.maLoaiNguoiDung}
              </p>
            </div>
          ),
          rowExpandable: (record) => {
            return size.width >= 1280 ? false : true;
          },
        }}
      />
    </div>
  );
}
