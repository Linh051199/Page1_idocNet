import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";
import imageSlider from "./dataSlider";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

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
  const currentBoullt = imageSlider[currentState].key;
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("slider__bgImg")} style={bgImage}>
        {currentState === 0 && <Slider1 />}
        {currentState === 1 && <Slider2 />}
      </div>
      <div className={cx("slider__desc")}>
        <div className={cx("carousel-boullt")}>
          {imageSlider.map((imageSliderItem, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
              style={
                currentBoullt === imageSliderItem.key
                  ? { backgroundColor: "#2a27e9" }
                  : { backgroundColor: "#fff" }
              }
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
