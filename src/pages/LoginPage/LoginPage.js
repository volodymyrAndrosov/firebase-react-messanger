import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Context } from "../../index";
import firebase from "firebase";

const LoginPage = () => {
  const { auth } = useContext(Context);


  const onLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  }

  return (
    <Container disableGutters maxWidth={false}>
      <Grid container
        style={{ height: window.innerHeight - 50, }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid style={{ width: '100%', background: 'lightgray', height: '100%' }}
          container
          alignItems='center'
          justifyContent='center'
          direction='column'
        >
          <Box p={5}>
            <Button onClick={onLogin} variant='outlined'>Log in with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
};

export default LoginPage;