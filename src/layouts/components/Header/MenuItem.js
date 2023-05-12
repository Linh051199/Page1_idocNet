import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, setShowMenuComputer, setShowMenuSmartPhones }) {
  const handldeMouseLeaveMenuItem = (e) => {
    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
  };
  console.log(data.data);
  const dataMenuItem = data.data;
  const renderData = () => {
    const arr = [];
    for (let i = 0; i < dataMenuItem.length; i++) {
      arr.push(<li>{dataMenuItem[i]}</li>);
    }
    return arr;
  };
  return (
    <div className={cx("menuItem")} onMouseLeave={handldeMouseLeaveMenuItem}>
      <div className={cx("menuItem__list")}>
        <ul>{renderData()}</ul>
      </div>
      <div className={cx("menuItem__imgHidden")}>
        <img src={data.imgHidden} alt="img" />
      </div>
      <div className={cx("menuItem__Info")}></div>
    </div>
  );
}

export default MenuItem;
