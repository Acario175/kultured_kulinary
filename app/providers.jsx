'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import theme from '../lib/theme.js';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Navbar />

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
