import React, { useState } from 'react';

import { Text, Button, Box, Link } from '@chakra-ui/react';
import '@fontsource/cabin-sketch';
// Supports weights 300-800
import '@fontsource-variable/open-sans';
function HeroIntro(props) {
  //   console.log(props);

  return (
    <Box
      display={'flex'}
      // flexDir={'column'}
      //   gap={5}
      h={'35vh'}
      w={['80vw', '90vw']}
      // bg={'yellow'}
      // borderWidth='2px'
      borderRadius='lg'
      // borderColor={'#b8c1ec'}
      bg={'#b8c1ec'}
      // maxW='sm'
      // _hover={{ borderColor: '#e53170' }}
      // pos={'relative'}
      // marginLeft={'5vw'}
      // m={'1vw'}
      p={'1vw'}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        gap={'5vh'}
        // h={'30vh'}
        w={['80vw', '40vw']}
        // bg={'#a786df'}
        // borderWidth='2px'
        // borderRadius='lg'
        // borderColor={'black'}
        // maxW=''
        // _hover={{ borderColor: '#e53170' }}
        // pos={'relative'}
      >
        <Text
          fontFamily={`'Cabin Sketch', sans-serif`}
          fontSize={'5rem'}
          lineHeight={0.8}
        >
          From <br />
          novice cooks to <br />
          seasoned chefs.
        </Text>
        <Text
          fontSize={'1.4rem'}
          fontFamily={`'Open Sans Variable', sans-serif`}
          fontWeight={'500'}
        >
          Welcome to Kultured Kulinary, where Kulinary Kreativity meets
          convenience! Dive into a world of flavor and fun with our app that's
          designed to make every meal a masterpiece.{' '}
        </Text>
      </Box>
      <Box> </Box>
    </Box>
  );
}

export default HeroIntro;
