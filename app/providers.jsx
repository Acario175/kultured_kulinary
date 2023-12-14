'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';

const customTheme = extendTheme({
  components: {
    Button: {
      // baseStyle: {
      //   fontWeight: 'bold',
      //   borderRadius: 'md',
      //   _hover: { bg: 'teal.500' },
      //   _focus: { boxShadow: 'outline' },
      // },
      variants: {
        primary: {
          bg: '#9656a1',
          color: 'white',
          _hover: { bg: '#9656a1' },
        },
        secondary: {
          bg: 'gray.300',
          _hover: { bg: 'gray.400' },
        },
      },
    },
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <Navbar />

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
