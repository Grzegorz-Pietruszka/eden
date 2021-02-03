import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileMenu from "./MobileMenu/MobileMenu";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {navigationURLs} from "./NavigationURL/NavigationURLs";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(
    createStyles({
            root: {
                flexGrow: 1
            },
            title: {
                flexGrow: 1,
            },
        }
    )
)

const Navigation = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Eden
                    </Typography>
                    {isMobile ?
                        <MobileMenu anchorEl={anchorEl}
                                    handleClose={handleClose}
                                    handleMenu={handleMenu}
                                    open={open}
                        />
                        :
                        [...navigationURLs.navbar].map(link => {
                            const {titleURL, pathURL} = link;
                            return (
                                <Link to={pathURL}>
                                    <MenuItem onClick={handleClose}>{titleURL}</MenuItem>
                                </Link>
                            )
                        })
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;
