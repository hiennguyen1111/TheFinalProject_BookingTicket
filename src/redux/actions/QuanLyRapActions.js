import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";
import { layThongTinLichChieuPhim } from "../../services/QuanLyRapService";
import { layDanhSachHeThongRap } from "../../services/QuanLyRapService";

export const layDanhSachHeThongRapActions = () => {
  return async (dispatch) => {
    try {
      const result = await layDanhSachHeThongRap();
      console.log("result", result.data.content);

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinLichChieuPhim(id);
      // const result = await QuanLyRapService.layDanhSachHeThongRap();

      console.log("result1", result);

      // Lay dc du lieu tu api ve => reducer
      dispatch({
          type:SET_CHI_TIET_PHIM,
          filmDetail: result.data.content,
      })
    
    } catch (errors) {
      console.log("errors1", errors);
    }
  };
};
