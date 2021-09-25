import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {

    constructor() {
        super();
    }

    layThongTinDangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);

    }

}

const qlNguoiDungService = new QuanLyNguoiDungService();
export const {layThongTinDangNhap} = qlNguoiDungService;
