import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";


export class QuanLyPhimService extends baseService {

    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);

    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }

}

const qlPhimService = new QuanLyPhimService();
export const {layDanhSachBanner,layDanhSachPhim} = qlPhimService;
