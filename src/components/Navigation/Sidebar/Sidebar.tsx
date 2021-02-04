import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {navigationURLs} from "../NavigationURL/NavigationURLs";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            position: 'absolute'
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
        listWrapper: {
            marginTop: '70px'
        }
    }),
);

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Divider/>
                <div className={classes.toolbar}>
                    <List className={classes.listWrapper}>
                        {navigationURLs.sidebar.map((link, index) => {
                            const {pathURL, titleURL} = link;
                            return (
                                <ListItem button key={index}>
                                    <Link to={pathURL}>
                                        <ListItemIcon><InboxIcon/>{titleURL}</ListItemIcon>
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Sidebar;
