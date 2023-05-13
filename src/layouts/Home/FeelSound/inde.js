import React from "react";
import classNames from "classnames/bind";

import styles from "./FeelSound.module.scss";
import ProductItem from "../Products/ProductItem";

const cx = classNames.bind(styles);

function FeelSound() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("sound", "grid", "wide")}>
        <div className={cx("sound__title")}>
          <div className={cx("sound__titleHeader")}>Feel the Sound</div>
          <div className={cx("sound__titleDesc")}>Category products</div>
        </div>
        <div className={cx("sound__item")}>
          <div className={cx("sound__itemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic1-800x800.webp"
              price="$299.00"
              name="BeHeadphones1"
              star="4"
            />
          </div>
          <div className={cx("sound__itemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic3-800x800.webp"
              price="$105.00"
              name="BeEarphones1"
              star="5"
              priceHidden="$125.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelSound;
