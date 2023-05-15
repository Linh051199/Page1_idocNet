import React from "react";
import classNames from "classnames/bind";

import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("contact", "grid", "wide")}>
        <div className={cx("contact__title")}>
          <div className={cx("contact__titleDecs")}>
            Sign up for the newsletter
          </div>
          <div className={cx("contact__titleHighlight")}>
            Receive a{" "}
            <span className={cx("contact__titleHighlightPercent")}>10%</span>{" "}
            discount on your purchases
          </div>
          <div className={cx("contact__titleChecked")}>
            <div className={cx("contact__titleCheckedItem")}>
              <i
                className="fa-solid fa-check"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "3px",
                  marginRight: "10px",
                }}
              ></i>
              Varius eget ultricies
            </div>
            <div className={cx("contact__titleCheckedItem")}>
              <i
                className="fa-solid fa-check"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "3px",
                  marginRight: "10px",
                }}
              ></i>
              Suspendisse nunc
            </div>
          </div>
        </div>
        <div className={cx("contact__form")}>
          <div className={cx("contact__formTitle")}>Join our newsletter</div>
          <input
            className={cx("contact__formInput")}
            placeholder="*Name"
          ></input>
          <input
            className={cx("contact__formInput")}
            placeholder="*Your e-mail"
          ></input>
          <button className={cx("contact__formBtn")}>Subcribe</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
