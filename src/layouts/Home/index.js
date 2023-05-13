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

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper", "grid")}>
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
    </div>
  );
}

export default HomePage;
