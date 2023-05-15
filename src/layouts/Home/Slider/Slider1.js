import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function Slider1() {
  return (
    <div className={cx("slider1")}>
      <div className={cx("slider1__title")}>
        <div className={cx("slider1__titleNew")}>NEW</div>
        <div className={cx("slider1__titleName")}>BeeBook Pro</div>
        <div className={cx("slider1__titleDesc")}>
          BeBook Pro is ready for your <br /> ecommerce busioness
        </div>
        <button className={cx("slider1__titleBtn")}>By Now</button>
      </div>
      <div>
        <img
          className={cx("slider1__img")}
          src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-slider-pic1.webp"
          alt="img"
          width="560px"
          height="580px"
        />
      </div>
      <div className={cx("slider1__desc")}>
        <div className={cx("slider1__decsItem")}>
          <img src={images.Slider1Icon1} alt="img" />
          <div className={cx("slider1__descItemInfo")}>32GB RAM</div>
        </div>
        <div className={cx("slider1__decsItem")}>
          <div className={cx("slider1__decsItem")}>
            <img src={images.Slider1Icon2} alt="img" />
            <div className={cx("slider1__descItemInfo")}>Retina AMOLED</div>
          </div>
        </div>
        <div className={cx("slider1__decsItem")}>
          <div className={cx("slider1__decsItem")}>
            <img src={images.Slider1Icon3} alt="img" />
            <div className={cx("slider1__descItemInfo")}>Pentium 9 DT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
