import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../actions/types/QuanLyNguoiDungType";

let user = {};
if(localStorage.getItem(USER_LOGIN)){
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
  userLogin: user
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case DANG_NHAP_ACTION:{
      const {thongTinDangNhap} = action;
      console.log('thongTinDangNhap',thongTinDangNhap);

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(ACCESS_TOKEN,thongTinDangNhap.accessToken);

      state.userLogin=thongTinDangNhap;
      console.log('user',state.userLogin);
      return{...state}
      // return {...state, userLogin:thongTinDangNhap}
    }

    default:
      return { ...state };
  }
};
