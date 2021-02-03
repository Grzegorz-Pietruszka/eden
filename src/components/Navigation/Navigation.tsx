import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileMenu from "./MobileMenu/MobileMenu";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useMediaQuery, useTheme} from "@material-ui/core";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                flexGrow: 1
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1
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
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Eden
                    </Typography>
                    {isMobile ?
                        <MobileMenu anchorEl={anchorEl}
                                    handleClose={handleClose}
                                    handleMenu={handleMenu}
                                    open={open}/>
                        : <DesktopMenu handleClose={handleClose}/>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;
