import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Title from "./Title";
import images from "../../../assets/images";
const cx = classNames.bind(styles);

function Header() {
  const [show, setShow] = useState(true);

  const controlHeader = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);
  return (
    <div className={cx("wrapper")}>
      {show && <Title />}
      {show && <Header1 />}
      <Header2 />
    </div>
  );
}

export default Header;
