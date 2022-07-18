import {React} from 'react';
import { AppBar, Toolbar, IconButton, Badge, } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navigation = ({cartAmount}) => {
    
    return (
        <>
            <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="show cart items">
                    <Badge badgeContent={cartAmount} color="primary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Navigation;