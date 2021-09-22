import { QuanLyPhimService } from "../../services/quanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";
import { layDanhSachPhim } from "../../services/quanLyPhimService";

export const layDanhSachPhimAction = () => {



    return async (dispatch) => {
        try {
            // Sd tham so thamSo
            const result = await layDanhSachPhim();
        
            dispatch({
              type: SET_DANH_SACH_PHIM,
              arrFilm: result.data.content,
            });
          } catch (errors) {
            console.log("errors", errors.response?.data);
          }
        };
}