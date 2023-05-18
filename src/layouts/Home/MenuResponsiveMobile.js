import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function MenuResponsiveMobile() {
  return (
    <div className={cx("menu")}>
      <div className={cx("menuItem")}>
        <i
          className="fa-solid fa-border-all"
          style={{ width: "30px", height: "30px", fontSize: "22px" }}
        ></i>
      </div>
      <div className={cx("menuItem")}>
        <i
          className="fa-regular fa-user"
          style={{ width: "30px", height: "30px", fontSize: "22px" }}
        ></i>
      </div>
      <div className={cx("menuItem")}>
        <div className={cx("menuItemNumber")}>0</div>
        <i
          className="fa-solid fa-cart-shopping"
          style={{ width: "30px", height: "30px", fontSize: "22px" }}
        ></i>
      </div>
      <div className={cx("menuItem")}>
        <div className={cx("menuItemNumber")}>0</div>
        <i
          className="fa-regular fa-heart"
          style={{ width: "30px", height: "30px", fontSize: "22px" }}
        ></i>
      </div>
    </div>
  );
}

export default MenuResponsiveMobile;
