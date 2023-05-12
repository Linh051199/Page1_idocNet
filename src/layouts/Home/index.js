import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Header from "../components/Header";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper", "grid")}>
      <Header />
    </div>
  );
}

export default HomePage;
