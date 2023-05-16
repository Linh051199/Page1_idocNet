import React from "react";
import classNames from "classnames/bind";

import styles from "./Mobile.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileSideNav from "./MobileSideNav";
import MobileContent from "./MobileContent";
import images from "../../assets/images";
import MenuResponsiveMobile from "../Home/MenuResponsiveMobile";
const cx = classNames.bind(styles);
function MobilePage() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("sideBarAd")}>
        <div className={cx("sideBarAdItem1")}>
          <div className={cx("sideBarItem1__desc")}>
            <span className={cx("sideBarAdItem1Highlight")}>650+</span> <br />{" "}
            websites
          </div>
        </div>
        <div className={cx("sideBarAdItem2")}>
          <img
            className={cx("sideBarAdItem2Icon")}
            src={images.SideBarBuyIcon}
            alt="img"
          />
          <br /> Buy now{" "}
        </div>
      </div>
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
