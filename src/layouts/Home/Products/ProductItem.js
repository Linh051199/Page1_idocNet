import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import { Rate } from "antd";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);

function ProductItem({ src, name, sale, price, priceHidden, star }) {
  const [showOption, setShowOption] = useState(false);
  const handleOnMouseOverImg = () => {
    setShowOption(true);
  };

  const handleOnMouseLeaveImg = () => {
    setShowOption(false);
  };

  return (
    <div className={cx("productItem")}>
      <div
        className={cx("productItem__image")}
        onMouseOver={handleOnMouseOverImg}
        onMouseLeave={handleOnMouseLeaveImg}
      >
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
        <div className={cx("productItem__infoPrice")}>
          {priceHidden && (
            <div className={cx("productItem__infoPriceHidden")}>
              {priceHidden}
            </div>
          )}
          {price}
        </div>
        {showOption && (
          <div
            className={cx("productItem__option")}
            onMouseOver={handleOnMouseOverImg}
            onMouseLeave={handleOnMouseLeaveImg}
          >
            <Tippy content="View product" placement="left">
              <div className={cx("productItem__optionItem")}>
                <i
                  className="fa-solid fa-link"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Add to wishlish" placement="left">
              <div className={cx("productItem__optionItem")}>
                <i
                  className="fa-regular fa-heart"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Preview" placement="left">
              <div className={cx("productItem__optionItem")}>
                <i
                  className="fa-solid fa-maximize"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
          </div>
        )}

        {sale && <div className={cx("productItem__infoSale")}>ON SALE</div>}
      </div>
    </div>
  );
}

export default ProductItem;
