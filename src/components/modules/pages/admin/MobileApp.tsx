import { Container } from '@mui/material';
import React from 'react';
import BottomNav from '../../shared/BottomNav';
import Footer from '../../shared/Footer';

const MobileApp = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="delivery"
          backLink="finish"
          forText="Add delivery zone"
          backText="Finish installation"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default MobileApp;
