'use client';
// import Head from 'next/head';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';

export default function viewrecipes() {
  return (
    <Box
      minH='70vh'
      // h={['86vh', '92vh']}
      // bg='red'
      mt={'80px'}
      marginX={[1, 120]}
      align='center'
    >
      <Box mt={5}>
        <Heading size='4xl' align='center' m={2}>
          Welcome to All Recipes
        </Heading>
        {'template'}
      </Box>
    </Box>
  );
}
