import React, { useState } from 'react';

import { Text, Button, Box, Image } from '@chakra-ui/react';
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
      // flex={'wrap'}
      flexWrap={'wrap'}
      h={['65vh', '35vh']}
      w={['95vw', '90vw']}
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
      p={['3vw', '1vw']}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        gap={['2vh', '5vh']}
        // h={'30vh'}
        w={['90vw', '40vw']}
        // bg={'#a786df'}
        // borderWidth='2px'
        // borderRadius='lg'
        // borderColor={'black'}
        // maxW=''
        // _hover={{ borderColor: '#e53170' }}
        // pos={'relative'}
        color={'#473e13'}
      >
        <Text
          fontFamily={`'Cabin Sketch', sans-serif`}
          fontSize={['3.2rem', '5rem']}
          lineHeight={[0.9, 0.8]}
        >
          From <br />
          Novice Cooks to <br />
          Seasoned Chefs.
        </Text>
        <Text
          fontSize={'1.1rem'}
          fontFamily={`'Open Sans Variable', sans-serif`}
          fontWeight={'600'}
        >
          Welcome to Kultured Kulinary, where Kulinary Kreativity meets
          convenience! Dive into a world of flavor and fun with our app
          that&apos;s designed to make every meal a masterpiece.
        </Text>
      </Box>
      <Box
        // borderWidth='2px'
        borderRadius='lg'
        borderColor={'black'}
        h={['30vh', '30vh']}
        w={['90vw', '30vw']}
        // bg={'red'}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Image
          // p={5}
          rounded={'md'}
          alt={'Tom image'}
          src={'images/cooking.png'}
          // objectFit={'cover'}
        />
      </Box>
    </Box>
  );
}

export default HeroIntro;
