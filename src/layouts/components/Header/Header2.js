import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
function Header2() {
  const [showMenuComputer, setShowMenuComputer] = useState(false);
  const [showMenuSmartPhones, setShowMenuSmartPhones] = useState(false);

  const dataComputer = {
    data: ["PC's", "Laptops", "Notebooks", "PC Accessories"],
    imgHidden: images.laptopHidden,
    title: "Computer",
    desc: "Customers choice",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp",
  };
  const dataSmartPhone = {
    data: ["1", "2", "3", "PC 4"],
    imgHidden: images.laptopHidden,
    title: "Computer",
    desc: "Customers choice",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp",
  };

  const handldeMouseOverComouter = (e) => {
    console.log(e.target.accessKey);
    setShowMenuComputer(true);
    setShowMenuSmartPhones(false);
  };
  const handldeMouseOverSmartPhones = (e) => {
    console.log(e.target.accessKey);
    setShowMenuComputer(false);
    setShowMenuSmartPhones(true);
  };
  const handldeMouseLeave = (e) => {
    // setShowMenuItem(false);
  };
  return (
    <div className={cx("header__2")}>
      <div className={cx("header__2-des", "grid", "wide")}>
        <div className={cx("header__2-title")}>
          <div className={cx("header__2-title-logo")}>
            <img src={images.logo} alt="img" />
          </div>

          <div className={cx("header__2-title-search")}>
            <span className={cx("header__2-title-searchIcon")}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className={cx("header__2-title-searchInput")}
              type="text"
              placeholder="Enter your search"
            ></input>
          </div>

          <div className={cx("header__2-title-contact")}>
            <div className={cx("header__2-title-contactItem")}>
              <div className={cx("header__2-title-ctIcon")}>
                <img src={images.headerIconCall} alt="img" />
              </div>
              <div className={cx("header__2-title-ctInfo")}>
                <div className={cx("header__2-title-ctInfoTitle")}>
                  Support 24/7
                </div>
                <div className={cx("header__2-title-ctInfoDesc")}>
                  +61 (0) 3 8376 6284
                </div>
              </div>
            </div>
            <div className={cx("header__2-title-contactItem")}>
              <div className={cx("header__2-title-ctIcon")}>
                <img src={images.headerIconUser} alt="img" />
              </div>
              <div className={cx("header__2-title-ctInfo")}>
                <div className={cx("header__2-title-ctInfoTitle")}>Login</div>
                <div className={cx("header__2-title-ctInfoDesc")}>
                  or register
                </div>
              </div>
            </div>
            <div className={cx("header__2-title-contactItem")}>
              <div className={cx("header__2-title-ctIcon")}>
                <img src={images.headerIconCart} alt="img" />
              </div>
              <div className={cx("header__2-title-ctInfo")}>
                <div className={cx("header__2-title-ctInfoTitle")}>Your</div>
                <div className={cx("header__2-title-ctInfoDesc")}>cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("header__2-nav")}>
          <div>home</div>
          <ul className={cx("header__2-menu")}>
            <li className={cx("header__2-menuItem")}>
              <div
                onMouseOver={handldeMouseOverComouter}
                onMouseLeave={handldeMouseLeave}
              >
                Computers
              </div>
              <ul>
                <li>PC's</li>
                <li>Laptops</li>
                <li>Notebooks</li>
                <li>PC Accessories</li>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <div
                onMouseOver={handldeMouseOverSmartPhones}
                onMouseLeave={handldeMouseLeave}
              >
                SmartPhones
              </div>
              <ul className={cx("header__2-menuItemInfo")}>
                <div>
                  <li>5G phones</li>
                  <li>Phone Accessories</li>
                  <li>Prepaid phones</li>
                  <li>Unlocked phones</li>
                </div>
                <div>
                  <img
                    className="header__2-menuItemImgDevice"
                    src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp"
                    alt="img"
                    width="200px"
                    height="200px"
                  ></img>
                </div>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <span>Watches</span>
              <ul>
                <li>Fitness trackers</li>
                <li>Smart watches</li>
                <li>Smartwatch accessories</li>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <span>TV/Audio</span>
              <ul>
                <li>Earphones</li>
                <li>Headphones</li>
                <li>Smart TV</li>
                <li>TV Accessories</li>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <span>Tablets</span>
              <ul>
                <li>Ebook-Reader</li>
                <li>Kids Tablets</li>
                <li>Tablet accessories</li>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <span>Gaming</span>
              <ul>
                <li>Audio</li>
                <li>Gaming accesories</li>
                <li>Gaming devices</li>
                <li>Gaming displays</li>
              </ul>
            </li>
            <li className={cx("header__2-menuItem")}>
              <span>View all</span>
            </li>
          </ul>
        </div>
        {showMenuComputer && (
          <MenuItem
            data={dataComputer}
            setShowMenuComputer={setShowMenuComputer}
            setShowMenuSmartPhones={setShowMenuSmartPhones}
          />
        )}
        {showMenuSmartPhones && (
          <MenuItem
            data={dataSmartPhone}
            setShowMenuSmartPhones={setShowMenuSmartPhones}
            setShowMenuComputer={setShowMenuComputer}
          />
        )}
      </div>
    </div>
  );
}

export default Header2;
