import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./MobileContent.module.scss";
// import images from "../../../assets/images";
// import ProductItem from "../../Home/Products/ProductItem";

const cx = classNames.bind(styles);

function MobileContent() {
  const [showBorder6, setShowBorder6] = useState(true);
  const [showBorder12, setShowBorder12] = useState(false);
  const [showBorder24, setShowBorder24] = useState(false);
  const [showBorder36, setShowBorder36] = useState(false);

  const handleClickShow6 = () => {
    setShowBorder6(true);
    setShowBorder12(false);
    setShowBorder24(false);
    setShowBorder36(false);
  };
  const handleClickShow12 = () => {
    setShowBorder6(false);
    setShowBorder12(true);
    setShowBorder24(false);
    setShowBorder36(false);
  };
  const handleClickShow24 = () => {
    setShowBorder6(false);
    setShowBorder12(false);
    setShowBorder24(true);
    setShowBorder36(false);
  };
  const handleClickShow36 = () => {
    setShowBorder6(false);
    setShowBorder12(false);
    setShowBorder24(false);
    setShowBorder36(true);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div className={cx("title__showItem")}>Showing all 2 results</div>
        <div className={cx("title__list")}>
          <div className={cx("title__listShow")}>
            <span>Show : </span>
            <div
              className={cx("title__listShowItem")}
              style={
                showBorder6
                  ? { borderBottom: "1px solid #a8a8a8", color: "#5c5a82" }
                  : {}
              }
              onClick={handleClickShow6}
            >
              6
            </div>
            <div
              className={cx("title__listShowItem")}
              style={
                showBorder12
                  ? { borderBottom: "1px solid #a8a8a8", color: "#5c5a82" }
                  : {}
              }
              onClick={handleClickShow12}
            >
              12
            </div>
            <div
              className={cx("title__listShowItem")}
              style={
                showBorder24
                  ? { borderBottom: "1px solid #a8a8a8", color: "#5c5a82" }
                  : {}
              }
              onClick={handleClickShow24}
            >
              24
            </div>
            <div
              className={cx("title__listShowItem")}
              style={
                showBorder36
                  ? { borderBottom: "1px solid #a8a8a8", color: "#5c5a82" }
                  : {}
              }
              onClick={handleClickShow36}
            >
              36
            </div>
          </div>
          <div className={cx("title__menu")}>
            Default sorting
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className={cx("content")}></div>
    </div>
  );
}

export default MobileContent;
