import React from "react";
import classNames from "classnames/bind";

import styles from "./MobileSideNav.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function MobileSideNav() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("mobile__title")}>5G Phones</div>
      <div className={cx("mobile__brand")}>
        Brand
        <div className={cx("mobile__brandList")}>
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />{" "}
          Digimate
        </div>
        <div>
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />{" "}
          Futech
        </div>
        <div>
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />{" "}
          jbe
        </div>
        <div>
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />{" "}
          phonee
        </div>
        <div>
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />{" "}
          Senco
        </div>
      </div>
      <div className={cx("mobile__color")}>
        <span>Color</span>
        <div className={cx("mobile__colorList")}>
          <Tippy content="Aquamarine">
            <div className={cx("mobile__colorItem1")}></div>
          </Tippy>
          <Tippy content="Black">
            <div className={cx("mobile__colorItem2")}></div>
          </Tippy>
          <Tippy content="Gray">
            <div className={cx("mobile__colorItem3")}></div>
          </Tippy>
          <Tippy content="Green">
            <div className={cx("mobile__colorItem4")}></div>
          </Tippy>
          <Tippy content="Purple">
            <div className={cx("mobile__colorItem5")}></div>
          </Tippy>
          <Tippy content="Red">
            <div className={cx("mobile__colorItem6")}></div>
          </Tippy>
          <Tippy content="White">
            <div className={cx("mobile__colorItem7")}></div>
          </Tippy>
        </div>
      </div>
      <div className={cx("mobile__hdd")}>
        HDD Size
        <div className={cx("mobile__hddList")}>
          <Tippy content="1T">
            <div className={cx("mobile__hddItem")}>1T </div>
          </Tippy>
          <Tippy content="2T">
            <div className={cx("mobile__hddItem")}>2T </div>
          </Tippy>
          <Tippy content="512GB">
            <div className={cx("mobile__hddItem")}>512GB </div>
          </Tippy>
          <Tippy content="64GB">
            <div className={cx("mobile__hddItem")}>64GB </div>
          </Tippy>
        </div>
      </div>
      <div className={cx("mobile__screen")}>
        Screen size
        <div className={cx("mobile__screenList")}>
          <Tippy content="1.57">
            <div className={cx("mobile__screenItem")}>1.57"</div>
          </Tippy>
          <Tippy content="13.3">
            <div className={cx("mobile__screenItem")}>13.3" </div>
          </Tippy>
          <Tippy content="14.1">
            <div className={cx("mobile__screenItem")}>14.1" </div>
          </Tippy>
          <Tippy content="15.4">
            <div className={cx("mobile__screenItem")}>15.4" </div>
          </Tippy>
          <Tippy content="49">
            <div className={cx("mobile__screenItem")}>49" </div>
          </Tippy>
          <Tippy content="5.5">
            <div className={cx("mobile__screenItem")}>5.5" </div>
          </Tippy>
          <Tippy content="50">
            <div className={cx("mobile__screenItem")}>50" </div>
          </Tippy>
          <Tippy content="55">
            <div className={cx("mobile__screenItem")}>55" </div>
          </Tippy>
          <Tippy content="60">
            <div className={cx("mobile__screenItem")}>60" </div>
          </Tippy>
          <Tippy content="70">
            <div className={cx("mobile__screenItem")}>70" </div>
          </Tippy>
        </div>
      </div>
      <div className={cx("mobile__inStock")}>
        <input
          type="checkbox"
          style={{ marginRight: "5px", cursor: "pointer" }}
        />{" "}
        In stock
      </div>
      <div className={cx("mobile__outOfStock")}>
        <input
          type="checkbox"
          style={{ marginRight: "5px", cursor: "pointer" }}
        />{" "}
        Out of stock
      </div>
    </div>
  );
}

export default MobileSideNav;
