import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function MenuItem({
  data,
  setShowMenuComputer,
  setShowMenuSmartPhones,
  setShowMenuWatches,
  setShowMenuTV,
  setShowMenuTablet,
  setShowMenuGaming,
}) {
  const handldeMouseLeaveMenuItem = (e) => {
    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };
  const dataMenuItem = data.data;
  const renderData = () => {
    const arr = [];
    for (let i = 0; i < dataMenuItem.length; i++) {
      arr.push(
        <li className={cx("menuItem__listItemSub")}>
          {dataMenuItem[i]}
          <span className={cx("crossBar")}></span>
        </li>
      );
    }
    return arr;
  };
  return (
    <div className={cx("menuItem")} onMouseLeave={handldeMouseLeaveMenuItem}>
      <div className={cx("menuItem__list")}>
        <ul className={cx("menuItem__listItem")}>{renderData()}</ul>
      </div>
      <div className={cx("menuItem__imgHidden")}>
        <img src={data.imgHidden} alt="img" width="300px" height="220px" />
      </div>
      <div className={cx("menuItem__info")}>
        <div className={cx("menuItem__infoTitle")}>
          <div className={cx("menuItem__infoName")}>{data.title}</div>
          <div className={cx("menuItem__infoDesc")}>{data.desc}</div>
          <button className={cx("menuItem__infoBtn")}>Find out</button>
        </div>
        <div className={cx("menuItem__infoImg")}>
          <img src={data.imgDevice} alt="img" width="200px" height="200px" />
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
