import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/routeKeys';

const Navbar = () => {
    const isUser = true;

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent="flex-end">
                    {isUser ?
                        <Button variant="contained">Log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button>Log in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;