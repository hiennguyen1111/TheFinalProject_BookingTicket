import {
  layThongTinDangNhap,
  layThongTinDangKy,
  layThongTinNguoiDung,
  layDanhSachNguoiDung,
  themNguoiDung,
  capNhatThongTinNguoiDung,
  xoaNguoiDung,
} from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  DANG_KY_ACTION,
  LAY_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinDangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        // replace ve trang home
        history.replace("/home");
      }

      console.log("result", result);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinDangKy(thongTinDangKy);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data.content,
        });
        // replace trang register thanh trang login
        history.replace("/login");
      }

      console.log("result", result);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinNguoiDungAction = (value = "") => {
  return async (dispatch) => {
    try {
      const result = await layThongTinNguoiDung(value);
      console.log("thongTinNguoiDung", result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layDanhSachNguoiDungAction = (taiKhoan = "") => {
  return async (dispatch) => {
    try {
      const result = await layDanhSachNguoiDung(taiKhoan);
      console.log("danhSachNguoiDung", result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG,
          danhSachNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const themNguoiDungAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await themNguoiDung(formData);
      alert("Thêm người dùng thành công!");

      history.push("/admin");
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await capNhatThongTinNguoiDung(formData);
      alert("Cập nhật thành công!");
      console.log("result", result);
      dispatch(layDanhSachNguoiDungAction());
      history.push("/admin"); // Quay về trang quản lý người dùng
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await xoaNguoiDung(taiKhoan);
      alert("Xoá người dùng thành công!");

      // Sau khi xoá xong load lại danh sách người dùng mới
      dispatch(layDanhSachNguoiDungAction());
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
