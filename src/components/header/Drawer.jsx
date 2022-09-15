import React from 'react';
import './header.css';
import Drawer from '@mui/material/Drawer';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SideDrawer({
  toggleDrawer,
  drawerOpen,
  currentAccount,
  connectWalletAction,
  headerItems,
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Drawer
          anchor={'right'}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: '60px 40px',
              gap: '40px',
            }}
          >
            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
              <div className="header-links-mobile">
                <ul>
                  {headerItems.map((item, index) => (
                    <li key={index} onClick={toggleDrawer(false)}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Box>

            {currentAccount ? (
              <Box
                sx={{
                  border: '1px solid #ffe05b',
                  borderRadius: '10px',
                  p: '20px',
                  cursor: 'pointer',
                  width: '200px',
                  textAlign: 'center',
                  fontWeight: '600',
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
              <Box
                onClick={connectWalletAction}
                sx={{
                  border: '1px solid #ffe05b',
                  borderRadius: '10px',
                  p: '20px',
                  cursor: 'pointer',
                  width: '200px',
                  textAlign: 'center',
                  fontSize: 'large',
                  fontWeight: '600',
                  '&:hover': {
                    color: '#ffe05b',
                  },
                }}
              >
                Connect Wallet
              </Box>
            )}
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
