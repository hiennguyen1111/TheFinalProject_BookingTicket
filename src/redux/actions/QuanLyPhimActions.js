import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";
import {
  layDanhSachPhim,
  themPhimUploadHinh,
  layThongTinPhim,
  capNhatPhimUpload,
  xoaPhim,
} from "../../services/quanLyPhimService";
import { history } from "../../App";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      // Sd tham so thamSo
      const result = await layDanhSachPhim();

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await themPhimUploadHinh(formData);
      alert("Thêm phim thành công!");
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await capNhatPhimUpload(formData);
      alert("Cập nhật thành công!");
      console.log('result',result);
      dispatch(layDanhSachPhimAction());
      history.push("/admin/films");
    
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinPhim(maPhim);
      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};


export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await xoaPhim(maPhim);
      alert ('Xoá phim thành công!');

      // Sau khi xoá xong load lại danh sách phim mới
      dispatch(layDanhSachPhimAction());
    
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  }
}