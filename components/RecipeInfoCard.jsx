import React, { useState } from 'react';
import NextLink from 'next/link';
import { Text, Button, Box, Image, Avatar, Link } from '@chakra-ui/react';
import '@fontsource/cabin-sketch';
// Supports weights 300-800
import '@fontsource-variable/open-sans';
function RecipeInfoCard(props) {
  console.log(props);
  let tempTitle = ' ';
  let tempIngs = ' ';
  let tempDirs = ' ';
  if (props.data) {
    tempTitle = props.data.title;
    tempIngs = props.data.ingredients;
    tempDirs = props.data.directions;
  }

  return (
    <Box
      display={'flex'}
      flexDir={'row'}
      //   gap={5}
      // flex={'wrap'}
      // flexWrap={'wrap'}
      h={['30vh', '50vh']}
      w={['90vw', '80vw']}
      // h={'30vh'}
      // w={['30vh', '70vw']}
      // bg={'yellow'}
      // borderWidth='2px'
      borderRadius='10px'
      // borderColor={'#b8c1ec'}
      bg={'white'}
      // maxW='sm'
      // _hover={{ borderColor: '#e53170' }}
      // pos={'relative'}
      // marginLeft={'5vw'}
      m={'20px'}
      // p={['3vw', '1vw']}
    >
      <Box
        h={'100%'}
        // w={'1500px'}
        w={'30%'}
        bg={'navy'}
        // color={'white'}
        color='orange.200'
        borderRadius='10px 0px 0px 10px'
        overflowY='auto'
      >
        <Text m={'15px 0px 0px 2px'} size='sm' color='gray.400'>
          Recipe Title:
        </Text>
        <Text
          lineHeight={'70px'}
          // bg={'red'}
          // color='orange.200'
          variant='RecipeCardMTitle'
        >
          {tempTitle}
        </Text>
        <Text
          // ml={'70px'}
          lineHeight={'70px'}
          // bg={'red'}
          // color='orange.200'
          variant='RecipeCardSTitle'
          // bg={'red'}
          align={'center'}
        >
          Ingredients -
        </Text>
        <Text
          //  bg={'red'}
          // bg={'red'}
          align={'center'}
          whiteSpace='pre-line'
          // overflow='auto'
          // borderColor='red'
          // border='1px solid'
          // overflowY='auto'
          // width='300px'
          // maxHeight='150px'
          // whiteSpace='wrap'
        >
          {tempIngs}
        </Text>
        <Button m={5}>
          <NextLink
            href={{
              pathname: '/updaterecipe',
              query: {
                title: tempTitle,
              },
            }}
          >
            {'updaterecipe'}
          </NextLink>
        </Button>
      </Box>
      <Box w={'60%'}>
        <Text
          // lineHeight={'70px'}

          variant='RecipeCardSTitle'
          align={'center'}
        >
          Directions
        </Text>
        <Text whiteSpace='pre-line' m={'20px'}>
          {tempDirs}
        </Text>
      </Box>
    </Box>
  );
}

export default RecipeInfoCard;
