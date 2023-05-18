import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("footer__container", "grid", "widex")}>
        <div className={cx("footer__1")}>
          <div className={cx("footer__contact")}>
            <div className={cx("footer__contactPhone")}>
              <div className={cx("footer__contactPhoneIcon")}>
                <img
                  className={cx("footer__contactPhoneIconImg")}
                  src={images.headerIconCall}
                  height="40"
                  width="40"
                  alt="img"
                />
              </div>
              <div className={cx("footer__contactPhoneInfo")}>
                <div className={cx("footer__contactPhoneInfoTitle")}>
                  Got questions? Call us 24/7
                </div>
                <div className={cx("footer__contactPhoneInfoPhone")}>
                  +61(0) 383 766 284
                </div>
              </div>
            </div>
            <div className={cx("footer__contactAddr")}>
              <div>
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </div>
            </div>
            <div className={cx("footer__contactIcon")}>
              <div className={cx("footer__contactIconItem")}>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className={cx("footer__contactIconItem")}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className={cx("footer__contactIconItem")}>
                <i className="fa-brands fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div className={cx("footer__contactInfo")}>
            <div className={cx("footer__contactList")}>
              <div className={cx("footer__contactListTitle")}>
                Customer service
              </div>
              <div className={cx("footer__contactListItem")}>Orders</div>
              <div className={cx("footer__contactListItem")}>Downloads</div>
              <div className={cx("footer__contactListItem")}>Addresses</div>
              <div className={cx("footer__contactListItem")}>
                Account details
              </div>
              <div className={cx("footer__contactListItem")}>Lost password</div>
            </div>
            <div className={cx("footer__contactList")}>
              <div className={cx("footer__contactListTitle")}>Useful links</div>

              <div className={cx("footer__contactListItem")}>Features</div>
              <div className={cx("footer__contactListItem")}>About</div>
              <div className={cx("footer__contactListItem")}>Contact</div>
              <div className={cx("footer__contactListItem")}>Teams of uses</div>
              <div className={cx("footer__contactListItem")}>Wishlist</div>
            </div>
            <div className={cx("footer__contactList")}>
              <div className={cx("footer__contactListTitle")}>Delivery</div>

              <div className={cx("footer__contactListItem")}>How it Works</div>
              <div className={cx("footer__contactListItem")}>Free Delivery</div>
              <div className={cx("footer__contactListItem")}>FAQ</div>
            </div>
          </div>
        </div>

        <div className={cx("footer__author")}>
          <div className={cx("footer__authorTitle")}>
            © 2022 Betheme by{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Muffin group
            </a>{" "}
            | All Rights Reserved | Powered by{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              WordPress
            </a>
          </div>
          <div className={cx("footer__authorIcon")}>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.headerVisa} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon1} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon2} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon3} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon4} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon5} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon6} width="50px" alt="img" />
            </div>
            <div className={cx("footer__authorIconItem")}>
              <img src={images.footerIcon7} width="50px" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
