import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Input, Space, Button } from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimActions";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import Highlighter from "react-highlight-words";

const { Search } = Input;

export default function Films(props) {
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();

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
    {title: "M?? phim",
    dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
      responsive: ["md"],
    },
    {title: "H??nh ???nh",
    dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment key={index}>
            <img
              src={film.hinhAnh}
              alt="{film.tenPhim}"
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
      responsive: ["md"],
    },
    {title: "T??n phim",
    dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
      ...getColumnSearchProps("tenPhim"),
    },
    {title: "Gi???i thi???u",
    dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
      responsive: ["md"],
    },
    {title: "H??nh ?????ng",
    dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={`/admin/films/edit/${film.maPhim}`}
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
                    "B???n c?? ch???c mu???n xo?? phim " + film.tenPhim + " kh??ng?"
                  )
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
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

            <NavLink
              key={3}
              className="mr-2"
              onClick={() => {
                //localStorage.setItem
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
              to={`/admin/films/showtimes/${film.maPhim}/${film.tenPhim}`}
            >
              <CalendarOutlined
                className="iphone:text-xl iphonePlus:text-2xl md:text-3xl bold"
                style={{
                  color: "#a0d911",
                  // fontSize: "30px",
                  fontWeight: "bold",
                }}
              />{" "}
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
  ];

  const data = arrFilmDefault;

  const onSearch = (value) => {
    // G???i API l???y danh s??ch phim
    dispatch(layDanhSachPhimAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="container">
      <h3 className="iphone:text-lg iphonePlus:text-xl md:text-2xl lg:text-3xl">Qu???n l?? phim</h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          history.push("/admin/films/addnew");
        }}
      >
        Th??m phim
      </Button>
      {/* <Search
        className="mb-5"
        placeholder="Nh???p t??n phim b???n mu???n t??m ki???m"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      /> */}
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(record) => record.maPhim}
        expandable={{
          expandedRowRender: (record) => (
            <div className="flex flex-col">
              <p className="block mb-3 md:hidden">M?? phim: {record.maPhim}</p>
              {/* <p className="block mb-3">???nh ?????i di???n: {record.hinhAnh}</p> */}
              {/* <p className="block mb-3 md:hidden">Email: {record.email}</p> */}
              <p className="block mb-3">Gi???i thi???u: {record.moTa}</p>
            </div>
          ),
          rowExpandable: (record) => {
            return window.innerWidth >= 1280 ? false : true;
          },
        }}
      />
    </div>
  );
}
