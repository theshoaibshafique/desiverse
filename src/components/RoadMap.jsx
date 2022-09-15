import React, { useEffect } from 'react';
import './sections.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material';

const RoadMap = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        background: 'rgb(45, 45, 45)',
        p: { xs: '30px', lg: '60px 140px' },
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        gap: '50px',
      }}
      id="s4"
    >
      <div className="roadmap-left">
        <p className="heading-dark">Pre Minting Pass</p>
        <p className="para-dark">
          Mint before anyone else. As early adopter of our NFT collection you
          become a founding member of the Desiverse DAO. <br /> <br />
          <ul>
            <li>&#45; 3 days earlier mint right before official launch</li>
            <li>&#45; Mint up to 15 NFT&#39;s per pass</li>
            <li>
              &#45; Access to special discord channel as DAO founding member
              (lifetime)
            </li>
            <li>&#45; Future whitelist access and special airdrops</li>
          </ul>
        </p>
      </div>
      <div className="roadmap-right">
        <img
          data-aos="fade-in"
          data-aos-duration="1000"
          src="./desiverse-card.png"
          alt=""
        />
        <Box
          data-aos="slide-up"
          data-aos-duration="1000"
          sx={{
            mt: '-35px',
          }}
        >
          <a
            href="https://opensea.io/desiverse"
            target="_blank"
            rel="noopener noreferrer"
            className="opensea-btn-2"
          >
            Buy Now
          </a>
        </Box>
      </div>
    </Box>
  );
};

export default RoadMap;
