import React from "react";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import { Rate } from "antd";

const cx = classNames.bind(styles);

function ProductItem({ src, name, sale, price, priceHidden, star }) {
  return (
    <div className={cx("productItem")}>
      <div>
        <img className={cx("productItem__img")} src={src} alt="img" />
      </div>
      <div className={cx("productItem__info")}>
        <div className={cx("productItem__infoName")}>{name}</div>
        <div>
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

        {sale && <div className={cx("productItem__infoSale")}>ON SALE</div>}
      </div>
    </div>
  );
}

export default ProductItem;
