import React, { useEffect } from 'react';
import './sections.css';
import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        p: { xs: '30px', lg: '60px' },
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
      }}
      id="s1"
    >
      <div className="home-left" data-aos="fade-in" data-aos-duration="1000">
        <h2 className="heading-light">A Whole New Desi World in Metaverse</h2>
        <p className="para-light">
          We are the answer to all who search desi content in the metaverse. We
          strive to digitize our desi culture and artifacts into web 3.0.
        </p>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((item) => (
              <Box
                sx={{
                  border: '5px solid #000',
                  borderRadius: '9px',
                  p: '30px',
                  textAlign: 'center',
                  '&:hover': {
                    border: '5px dotted #000',
                  },
                }}
                key={item}
              >
                <p className="time">00</p>
                <p>{item}</p>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              mt: '60px',
            }}
          >
            <a
              href="https://opensea.io/desiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="opensea-btn"
            >
              Buy on OpenSea
            </a>
          </Box>
        </Box>
      </div>
      <div className="home-right">
        <img
          data-aos="slide-left"
          data-aos-duration="1000"
          src="./desi-truck.png"
          alt="Truck"
        />
      </div>
    </Box>
  );
};

export default Home;
