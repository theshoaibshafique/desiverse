import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import './sections.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Governance = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        background: 'rgb(45, 45, 45)',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        alignItems: 'center',
        p: { xs: '30px', lg: '60px' },
        justifyContent: 'center',
        height: { lg: '100vh' },
        gap: { xs: '40px', lg: '0px' },
      }}
      id="s2"
    >
      <div className="gov-left">
        <img
          data-aos="slide-right"
          data-aos-duration="1000"
          src="./dv-avatar.png"
          alt="Desi Avatar"
        />
      </div>
      <div data-aos="fade-in" data-aos-duration="1000" className="gov-right">
        <p className="heading-dark">Decentralized Governance</p>
        <p className="para-dark">
          The Desiverse DAO is governed by its individual members. <br />
          Collectively, we make decisions about future products and expansion of
          the projects
        </p>
      </div>
    </Box>
  );
};

export default Governance;
