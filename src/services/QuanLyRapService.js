import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

  layThongTinHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap`
    );
  };

  layThongTinCumRap = (maHeThongRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };

}

const qlRapService = new QuanLyRapService();
export const {
  layDanhSachHeThongRap,
  layThongTinLichChieuPhim,
  layThongTinHeThongRap,
  layThongTinCumRap,
} = qlRapService;
