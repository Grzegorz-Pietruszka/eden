import React from 'react';
import {MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import {navigationURLs} from "../NavigationURL/NavigationURLs";

interface desktopMenu {
    handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const DesktopMenu = ({handleClose}: desktopMenu) => {
        return (
            <>
                {
                    navigationURLs.navbar.map(link => {
                        const {titleURL, pathURL} = link;
                        return (
                            <Link to={pathURL}>
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
