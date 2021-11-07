import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import Film_FlipCard from "../Film/Film_FlipCard";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowsSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderFilms = () => {
    return props.arrFilm?.slice(0, 12).map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Film_FlipCard item={item} />
        </div>
      );
    });
  };

  let activeClassDC =
    dangChieu === true
      ? `${styleSlick["active_Film"]}`
      : `${styleSlick["non_active_Film"]}`;
  let activeClassSC =
    sapChieu === true
      ? `${styleSlick["active_Film"]}`
      : `${styleSlick["non_active_Film"]}`;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    initialSlide: 2,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <div className="flex">
        <button
          style={{ backgroundColor: "#002766" }}
          className={`${activeClassSC} font-semibold rounded text-white mr-2 after:text-pink-500 iphone:px-2 iphone:py-2 iphone:text-sm md:px-8 md:text-base`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>

        <button
          style={{ backgroundColor: "#002766" }}
          className={`${activeClassDC} font-semibold rounded text-white after:text-pink-500 iphone:px-2 iphone:py-2 iphone:text-sm md:px-8 md:text-base`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
      </div>
      <Slider {...settings} className={`${styleSlick["heightSlider"]}`}>
        {renderFilms()}
      </Slider>
    </div>
  );
};

export default MultipleRowsSlick;
