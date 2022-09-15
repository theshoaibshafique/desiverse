import { Box } from '@mui/material';
import React from 'react';
import './sections.css';
const Bank = () => {
  return (
    <Box
      sx={{
        height: { lg: '100vh' },

        display: 'flex',
        p: { xs: '30px', lg: '0px' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
      id="s3"
    >
      <Box
        sx={{
          maxWidth: { lg: '400px' },
        }}
      >
        <p className="heading-light">Desi Bank</p>
        <p className="para-light">
          3% of profits are parked as budget allocation in the DAO treasury to
          finance the decentralized governance. <br /> Our vision is to expand
          the ecosystem by donating next-gen devs in third world countries.
        </p>
      </Box>
    </Box>
  );
};

export default Bank;
