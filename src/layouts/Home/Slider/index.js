import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
// import Carousel from "react-bootstrap/Carousel";

import styles from "./Slider.module.scss";
import imageSlider from "./dataSlider";

const cx = classNames.bind(styles);

function Slider() {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImage = {
    backgroundImage: `url(${imageSlider[currentState].url})`,
    backgroundImageSize: "cover",
    backgroundPosition: "center",
    heigh: "100%",
  };

  const goToNext = (currentState) => {
    console.log(currentState);
    setCurrentState(currentState);
  };
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("slider__bgImg")} style={bgImage}></div>
      <div className={cx("slider__desc")}>
        <div className={cx("carousel-boullt")}>
          {imageSlider.map((imageSlider, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
