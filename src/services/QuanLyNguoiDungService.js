import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  layThongTinDangNhap = (thongTinDangNhap) => {
    // {"taiKhoan": "", "matKhau": ""}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  layThongTinDangKy = (thongTinDangKy) => {
    // {"taiKhoan": "", "matKhau": "", "email": "", "soDt": "", "maNhom": "","hoTen": ""}
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };

  layThongTinNguoiDung = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  layDanhSachNguoiDung = (taiKhoan='') => {
    if (taiKhoan.trim() !== ''){
      console.log("THUNK KEYWORD", taiKhoan);
      return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`);
    }
    console.log("ABC KEYWORD", taiKhoan);
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
    
  };

  themNguoiDung = (formData) => {
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, formData);
  }

  capNhatThongTinNguoiDung = (formData) => {
    console.log('formData1',formData)
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData);
  }

  xoaNguoiDung = (taiKhoan) => {
    return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung=${taiKhoan}`);
  };

  
}

const qlNguoiDungService = new QuanLyNguoiDungService();
export const {
  layThongTinDangNhap,
  layThongTinDangKy,
  layThongTinNguoiDung,
  layDanhSachNguoiDung,
  themNguoiDung,
  capNhatThongTinNguoiDung,
  xoaNguoiDung,
} = qlNguoiDungService;
