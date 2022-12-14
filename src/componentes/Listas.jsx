import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Listas = () => {
    return (
        <div>
        <List component="nav">
        <ListItem button>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="mi elemento 1" />
        </ListItem>
        </List>

        <Divider />

        <List component="nav">
        <ListItem button>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="mi elemento 2" />
        </ListItem>
        </List>
        </div>
    )
}
export default Listas;