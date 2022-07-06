import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

const Chakra = ({ children }) => {
  return (
    <div>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </div>
  );
};

export default Chakra;
