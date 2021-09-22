import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyRapService extends baseService {

    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);

    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }

}

const qlRapService = new QuanLyRapService();
export const {layDanhSachHeThongRap,layThongTinLichChieuPhim} = qlRapService;