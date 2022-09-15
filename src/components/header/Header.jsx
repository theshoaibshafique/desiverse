import React, { useState } from 'react';
import SideDrawer from './Drawer';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

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
        <div>
          <IconButton sx={{ color: '#ffe05b' }} onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
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
