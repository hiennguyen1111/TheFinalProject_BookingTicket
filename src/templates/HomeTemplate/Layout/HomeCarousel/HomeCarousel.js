import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import './HomeCarousel.css';


const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();
  
  // useEffect se tu kich hoat khi component load ra
  useEffect( () => {
    const action = getCarouselAction();
    dispatch(action);


  }, [])

  const renderImg = () => {
    return arrImg?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt="filmImg"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel effect="fade">
      {renderImg()}
    </Carousel>
  );
}
