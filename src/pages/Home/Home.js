import React, { useEffect, useState } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import MultipleRowsSlick from "../../components/ReactSlick/MultipleRowsSlick";
// Redux connect
import { useSelector, useDispatch } from "react-redux";
import { Film } from "../../components/Film/Film";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapActions } from "../../redux/actions/QuanLyRapActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";



export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  console.log("propsHome", props);
  // props.match.params

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return (
  //       <Film key={index} />
  //     );
  //   });
  // };

  useEffect(()=>{
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function from thunk

    dispatch(layDanhSachHeThongRapActions());
    
  },[])


  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowsSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap -m-4" style={{justifyContent:'center'}}>{renderFilms()}</div> */}
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
