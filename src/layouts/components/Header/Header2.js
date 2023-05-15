import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
function Header2() {
  const [showMenuComputer, setShowMenuComputer] = useState(false);
  const [showMenuSmartPhones, setShowMenuSmartPhones] = useState(false);
  const [showMenuWatches, setShowMenuWatches] = useState(false);
  const [showMenuTV, setShowMenuTV] = useState(false);
  const [showMenuTablet, setShowMenuTablet] = useState(false);
  const [showMenuGaming, setShowMenuGaming] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const dataComputer = {
    data: ["PC's", "Laptops", "Notebooks", "PC Accessories"],
    imgHidden: images.laptopHidden,
    title: "Computer",
    desc: "Customers choice",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp",
  };
  const dataSmartPhone = {
    data: [
      "5G phones",
      "Phone Accessories",
      "Prepaid phones",
      "Unlocked phones",
    ],
    imgHidden: images.SmartPhoneHidden,
    title: "Smartphones",
    desc: "Our choice",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic16.webp",
  };

  const dataWatches = {
    data: ["Fitness trackers", "Smart watches", "Smartwatch accessories"],
    imgHidden: images.WatchesHidden,
    title: "Watches",
    desc: "Tech Awards",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic10.webp",
  };

  const dataTV = {
    data: ["Earphones", "Headphones", "Smart TV", "TV Accessories"],
    imgHidden: images.TVHidden,
    title: "TV/Audio",
    desc: "Bestseller",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic5.webp",
  };

  const dataTablet = {
    data: ["Ebook-Reader", "Kids Tablets", "Tablet accessories"],
    imgHidden: images.TabletHidden,
    title: "Tablets",
    desc: "Tech Awards",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic8.webp",
  };

  const dataGaming = {
    data: ["Audio", "Gaming accesories", "Gaming devices", "Gaming displays"],
    imgHidden: images.GamingHidden,
    title: "Gaming",
    desc: "Top products",
    imgDevice:
      "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic7.webp",
  };

  const handldeMouseOverComouter = (e) => {
    setShowOverlay(true);
    setShowMenuComputer(true);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };
  const handldeMouseOverSmartPhones = (e) => {
    setShowOverlay(true);

    setShowMenuComputer(false);
    setShowMenuSmartPhones(true);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };
  const handldeMouseOverWatches = (e) => {
    setShowOverlay(true);

    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(true);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };
  const handldeMouseOverTV = (e) => {
    setShowOverlay(true);

    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(true);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };
  const handldeMouseOverTablets = (e) => {
    setShowOverlay(true);

    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(true);
    setShowMenuGaming(false);
  };
  const handldeMouseOverGaming = (e) => {
    setShowOverlay(true);

    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(true);
  };

  const handlOnMouseLeaveHeader2Bottom = () => {
    setShowOverlay(false);
    setShowMenuComputer(false);
    setShowMenuSmartPhones(false);
    setShowMenuWatches(false);
    setShowMenuTV(false);
    setShowMenuTablet(false);
    setShowMenuGaming(false);
  };

  return (
    <div className={cx("header__2")}>
      {showOverlay && <div className={cx("overlay")}></div>}

      <div className={cx("header__2-des", "grid", "wide")}>
        <div className={cx("header__2-title")}>
          <div className={cx("mediaNav")}>
            <label htmlFor="navMedia" className={cx("mediaNavIcon")}>
              <i
                className="fa-solid fa-bars"
                style={{ fontSize: "30px", padding: "10px", color: "#4e56c9" }}
              ></i>
            </label>
            <img
              className={cx("header__2-title-logo")}
              src={images.logo}
              alt="img"
            />
          </div>

          <div className={cx("header__2-title-search")}>
            <span className={cx("header__2-title-searchIcon")}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#2f38bf" }}
              ></i>
            </span>
            <input
              className={cx("header__2-title-searchInput")}
              type="text"
              placeholder="Enter your search"
            ></input>
          </div>

          <div className={cx("header__2-title-contact")}>
            <div className={cx("header__2-title-contactItem", "mediaTablet")}>
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
        <div
          className={cx("header__2-bottom")}
          onMouseLeave={handlOnMouseLeaveHeader2Bottom}
        >
          <div className={cx("header__2-nav")}>
            <ul className={cx("header__2-menu")}>
              <div
                onMouseOver={handldeMouseOverComouter}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconLaptop} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}> Computers </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handldeMouseOverSmartPhones}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconSmartPhone} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}>
                  {" "}
                  SmartPhones{" "}
                </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handldeMouseOverWatches}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconWatches} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}> Watches </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handldeMouseOverTV}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconTV} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}> TV/Audio </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handldeMouseOverTablets}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconTablet} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}> Tablets </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handldeMouseOverGaming}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconGaming} alt="img" />
                </div>
                <div className={cx("header__2-menuItemName")}> Gaming </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div
                onMouseOver={handlOnMouseLeaveHeader2Bottom}
                className={cx("header__2-menuItem")}
              >
                <div>
                  <img src={images.menuIconViewAll} alt="img" />
                </div>
                <span className={cx("header__2-menuItemName")}>View all</span>
              </div>
            </ul>
          </div>
          <div className={cx("header__2-navSub")}>
            {showMenuComputer && (
              <MenuItem
                data={dataComputer}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
            {showMenuSmartPhones && (
              <MenuItem
                data={dataSmartPhone}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
            {showMenuWatches && (
              <MenuItem
                data={dataWatches}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
            {showMenuTV && (
              <MenuItem
                data={dataTV}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
            {showMenuTablet && (
              <MenuItem
                data={dataTablet}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
            {showMenuGaming && (
              <MenuItem
                data={dataGaming}
                setShowMenuComputer={setShowMenuComputer}
                setShowMenuSmartPhones={setShowMenuSmartPhones}
                setShowMenuWatches={setShowMenuWatches}
                setShowMenuTV={setShowMenuTV}
                setShowMenuTablet={setShowMenuTablet}
                setShowMenuGaming={setShowMenuGaming}
              />
            )}
          </div>
        </div>
      </div>
      <input
        hidden
        className={cx("navMediaInput")}
        type="checkbox"
        id="navMedia"
      />
      <div className={cx("navMedia")}>
        <label htmlFor="navMedia" className={cx("navMediaBtnClose")}>
          <i className="fa-solid fa-xmark"></i>
        </label>
        <div className={cx("navMediaList")}>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconLaptop} alt="img" />
            </div>
            Computers
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconSmartPhone} alt="img" />
            </div>
            SmartPhones
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconWatches} alt="img" />
            </div>
            Watches
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconTV} alt="img" />
            </div>
            TV/Audio
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconTablet} alt="img" />
            </div>
            Tablets
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconGaming} alt="img" />
            </div>
            Gaming
          </div>
          <div className={cx("navMediaItem")}>
            <div className={cx("navMediaItemIcon")}>
              <img src={images.menuIconViewAll} alt="img" />
            </div>
            View all
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
