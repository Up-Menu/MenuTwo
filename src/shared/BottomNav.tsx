import React, { useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { NavLink as RouterLink } from 'react-router-dom';

const LeftArrow = styled(DoubleArrowIcon)`
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const BottomNav = (props: any) => {
  return (
    <Box
      pt={3}
      display="flex"
      alignItems="flex-center"
      justifyContent="space-between"
    >
      <Button
        color="error"
        startIcon={<LeftArrow />}
        variant="outlined"
        disabled={!props.preStep}
        size="small"
        component={RouterLink}
        to={`/dashboards/${props.backLink}`}
      >
        {props.backText}
      </Button>

      {props.nextStep && (
        <Button
          color="success"
          component={RouterLink}
          to={`/dashboards/${props.forLink}`}
          endIcon={<DoubleArrowIcon />}
          size="small"
        >
          {props.forText}
        </Button>
      )}
    </Box>
  );
};

export default BottomNav;
