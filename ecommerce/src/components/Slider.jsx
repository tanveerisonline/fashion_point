import React, { useState } from "react";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { ApiSlides } from "../apis/SliderApi";

function Slider() {
  const [slides] = useState(ApiSlides);
  const [active, setActive] = useState(0);
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer hover:shadow-lg";
  return (
    <div className="parentDiv h-[540px] flex justify-between items-center bg-white">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>
      <div className="wrapper w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-[3px] overflow-hidden relative bg-[#ffbd0f]">
        <div className="slide flex items-center justify-center h-[100%]">
          <div className="forImage h-[100%] flex flex-1 justify-center items-center">
            <img
              className="h-[100%] object-cover"
              src="https://img.freepik.com/premium-photo/happy-surprised-young-black-woman-with-open-mouth-many-bags-with-purchases-jumping-from-phone_116547-42313.jpg?w=1060"
              alt="slide-1"
            />
            <div className="des flex flex-col flex-1 justify-center place-items-start ml-10">
              <h2 className="text-[55px]">It's an awesome deal today</h2>
              <p className="text-[30px]">
                Get upto 40% off on all clothing products
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
        Slider
      </div>
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default Slider;
