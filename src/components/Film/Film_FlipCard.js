import React from "react";
import {useDispatch} from "react-redux"
import "./Film_FlipCard.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { history } from "../../App";
import { OPEN_MODAL } from '../../redux/types/QuanLyPhimType';


export default function Film_FlipCard(props) {

  const dispatch = useDispatch()
  const { item } = props;

  return (
    <div className="flip-card mt-6">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.hinhAnh} alt="Avatar" />
        </div>

        <div
          className="flip-card-back relative"
          style={{ backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div className="absolute top-0 left-0">
            <img src={item.hinhAnh} alt="Avatar" />
          </div>
          <div className="w-full h-full absolute flex justify-center items-center opacity-50 bg-black">
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined
                  className="iphone:text-xl iphoneplus:text-2xl md:text-4xl lg:text-5xl"
                  onClick={() => {
                    dispatch({
                      type: OPEN_MODAL,
                      maPhimModal: item.maPhim,
                    });
                  }}
                />
              </div>
              <div className="text-xs md:text-lg lg:text-2xl mt-2 font-bold">
                {item.tenPhim}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          history.push(`/detail/${item.maPhim}`);
        }}
        style={{ backgroundColor: "#002766" }}
        className="block text-center text-white cursor-pointer iphone:py-1 md:py-2 lg:py-3 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
