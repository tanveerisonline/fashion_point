import React, { useState } from "react";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { ApiSlides } from "../apis/SliderApi";
import "./Slider.css";
function Slider() {
  const [slides] = useState(ApiSlides);
  const [active, setActive] = useState(0);
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer hover:shadow-lg";
  const nextSlide = () => {
    setActive(active === slides.length - 1 ? 0 : active + 1);
  };
  const preSlide = () => {
    setActive(active === 0 ? slides.length - 1 : active - 1);
  };
  return (
    <div className="parentDiv h-[540px] flex justify-between items-center bg-white">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
      {slides.map((slide, index) => {
        if (index === active) {
          return (
            <div
              className={
                `wrapper w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-[3px] overflow-hidden relative ` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage h-[100%] flex flex-1 justify-center items-center">
                  <img className="h-[100%] object-cover" src={slide.src} />
                  <div className="des flex flex-col flex-1 justify-center place-items-start ml-10">
                    <h2 className="text-[55px]">{slide.content.h2}</h2>
                    <p className="text-[30px]">{slide.content.p}</p>
                    <button className="btn">Shop Now</button>
                  </div>
                </div>
              </div>
              Slider
            </div>
          );
        }
      })}

      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={preSlide} />
      </div>
    </div>
  );
}

export default Slider;
