import React, { useState } from 'react';

import { Text, Button, Box, Image, Avatar, Link } from '@chakra-ui/react';
import '@fontsource/cabin-sketch';
// Supports weights 300-800
import '@fontsource-variable/open-sans';
function ViewRxCards(props) {
  // console.log(props);

  return (
    <Box
      display={'flex'}
      // flexDir={'column'}
      //   gap={5}
      // flex={'wrap'}
      // flexWrap={'wrap'}
      h={['30vh', '30vh']}
      w={['90vw', '30vw']}
      // h={'30vh'}
      // w={['30vh', '70vw']}
      // bg={'yellow'}
      // borderWidth='2px'
      borderRadius='lg'
      // borderColor={'#b8c1ec'}
      bg={'white'}
      // maxW='sm'
      // _hover={{ borderColor: '#e53170' }}
      pos={'relative'}
      // marginLeft={'5vw'}
      // m={'1vw'}
      // p={['3vw', '1vw']}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        // gap={['2vh', '5vh']}
        h={'85%'}
        w={['90vw', '100%']}
        // bg={'#a786df'}
        // borderWidth='2px'
        m={['2px', '20px']}
        // borderRadius='lg'
        // borderColor={'black'}
        // maxW=''
        // _hover={{ borderColor: '#e53170' }}
        // pos={'relative'}
        // color={'#473e13'}
      >
        <Text
          fontSize={'30px'}
          // lineHeight={'2.4rem'}
          // bg={'white'}
          fontWeight={'bold'}
          w={'240px'}
          // mt={'15px'}
        >
          {props.data.title}
        </Text>
        {/* <br /> */}
        <Text
          // align={'center'}
          bg={''}
          w={['80vw', '25vw']}
          noOfLines={6}
          // mt={'5px'}
          // right={'500px'}
          overflowY='auto'
        >
          {props.data.description}
        </Text>
        <Button
          // pos={'absolute'}
          variant={'primary'}
          top='3vw'
          left='1vw'
          borderRadius={50}
        >
          <Link
            href={`/viewrecipes/${props.data.title}`}
            // href={`/${props.data.title}`}
            style={{ textDecoration: 'none' }}
          >
            Explore Kulinary
          </Link>
        </Button>
        {/* <Text
          fontFamily={`'Cabin Sketch', sans-serif`}
          fontSize={['3.2rem', '5rem']}
          lineHeight={[0.9, 0.8]}
        >
          From <br />
          Novice Cooks to <br />
          Seasoned Chefs.
        </Text> */}
        {/* <Text
          fontSize={'1.1rem'}
          fontFamily={`'Open Sans Variable', sans-serif`}
          fontWeight={'600'}
        >
          Welcome to Kultured Kulinary, where Kulinary Kreativity meets
          convenience! Dive into a world of flavor and fun with our app
          that&apos;s designed to make every meal a masterpiece.
        </Text> */}
      </Box>
      {/* <Box
        // borderWidth='2px'
        borderRadius='lg'
        borderColor={'black'}
        h={['30vh', '30vh']}
        w={['90vw', '30vw']}
        // bg={'red'}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
      > */}
      <Avatar
        pos={'absolute'}
        // p={5}
        bgColor={'white'}
        borderWidth={5}
        // borderColor={'purple'}
        // rounded={'md'}
        alt={'Cooking image'}
        src={'images/cooking.png'}
        // objectFit={'cover'}
        // right={['490px']}
        // bottom={'20px'}
        top={'-22px'}
        left={['80vw', '10px']}
      />
      {/* </Box>{' '} */}
    </Box>
  );
}

export default ViewRxCards;
