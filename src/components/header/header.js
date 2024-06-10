import React from "react"
import {Link} from "gatsby";
import TextLogo from "../../assets/svg/cb-logo-textonly.inline.svg";
import Navigation from "../menu/navigation";
import HomeBanner from "../home-banner/home-banner";
import * as styles from "./header.module.scss"

const Header = (props) => {
  const menuSlug = props.menuSlug ? props.menuSlug : "main-menu"
  const onHomePage = props.isHomePage
  return (
    <>
      {onHomePage && <HomeBanner />}
      <header className={styles.globalHeader}>
        <div className={styles.headerInner}>
          <div className={styles.textLogo}>
            <Link to="/"><TextLogo/></Link>
          </div>
          <Navigation menuSlug={menuSlug}/>
        </div>
      </header>
    </>
  )
}

export default Header