import React from "react";
import classNames from "classnames/bind";

import styles from "./Mobile.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileSideNav from "./MobileSideNav";
import MobileContent from "./MobileContent";
const cx = classNames.bind(styles);
function MobilePage() {
  return (
    <div className={cx("wrapper", "grid")}>
      <Header />
      <div className={cx("container", "grid")}>
        <div className={cx("content", "grid", "wide")}>
          <div className={cx("mobile__sideNav")}>
            <MobileSideNav />
          </div>
          <div className={cx("mobile__content")}>
            <MobileContent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MobilePage;
