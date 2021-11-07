import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import MultipleRowsSlick from "../../components/ReactSlick/MultipleRowsSlick";
// Redux connect
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapActions } from "../../redux/actions/QuanLyRapActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import FilmModal from "../../components/Film/FilmModal"


export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  console.log("propsHome", props);

  useEffect(()=>{
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function from thunk

    dispatch(layDanhSachHeThongRapActions());
    
  },[])


  return (
    <div className="flex flex-col">
      <HomeCarousel />
      <section className="w-11/12 mx-auto text-gray-600 body-font">
        <div className="iphone:py-4 px-5 iphonePlus:py-6 md:py-10 lg:py-18 mx-auto">
          <MultipleRowsSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="iphone:m-0 mx-36 container">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>

      <FilmModal />
    </div>
  );
}
