import React from "react";
import classNames from "classnames/bind";
import styles from "./NewBePhone.module.scss";

const cx = classNames.bind(styles);

function NewBePhone() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("question")}>Why BeShop?</div>
      <div className={cx("header")}>
        New <span className={cx("header__highlight")}>BePhone Pro</span>.
      </div>
      <div className={cx("newBePhone", "grid", "wide")}>
        <div className={cx("newBePhone__item1")}>
          <div className={cx("newBePhone__itemTitle")}>
            <div className={cx("newBePhone__itemTitleHeader")}>
              Guarantee of originality
            </div>
            <div className={cx("newBePhone__itemTitleBody")}>
              Sapien fermentum diam egestas tellus commodo. Scelerisque.
            </div>
            <div className={cx("newBePhone__itemTitleShow")}>
              Show me products
            </div>
          </div>
          <div>
            <img
              className={cx("newBePhone__itemImg")}
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-pic3.webp"
              alt="img"
            />
          </div>
        </div>
        <div className={cx("newBePhone__item2")}>
          <div className={cx("newBePhone__itemTitle")}>
            <div className={cx("newBePhone__itemTitleHeader")}>
              Safe payments
            </div>
            <div className={cx("newBePhone__itemTitleBody")}>
              Sapien fermentum diam egestas tellus commodo. Scelerisque.
            </div>
            <div className={cx("newBePhone__itemTitleShow")}>
              Show me products
            </div>
          </div>
          <div>
            <img
              className={cx("newBePhone__itemImg")}
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-pic2.webp"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBePhone;
