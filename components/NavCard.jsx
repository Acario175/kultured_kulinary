import React, { useState } from 'react';

import { Text, Button, Box, Link } from '@chakra-ui/react';

function NavCard(props) {
  //   console.log(props);

  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      //   gap={5}
      h={['25vh', '25vh', '25vh', '25vh', '30vh']}
      w={['70vw', '70vw', '70vw', '30vw', '20vw']}
      bg={'#a786df'}
      borderWidth='2px'
      borderRadius='lg'
      borderColor={'#d9d4e7'}
      maxW='sm'
      _hover={{ borderColor: '#e53170' }}
      pos={'relative'}
    >
      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
        pt={5}
        px={5}
        fontSize={['2rem']}
      >
        {props.data.title}
      </Box>
      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={3}
        // py={1}
        px={5}
        fontSize={['1em', '1.2em']}
      >
        {props.data.desc}
      </Box>
      <Link
        //   href={`/viewrecipes`}
        href={`${props.data.link}`}
        style={{ textDecoration: 'none' }}
      >
        <Button
          pos={'absolute'}
          variant={'primary'}
          bottom='2'
          right='2'
          isDisabled={props.data.status}
        >
          {props.data.title}
        </Button>
      </Link>
    </Box>
  );
}

export default NavCard;
