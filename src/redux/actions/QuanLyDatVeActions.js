import { layChiTietPhongVe, datVe } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../types/QuanLyDatVeType";
import { connection } from "../../index";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await layChiTietPhongVe(maLichChieu);
      console.log(result);

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);

      const result = await datVe(thongTinDatVe);
      // Dat ve thanh cong goi API load lai phong ve
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);

      let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
      connection.invoke(
        "datGheThanhCong",
        userLogin.taiKhoan,
        thongTinDatVe.maLichChieu
      );

      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    // Dua thong tin ghe len reducer
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });

    // Cal API ve backend
    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

    console.log("danhSachGheDangDat", danhSachGheDangDat);
    console.log("taiKhoan", taiKhoan);
    console.log("maLichChieu", maLichChieu);

    // Bien mang thanh chuoi
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    console.log("danhSachGheDangDat", typeof danhSachGheDangDat);
    console.log("taiKhoan", typeof taiKhoan);
    console.log("maLichChieu", typeof maLichChieu);

    // Call API signalR
    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};
