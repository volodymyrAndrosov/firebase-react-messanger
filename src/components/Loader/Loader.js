import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Loader = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Grid container
                style={{ height: '100vh', }}
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    direction='column'
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Loader;