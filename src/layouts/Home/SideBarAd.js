import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import images from "../../assets/images";
import SideBarAdItem from "./SideBarAdItem";

const cx = classNames.bind(styles);

function SideBarAd() {
  const [showSideBarAdHidden, setShowSideBarAdHidden] = useState(false);

  const handleOnClick = () => {
    setShowSideBarAdHidden(!showSideBarAdHidden);
  };
  return (
    <div className={cx("sideBarAdContainer")}>
      <div className={cx("sideBarAdShow")}>
        <div className={cx("sideBarAd")}>
          <div className={cx("sideBarAdItem1")}>
            <div className={cx("sideBarItem1__desc")} onClick={handleOnClick}>
              <span className={cx("sideBarAdItem1Highlight")}>650+</span> <br />
              websites
            </div>
          </div>
          <div className={cx("sideBarAdItem2")}>
            <img
              className={cx("sideBarAdItem2Icon")}
              src={images.buy}
              alt="img"
            />
            <br /> Buy now
          </div>
        </div>
      </div>
      {showSideBarAdHidden && (
        <div className={cx("sideBarAdHidden")}>
          <div className={cx("sideBarAdHiddenHeader")}>
            <div className={cx("hiddenHeader__title")}>Be</div>
            <div className={cx("hiddenHeader__desc")}>
              The Biggest
              <span className={cx("hiddenHeader__decsHighlight")}>
                WordPress
              </span>
              <br /> &
              <span className={cx("hiddenHeader__decsHighlight")}>
                WooCommerce
              </span>
              Theme
            </div>
          </div>
          <div className={cx("sideBarAdHiddenBody")}>
            <div className={cx("hiddenBodyList")}>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/theme.jpg"
                  content="Default"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/bethemestore2.jpg"
                  content="Default store 2"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/bethemestore.jpg"
                  content="Default store 2"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/lingerie.jpg"
                  content="Lingerie"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/eco4.jpg"
                  content="Eco 4"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/furniturestore2.jpg"
                  content="Furniture Store 2"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/agency8.jpg"
                  content="Agency 8"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/recipes3.jpg"
                  content="Recipes 3"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/cosmetics3.jpg"
                  content="Cosmetics 3"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/wedding3.jpg"
                  content="Weding 3"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/estate4.jpg"
                  content="Estate 4"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/burger3.jpg"
                  content="Burger 3"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/clothingstore2.jpg"
                  content="Clothing Store 2"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/doctor.jpg"
                  content="Doctor"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/business6.jpg"
                  content="Business 6"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/biker4.jpg"
                  content="Biker 4"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/vr.jpg"
                  content="Vr"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/furniturestore.jpg"
                  content="Furnituresore"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/marketing2.jpg"
                  content="Marketing 2"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/carwash3.jpg"
                  content="Carwash 3"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/renovate5.jpg"
                  content="Renovate 5"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/language4.jpg"
                  content="Language 4"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/pregnancy.jpg"
                  content="Pregnancy"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/jeweler2.jpg"
                  content="Jeweler"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/coaching3.jpg"
                  content="Coaching"
                />
              </div>
              <div className={cx("hiddenBodyItem")}>
                <SideBarAdItem
                  src="https://muffingroup.com/themeforest_images/betheme/demo/lottie.jpg"
                  content="Lottie"
                />
              </div>
            </div>
          </div>
          <div className={cx("sideBarAdHiddenFooter")}>
            <div className={cx("footerDecs")}>See all websites</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBarAd;
