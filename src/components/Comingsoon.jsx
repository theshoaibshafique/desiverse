import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import './comingsoon.css';
import RegisterForm from './RegisterForm';
const Comingsoon = ({ currentAccount, connectWalletAction }) => {
  const [register, setRegister] = useState(false);

  return (
    <div className="soon">
      <img className="soon-img-top" src="desi-top.png" alt="" />

      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <img src="desiverse-logo.png" alt="logo" />
            <p className="soon-text">Coming Soon</p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {register ? (
              <RegisterForm
                currentAccount={currentAccount}
                connectWalletAction={connectWalletAction}
              />
            ) : (
              <button
                className="reg-btn"
                onClick={() => {
                  setRegister(true);
                }}
              >
                Register
              </button>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comingsoon;
