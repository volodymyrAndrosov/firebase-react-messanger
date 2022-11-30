import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const LoginPage = () => {

  return (
    <Container disableGutters >
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
            <Button variant='outlined'>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
};

export default LoginPage;