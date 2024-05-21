import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography variant="subtitle2" align="center">
      Copyright © {new Date().getFullYear()} Virtual Store. All Rights Reserved.
    </Typography>
  );
};

export default Footer;


