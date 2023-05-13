import React from "react";
import classNames from "classnames/bind";

import styles from "./Outstanding.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function Outstanding() {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("outstanding__item")}>
        <img src={images.outstandingFreeShip} alt="img" />
        <div className={cx("outstanding__itemTitle")}>Free Shipping</div>
        <div className={cx("outstanding__itemdesc")}>
          For all orders over $200
        </div>
      </div>
      <div className={cx("outstanding__item")}>
        <img src={images.outstandingDaily} alt="img" />
        <div className={cx("outstanding__itemTitle")}>Daily Promotions</div>
        <div className={cx("outstanding__itemdesc")}>Discount up to 70%</div>
      </div>
      <div className={cx("outstanding__item")}>
        <img src={images.outstandingFreeReturns} alt="img" />
        <div className={cx("outstanding__itemTitle")}>Free returns</div>
        <div className={cx("outstanding__itemdesc")}>
          Return for up to 7 days
        </div>
      </div>
      <div className={cx("outstanding__item")}>
        <img src={images.outstandingSecure} alt="img" />
        <div className={cx("outstanding__itemTitle")}>Secure payments</div>
        <div className={cx("outstanding__itemdesc")}>Security guarantee</div>
      </div>
      <div className={cx("outstanding__item")}>
        <img src={images.outstandingGift} alt="img" />
        <div className={cx("outstanding__itemTitle")}>Gifts for members</div>
        <div className={cx("outstanding__itemdesc")}>Bonuses for members</div>
      </div>
    </div>
  );
}

export default Outstanding;
