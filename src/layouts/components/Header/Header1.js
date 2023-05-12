import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header1() {
  return (
    <div className={cx("header__1")}>
      <div className={cx("header__1-des", "grid", "wide")}>
        <div className={cx("header__1-label")}>
          We ship packages within 24 hours of ordering
        </div>
        <ul className={cx("header__1-nav", "clearFix")}>
          <li className={cx("header__1-navItem")}>
            <span className={cx("header__1-navItem-title")}>
              <div>
                Features <i class="fa-solid fa-chevron-down"></i>
              </div>
            </span>

            <ul className={cx("header__1-nav-Item")}>
              <li>
                <span className={cx("nav-Item-Title")}>
                  Shop Layouts <i class="fa-solid fa-chevron-right"></i>
                </span>
                <ul className={cx("nav2")}>
                  <li className={cx("nav2-item")}>Grid 3 Columns</li>
                  <li className={cx("nav2-item")}>Grid 4 Columns</li>
                  <li className={cx("nav2-item")}>Masonry 3 Column</li>
                  <li className={cx("nav2-item")}>List</li>
                </ul>
              </li>
              <li>
                <span className={cx("nav-Item-Title")}>
                  Single Product Style <i class="fa-solid fa-chevron-right"></i>
                </span>
                <ul className={cx("nav2")}>
                  <li className={cx("nav2-item")}>Default</li>
                  <li className={cx("nav2-item")}>Accordion below image</li>
                  <li className={cx("nav2-item")}>Tabs below image</li>
                  <li className={cx("nav2-item")}>Out of stock</li>
                  <li className={cx("nav2-item")}>On sale</li>
                  <li className={cx("nav2-item")}>Custom template</li>
                </ul>
              </li>
              <li>
                <span className={cx("nav-Item-Title")}>
                  Product gallery styles{" "}
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <ul className={cx("nav2")}>
                  <li className={cx("nav2-item")}>Thumbnails: Bottom Left</li>
                  <li className={cx("nav2-item")}>Thumbnails: Bottom Center</li>
                  <li className={cx("nav2-item")}>Thumbnails: Bottom Right</li>
                  <li className={cx("nav2-item")}>Thumbnails: Left Top</li>
                  <li className={cx("nav2-item")}>Thumbnails: Left Center</li>
                  <li className={cx("nav2-item")}>Thumbnails: Left Bottom</li>
                  <li className={cx("nav2-item")}>Thumbnails: Right Top</li>
                  <li className={cx("nav2-item")}>Thumbnails: Right Center</li>
                </ul>
              </li>
              <li>
                <span className={cx("nav-Item-Title")}>
                  Overlay styles <i class="fa-ssolid fa-chevron-right"></i>
                </span>
                <ul className={cx("nav2")}>
                  <li className={cx("nav2-item")}>Overlay: Bottom Left</li>
                  <li className={cx("nav2-item")}>Overlay: Bottom Center</li>
                  <li className={cx("nav2-item")}>Overlay: Bottom Right</li>
                  <li className={cx("nav2-item")}>Overlay: Left Center</li>
                  <li className={cx("nav2-item")}>Overlay: Left Bottom</li>
                  <li className={cx("nav2-item")}>Overlay: Right Top</li>
                  <li className={cx("nav2-item")}>Overlay: Right Center</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span className={cx("header__1-navItem-title")}>About</span>
          </li>
          <li>
            <span className={cx("header__1-navItem-title")}>Contact</span>
          </li>
          <li>
            <span className={cx("header__1-navItem-title")}>Team of use</span>
          </li>
          <li>
            <span className={cx("header__1-navItem-title")}>Wishlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header1;
