import axios from 'axios'
import { DOMAIN } from '../../util/settings/config';
import { SET_CAROUSEL } from './types/CarouselType';
import { layDanhSachBanner } from '../../services/quanLyPhimService';

export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
            const result = await layDanhSachBanner();
        
            dispatch({
              type: SET_CAROUSEL,
              arrImg: result.data.content,
            });
          } catch (errors) {
            console.log("errors", errors);
          }
        };
    }
  
