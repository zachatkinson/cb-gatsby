import React from "react"
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({isHomePage, children}) => {
  return (

    <div className="global-wrapper" data-is-root-path={isHomePage}>

      <Header isHomePage={isHomePage} menuSlug={"main-menu"}/>
      <div className={"main-wrapper"}>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
