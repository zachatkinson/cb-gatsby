import React from "react"

import {Link} from "gatsby";
import {useMenuItems} from "../../hooks/use-menu-items";
import * as styles from "./menu.module.scss"
import CloseIcon from "../../assets/svg/close.inline.svg"

const Menu = (props) => {
    const menuItems = useMenuItems().filter(menuItem => menuItem.item.menu.node.slug === props.menuSlug)
    const keyListener = (e) => {
            //close menu if escape is pressed
            if(e.key === "Escape") {
                props.setOpen(prev => !prev)
            }

    }

    return (
        <button
            className={`${styles.menu} ${props.setOpen ? `${styles.open}` : ""}`}
            onKeyDown={keyListener}
            id={props.menuSlug}
        >
            <button
                onClick={() => props.setOpen(prev => !prev)}
                className={styles.closeButton}
                aria-label={"Close Menu"}
            >
            <CloseIcon />
            </button>
            <nav aria-label={"Menu"}>
                <ul>
                    {menuItems?.map(menuItem => (
                        <li><Link to={menuItem.item.path} tabIndex={"0"}><h1>{menuItem.item.label}</h1></Link></li>
                    ))}
                </ul>
            </nav>
        </button>
    )
}



export default Menu