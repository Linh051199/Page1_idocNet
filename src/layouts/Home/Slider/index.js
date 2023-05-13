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
    // <Carousel slide={false}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?s=612x612&w=0&k=20&c=UP1yQs6o0eidm4L2F74DDm02pyeH40MwBwwGRAKhb4E="
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg"
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Slider;
