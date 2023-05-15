import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import { Rate } from "antd";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function ProductItem({ src, name, sale, price, priceHidden, star }) {
  // const [showOption, setShowOption] = useState(false);

  // const handleOnMouseOver = () => {
  //   setShowOption(true);
  // };
  // const handleOnMouseLeave = () => {
  //   setShowOption(false);
  // };
  // onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}
  return (
    <div className={cx("productItem")}>
      <div>
        <img className={cx("productItem__img")} src={src} alt="img" />
      </div>
      <div className={cx("productItem__info")}>
        <div className={cx("productItem__infoName")}>{name}</div>
        <div className={cx("productItem__rate")}>
          <Rate
            disabled={true}
            className={cx("productItem__infoStar")}
            defaultValue={star}
          />
        </div>
        <div className={cx(".productItem__infoPrice")}>
          {priceHidden && (
            <div className={cx("productItem__infoPriceHidden")}>
              {priceHidden}
            </div>
          )}
          {price}
        </div>

        <div className={cx("productItem__option")}>
          <div className={cx("productItem__optionItem")}>
            <i className="fa-solid fa-link" style={{ fontSize: "16px" }}></i>
          </div>
          <div className={cx("productItem__optionItem")}>
            <i className="fa-regular fa-heart" style={{ fontSize: "16px" }}></i>
          </div>
          <div className={cx("productItem__optionItem")}>
            <i
              className="fa-solid fa-maximize"
              style={{ fontSize: "16px" }}
            ></i>
          </div>
        </div>

        {sale && <div className={cx("productItem__infoSale")}>ON SALE</div>}
      </div>
    </div>
  );
}

export default ProductItem;
