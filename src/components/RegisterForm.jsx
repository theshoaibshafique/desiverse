import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './comingsoon.css';
import { db } from './firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RegisterForm = ({ currentAccount, connectWalletAction }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && email) {
      setSubmitting(true);
      await addDoc(collection(db, 'registeredUsers'), {
        email,
        username,
        walletAdrress: currentAccount || '',
        date: new Date().toLocaleString(),
      });
      setError(false);
      setUsername(null);
      setEmail(null);
      setSubmitting(false);
      setOpen(true);
    } else {
      console.log(error);
      setError(true);
      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        width: { xs: '70%', md: '40%' },
        mt: { xs: '40px' },
      }}
    >
      {currentAccount ? (
        <Box
          sx={{
            border: '3px solid white',
            boxShadow:
              '0px 0px 0px 1px rgb(255, 209, 8),inset 0px 0px 0px 1px rgb(255, 209, 8), 0px 2px 0px 2px rgb(255, 209, 8)',
            borderRadius: '0.3em',
            p: '20px',
            cursor: 'pointer',
            textAlign: 'center',
            fontWeight: '600',
            width: '90%',
          }}
        >
          Wallet Connected
          <Typography
            variant="subtitle2"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {currentAccount}
          </Typography>
        </Box>
      ) : (
        <button className="wallet-connect-btn" onClick={connectWalletAction}>
          Connect Wallet
        </button>
      )}

      <input
        type="text"
        placeholder="username"
        class="retro-input"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email address"
        class="retro-input"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={submitting}
      >
        Submit
      </button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please Fill All Fields
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Registered Succesfully
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
