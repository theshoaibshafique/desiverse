import { Box, IconButton } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'rgb(45, 45, 45)',
        p: { xs: '30px', lg: '60px 160px 0px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <img src="./desiverse-logo.png" alt="" />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <a
            href="https://www.instagram.com/desiverse.dao/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <IconButton>
              <InstagramIcon sx={{ fontSize: '80px', color: '#ffd108' }} />
            </IconButton>
          </a>
          <a
            href="https://twitter.com/Desiverse_DAO"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-2"
          >
            <IconButton>
              <TwitterIcon sx={{ fontSize: '80px', color: '#ed1c2d' }} />
            </IconButton>
          </a>
          <a
            href="https://twitter.com/Desiverse_DAO"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <IconButton>
              <TelegramIcon sx={{ fontSize: '80px', color: '#ffd108' }} />
            </IconButton>
          </a>
        </Box>
      </Box>
      <Box>
        <p className="footer-text">
          Copyright &#169; 2022 DesiverseDAO &#124; Powered by DesiverseDAO
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
