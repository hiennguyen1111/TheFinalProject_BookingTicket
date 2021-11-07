import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import './HomeCarousel.css';


const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
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
            className="h-auto iphone:mt-12 iphone:h-250 iphonePlus:h-250 iphonePlus:mt-14 md:h-400 md:mt-16 lg:h-700 lg:mt-24"
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`,}}
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
