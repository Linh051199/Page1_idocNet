import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

function Slider3() {
  return (
    <div className={cx("slider3")}>
      <div className={cx("slider3__header")}>be ready</div>
      <div className={cx("slider3__body")}>for a new experience</div>
    </div>
  );
}

export default Slider3;
