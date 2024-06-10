import React from "react"
import Logo from "../../assets/svg/cb-logo-bw.inline.svg";

import * as styles from "./home-banner.module.scss"

const HomeBanner = () => {
    return(
        <div className={styles.homeBanner}>
            <div className={styles.homeBannerInner}>
                <Logo/>
            </div>
        </div>
    )
}

export default HomeBanner