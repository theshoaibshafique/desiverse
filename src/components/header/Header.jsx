import React, { useState } from 'react';
import SideDrawer from './Drawer';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';

const Header = ({ currentAccount, connectWalletAction }) => {
  const headerItems = [
    {
      title: 'Home',
      link: '#s1',
    },
    {
      title: 'DAO Governance',
      link: '#s2',
    },
    {
      title: 'Desiverse Bank',
      link: '#s3',
    },
    {
      title: 'Pre Minting Pass',
      link: '#s4',
    },
    {
      title: 'Desiverse Roadmap',
      link: '#s4',
    },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src="./desiverse-logo.png" alt="Desiverse Logo" />
        </div>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <div className="header-links">
            <ul>
              {headerItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          {currentAccount ? (
            <Box
              sx={{
                border: '1px solid #ffe05b',
                borderRadius: '10px',
                p: '20px',
                cursor: 'pointer',
                width: '150px',
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
                width: '150px',
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
        <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
          <IconButton sx={{ color: '#ffe05b' }} onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </div>
      <SideDrawer
        toggleDrawer={toggleDrawer}
        drawerOpen={drawerOpen}
        currentAccount={currentAccount}
        connectWalletAction={connectWalletAction}
        headerItems={headerItems}
      />
    </>
  );
};

export default Header;
