import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import styled from 'styled-components';

const LeftArrow = styled(DoubleArrowIcon)`
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const BottomNav = (props: any) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  });
  return (
    <Box
      pt={3}
      display="flex"
      alignItems="flex-center"
      justifyContent="space-between"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="400"
      data-aos-easing="ease-in"
    >
      <Link to={`/dashboards/${props.backLink}`}>
        <Button
          startIcon={<LeftArrow />}
          variant="outlined"
          disabled={!props.preStep}
          size="small"
        >
          {props.backText}
        </Button>
      </Link>

      {props.nextStep && (
        <Link to={`/dashboards/${props.forLink}`}>
          <Button endIcon={<DoubleArrowIcon />} size="small">
            {props.forText}
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default BottomNav;
