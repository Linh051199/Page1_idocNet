import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Title.module.scss";
import data from "./dataTitle";

const cx = classNames.bind(styles);

function Title() {
  const [showTitle, setShowTitle] = useState(true);
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const handleShowTitle = () => {
    setShowTitle(false);
  };
  return (
    <>
      {showTitle && (
        <div className={cx("wrapper", "grid")}>
          <div className={cx("title")}>
            <div className={cx("title__desc")}>{data[currentState].text}</div>
            <div className={cx("title__closeBtn")} onClick={handleShowTitle}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Title;
