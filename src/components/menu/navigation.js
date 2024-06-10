import React, {useRef, useState, useEffect} from "react";
import Menu from "./menu";
import * as styles from "./menu.module.scss"
import BurgerIcon from "../../assets/svg/menu.inline.svg"


const Navigation = (props) => {
    const menuRef = useRef(null)
    const [openState, setOpen] = useState(false)
    useEffect(() => {
        document.getElementById(props.menuSlug)?.focus()
    })

    const OpenMenu = () => {
        setOpen(true)

    }

    return (
        <>
            <button
                onClick={OpenMenu}
                aria-label={"Open the main menu"}
                className={styles.burgerMenu}
            >
                <BurgerIcon />
            </button>
            {openState && <Menu menuSlug={props.menuSlug} setOpen={setOpen} ref={menuRef} />}
        </>
    )
}
export default Navigation