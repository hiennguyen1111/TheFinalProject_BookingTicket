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
      title: "H??? t??n",
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
      title: "???nh ?????i di???n",
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
      title: "T??i kho???n",
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
      title: "M?? lo???i ng?????i d??ng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung - b.maLoaiNguoiDung,
      sortDirections: ["descend", "ascend"],
      width: "15%",
      responsive: ["lg"],
    },
    {
      title: "H??nh ?????ng",
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
                // G???i action xo??
                if (
                  window.confirm(
                    "B???n c?? ch???c mu???n xo?? t??i kho???n " +
                      user.taiKhoan +
                      " kh??ng?"
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
    // G???i API l???y danh s??ch ng?????i d??ng
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
        Qu???n l?? ng?????i d??ng
      </h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/adduser");
        }}
      >
        Th??m t??i kho???n m???i
      </Button>
      <Search
        className="mb-5"
        placeholder="Nh???p t??n ng?????i d??ng b???n mu???n t??m ki???m"
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
              <p className="block mb-3">H??? t??n: {record.hoTen}</p>
              <p className="block mb-3">T??i kho???n: {record.taiKhoan}</p>
              <p className="block mb-3 md:hidden">Email: {record.email}</p>
              <p className="block mb-3">
                M?? ng?????i d??ng: {record.maLoaiNguoiDung}
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
