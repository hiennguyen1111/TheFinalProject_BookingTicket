import { layThongTinDangNhap, layThongTinNguoiDung } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
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
        // Chuyen huong dang nhap ve trang truoc do
        history.goBack();
      }

      console.log("result", result);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};


export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await layThongTinNguoiDung();
      console.log('thongTinNguoiDung',result);
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
