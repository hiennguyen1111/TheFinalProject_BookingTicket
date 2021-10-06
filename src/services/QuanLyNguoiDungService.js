import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {

    constructor() {
        super();
    }

    layThongTinDangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }

    layThongTinNguoiDung = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    }

}

const qlNguoiDungService = new QuanLyNguoiDungService();
export const {layThongTinDangNhap, layThongTinNguoiDung} = qlNguoiDungService;
