import React from "react";
import classNames from "classnames/bind";

import styles from "./About.module.scss";

const cx = classNames.bind(styles);
function About() {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("about", "grid", "wide")}>
        <div className={cx("about__item1")}>
          <div className={cx("about__itemHeaderHighlight")}>
            Pellentesque imperdiet enim eget velit justo, dictum, habitant.
          </div>
          <div className={cx("about__itemBody")}>
            Gravida id in cras in faucibus. Quis rhoncus dignissim leo, velit,
            pharetra duis lacus fames morbi. Odio potenti congue commodo,
            feugiat ultrices. Vitae duis massa nisl pellentesque vitae et, nisi
            amet, lectus. Massa aliquet felis non nisl.
          </div>
        </div>
        <div className={cx("about__item2")}>
          <div className={cx("about__itemHeader")}>About the be shop</div>
          <div className={cx("about__itemBody")}>
            Metus libero nec nisi nibh bibendum curabitur ante bibendum
            curabitur dictumst magna nam ligula vestibulum curabitur dapibus
            lacinia potenti sagittis est iaculis mauris vel conubia placerat
            vulputate auctor elementum mattis lacus
          </div>
        </div>
        <div className={cx("about__item3")}>
          <div className={cx("about__itemHeader")}>Our Journey</div>
          <div className={cx("about__itemBody")}>
            Pretium est donec quis at feugiat semper euismod dignissim aliquam
            vestibulum. Commodo consectetur leo senectus mollis praesent. Mus
            interdum dolor imperdiet dis malesuada. Facilisi senectus lobortis
            congue neque egestas.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
