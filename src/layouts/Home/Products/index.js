import React from "react";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles);

function Products() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("product__topRate", "grid", "wide")}>
        <div className={cx("product__topRateTitle")}>Top rated products</div>
        <div className={cx("product__topRateDesc")}>Best choice</div>
        <div className={cx("product__topRateItem")}>
          <div className={cx("product__topRateItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic5.webp"
              price="$2,000.00 – $3,000.00"
              name="BeTV1"
              star="3"
            />
          </div>
          <div className={cx("product__topRateItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic7.webp"
              sale
              price="$68.99"
              star="4"
              name="BeMouse1"
            />
          </div>
          <div className={cx("product__topRateItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic17.webp"
              price="$430.00"
              star="5"
              name="BeHeadphones2"
              priceHidden="$450.00"
            />
          </div>
        </div>
      </div>
      <div className={cx("product__SpecialOffer", "grid", "wide")}>
        <div>
          <img
            className={cx("product__SpecialOfferImg")}
            src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-home-pic1.webp"
            alt="img"
          />
        </div>

        <div className={cx("product__newProductInfo")}>
          <div className={cx("product__newProductInfoHeader")}>
            Special offer
          </div>
          <div className={cx("product__newProductInfoDesc")}>
            BePhone 12 Pro
          </div>
          <div className={cx("product__newProductInfoTime")}>
            <div className={cx("product__newProductInfoTimeItem")}>
              <div className={cx("product__newProductInfoTimeItemNumber")}>
                00
              </div>
              <div className={cx("product__newProductInfoTimeItemDesc")}>
                days
              </div>
            </div>
            <div className={cx("product__newProductInfoTimeItem")}>
              <div className={cx("product__newProductInfoTimeItemNumber")}>
                00
              </div>
              <div className={cx("product__newProductInfoTimeItemDesc")}>
                hours
              </div>
            </div>
            <div className={cx("product__newProductInfoTimeItem")}>
              <div className={cx("product__newProductInfoTimeItemNumber")}>
                00
              </div>
              <div className={cx("product__newProductInfoTimeItemDesc")}>
                minutes
              </div>
            </div>
            <div className={cx("product__newProductInfoTimeItem")}>
              <div className={cx("product__newProductInfoTimeItemNumber")}>
                00
              </div>
              <div className={cx("product__newProductInfoTimeItemDesc")}>
                seconds
              </div>
            </div>
          </div>
          <div className={cx("product__newProductInfoName")}>
            BePhone 12 Pro
          </div>
          <div className={cx("product__newProductInfoPrice")}>299$ USD</div>
          <button className={cx("product__newProductInfoBtn")}>Buy now</button>
        </div>
      </div>
      <div className={cx("product__new", "grid", "wide")}>
        <div className={cx("product__newHeader")}>Our newest products</div>
        <div className={cx("product__newDesc")}>Best choice</div>
        <div className={cx("product__newItem")}>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp"
              price="$2,500.00 – $5,300.00"
              name="BeNotebook2"
              star="5"
              sale
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic17-800x800.webp"
              price="$430.00"
              name="BeHeadphones2"
              star="5"
              priceHidden="$450.00"
              sale
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic16.webp"
              price="$220.00 – $320.00"
              name="BeSmartphone2"
              star="4"
              sale
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic15-800x800.webp"
              price="$118.00 – $180.00"
              name="BeSmartWatch3"
              star="5"
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic14-800x800.webp"
              price="$320.00 – $480.00"
              name="BeTablet2"
              star="5"
              sale
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic13-800x800.webp"
              price="$150.00 – $250.00"
              name="BeBeSmartWatch2TV1"
              star="4"
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic12-800x800.webp"
              price="$2,000.00 – $3,000.00"
              name="BeTV3"
              star="3"
              sale
            />
          </div>
          <div className={cx("product__newItemSub")}>
            <ProductItem
              src="https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic11-800x800.webp"
              price="$2,250.00 – $2,550.00"
              name="BePC1"
              star="5"
              sale
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
