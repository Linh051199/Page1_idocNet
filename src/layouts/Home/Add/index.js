import React from "react";
import classNames from "classnames/bind";

import styles from "./Add.module.scss";

const cx = classNames.bind(styles);

function Add() {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("add__left")}>
        <div className={cx("add__leftInfo")}>
          <div className={cx("add__leftInfoNote")}>Our recommendation</div>
          <div className={cx("add__leftInfoTitle")}>BeWatch GT</div>
          <div className={cx("add__leftInfoDesc")}>Dolor dictumst pretium</div>
          <button className={cx("add__leftInfoBtn")}>Buy now</button>
        </div>
      </div>
      <div className={cx("add__right")}>
        <div className={cx("add__rightInfo")}>
          <div className={cx("add__rightInfoNote")}>Our recommendation</div>
          <div className={cx("add__rightInfoTitle")}>BeSound</div>
          <div className={cx("add__rightInfoDesc")}>Dolor dictumst pretium</div>
          <button className={cx("add__rightInfoBtn")}>Products</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
