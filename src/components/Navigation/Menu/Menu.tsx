import React from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

interface MenuProps {
    isMobile: boolean,
    anchorEl: HTMLElement | null,
    open: boolean,
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleClose: () => void
}

const Menu = ({isMobile, anchorEl, open, handleMenu, handleClose}: MenuProps) => {
    if (isMobile) {
        return <MobileMenu anchorEl={anchorEl}
                           open={open}
                           handleMenu={handleMenu}
                           handleClose={handleClose}/>
    } else {
        handleClose();
        return <DesktopMenu />
    }
}

export default Menu;
