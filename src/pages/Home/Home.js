import React, { useState } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import MultipleRowsSlick from "../../components/ReactSlick/MultipleRowsSlick";


// Redux connect
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  console.log("propsHome", props);
  // props.match.params

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return (
  //       <Film key={index} />
  //     );
  //   });
  // };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowsSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap -m-4" style={{justifyContent:'center'}}>{renderFilms()}</div> */}
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu />
      </div>
    </div>
  );
}
