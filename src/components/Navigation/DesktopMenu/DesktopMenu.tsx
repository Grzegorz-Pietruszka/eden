import React from 'react';
import {MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import {navigationURLs} from "../NavigationURL/NavigationURLs";

interface desktopMenuProps {
    handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const DesktopMenu = ({handleClose}: desktopMenuProps) => {
        return (
            <>
                {
                    navigationURLs.navbar.map((link, index) => {
                        const {titleURL, pathURL} = link;
                        return (
                            <Link to={pathURL} key={index}>
                                <MenuItem onClick={handleClose}>{titleURL}</MenuItem>
                            </Link>
                        )
                    })
                }
            </>
        );
    }
;

export default DesktopMenu;
