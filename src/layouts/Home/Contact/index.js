import React, { useState } from "react";
import classNames from "classnames/bind";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validateMsg, setValidateMsg] = useState({});

  const handleOnChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleOnChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = "Please enter your name!";
    }
    if (isEmpty(email)) {
      msg.email = "Please enter your email!";
    } else if (!isEmail(email)) {
      msg.email = "Your email is not valid, please try again!";
    }

    setValidateMsg(msg);

    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleOnSubmit = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };
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
          <div className={cx("contact__fromFormInput")}>
            <input
              type="text"
              className={cx("contact__formInput")}
              placeholder="*Name"
              onChange={handleOnChangeName}
            ></input>
            <p className={cx("inputMsg", "inputMsgName")}>{validateMsg.name}</p>
          </div>
          <div className={cx("contact__fromFormInput")}>
            <input
              type="email"
              className={cx("contact__formInput")}
              placeholder="*Your e-mail"
              onChange={handleOnChangeEmail}
            ></input>
            <p className={cx("inputMsg", "inputMsgEmail")}>
              {validateMsg.email}
            </p>
          </div>
          <button className={cx("contact__formBtn")} onClick={handleOnSubmit}>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
