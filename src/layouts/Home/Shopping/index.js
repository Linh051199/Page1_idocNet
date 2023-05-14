import React from "react";
import classNames from "classnames/bind";

import styles from "./Shopping.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function Shopping() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("heading")}>
        Betheme offers you convenient <br /> shopping experience at any scale
      </div>
      <div className={cx("shopping", "grid", "wide")}>
        <div className={cx("shopping__option")}>
          <div className={cx("shopping__optionItem")}>
            <img
              className={cx("shopping__optionItemImg")}
              src={images.shopoingOption1}
              alt="img"
              width="117px"
              height="120px"
            />
            <div className={cx("shopping__optionItemHeader")}>
              Mobile shopping
            </div>
            <div className={cx("shopping__optionItemBody")}>
              Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
              eleifend Aliquam sem conubia
            </div>
          </div>
          <div className={cx("shopping__optionItem")}>
            <img
              className={cx("shopping__optionItemImg")}
              src={images.shopoingOption1}
              alt="img"
              width="117px"
              height="120px"
            />
            <div className={cx("shopping__optionItemHeader")}>
              Mobile shopping
            </div>
            <div className={cx("shopping__optionItemBody")}>
              Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
              eleifend Aliquam sem conubia
            </div>
          </div>
          <div className={cx("shopping__optionItem")}>
            <img
              className={cx("shopping__optionItemImg")}
              src={images.shopoingOption1}
              alt="img"
              width="117px"
              height="120px"
            />
            <div className={cx("shopping__optionItemHeader")}>
              Mobile shopping
            </div>
            <div className={cx("shopping__optionItemBody")}>
              Vitae adipiscing tu enean ligula nibhmolestie id viverra dapilo
              eleifend Aliquam sem conubia
            </div>
          </div>
        </div>
        <div className={cx("shopping__highlight")}>
          Exclusive brands in our store
        </div>
        <div className={cx("shopping__card")}>
          <img
            className={cx("shopping__cardImg")}
            src={images.shopoingIcon1}
            alt="img"
          />
          <div className={cx("shopping__cardItem")}>
            <img
              className={cx("shopping__cardImg")}
              src={images.shopoingIcon2}
              alt="img"
            />
          </div>
          <div className={cx("shopping__cardItem")}>
            <img
              className={cx("shopping__cardImg")}
              src={images.shopoingIcon3}
              alt="img"
            />
          </div>
          <div className={cx("shopping__cardItem")}>
            <img
              className={cx("shopping__cardImg")}
              src={images.shopoingIcon4}
              alt="img"
            />
          </div>
          <div className={cx("shopping__cardItem")}>
            <img
              className={cx("shopping__cardImg")}
              src={images.shopoingIcon5}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
