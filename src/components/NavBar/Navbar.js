import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/routeKeys';
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";


const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    const onLogout = () => auth.signOut();

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent="flex-end">
                    {user ?
                        <Button onClick={onLogout} variant="contained" >Log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE} >
                            <Button variant="contained" >Log in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;