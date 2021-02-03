import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {navigationURLs} from "../NavigationURL/NavigationURLs";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface MobileMenuProps {
    anchorEl: HTMLElement | null,
    open: boolean,
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleClose: (event: React.MouseEvent<HTMLElement>) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        }
    }),
);

const MobileMenu = ({anchorEl, open, handleMenu, handleClose}: MobileMenuProps) => {
    const classes = useStyles();

    return (
        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={handleMenu}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {[...navigationURLs.navbar, ...navigationURLs.sidebar].map(link => {
                    const {titleURL, pathURL} = link;
                    return (
                        <Link to={pathURL}>
                            <MenuItem onClick={handleClose}>{titleURL}</MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </div>
    );
};

export default MobileMenu;
