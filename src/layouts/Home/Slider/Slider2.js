import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
function Slider2() {
  return (
    <div className={cx("slider2")}>
      <div className={cx("slider2__img")}>
        <img
          className={cx("slider2__img")}
          src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-slider-pic2.webp"
          alt="img"
          // width="540px"
          // height="576px"
        />
      </div>
      <div className={cx("slider2__title")}>
        <div className={cx("slider2__titleHeader")}>
          <img
            className={cx("slider2__titleHeaderJBE")}
            src={images.Slider2JBE}
            alt="img"
          />{" "}
          products presents
        </div>
        <div className={cx("slider2__titleBody")}>get</div>
      </div>

      <div className={cx("slider2__desc")}>
        <div className={cx("slider2__descHeader")}>louder</div>
        <div className={cx("slider2__descBody")}>
          <div className={cx("slider2__descBodyPrice")}>
            Only{" "}
            <span className={cx("slider2__descBodyPriceHighlight")}>$299</span>
          </div>
          <button className={cx("slider2__descBodyBtn")}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
