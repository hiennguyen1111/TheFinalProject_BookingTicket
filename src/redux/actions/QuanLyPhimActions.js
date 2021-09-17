import { QuanLyPhimService } from "../../services/quanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = () => {



    return async (dispatch) => {
        try {
            // Sd tham so thamSo
            const result = await QuanLyPhimService.layDanhSachPhim();
        
            dispatch({
              type: SET_DANH_SACH_PHIM,
              arrImg: result.data.content,
            });
          } catch (errors) {
            console.log("errors", errors);
          }
        };
}