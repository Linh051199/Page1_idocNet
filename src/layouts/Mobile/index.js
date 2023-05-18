import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Mobile.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileSideNav from "./MobileSideNav";
import MobileContent from "./MobileContent";
import images from "../../assets/images";
import MenuResponsiveMobile from "../Home/MenuResponsiveMobile";
import SideBarAd from "../Home/SideBarAd";
const cx = classNames.bind(styles);
function MobilePage() {
  return (
    <div className={cx("wrapper", "grid")}>
      <SideBarAd />
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
      <MenuResponsiveMobile />
    </div>
  );
}

export default MobilePage;
