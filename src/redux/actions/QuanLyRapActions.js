import { QuanLyRapService } from "../../services/QuanLyRapService"
import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";


export const layDanhSachHeThongRapActions = () => {
    return async dispatch => {
        try {
            const result = await QuanLyRapService.layDanhSachHeThongRap();
            console.log('result', result.data.content);

            if(result.status === 200){
                dispatch({
                    type:SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result.data.content,
                })
            }
        
        
        } catch(errors){
            console.log('errors',errors.response?.data)
        }
    }
}