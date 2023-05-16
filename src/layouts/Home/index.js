import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "./Slider";
import Outstanding from "./Outstanding";
import Add from "./Add";
import Products from "./Products";
import FeelSound from "./FeelSound/inde";
import NewBePhone from "./NewBePhone";
import Shopping from "./Shopping";
import About from "./About";
import Contact from "./Contact";
import images from "../../assets/images";
import MenuResponsiveMobile from "./MenuResponsiveMobile";

const cx = classNames.bind(styles);

function HomePage() {
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
      <Slider />
      <Outstanding />
      <Add />
      <Products />
      <FeelSound />
      <NewBePhone />
      <Shopping />
      <About />
      <Contact />
      <Footer />
      <MenuResponsiveMobile />
    </div>
  );
}

export default HomePage;
