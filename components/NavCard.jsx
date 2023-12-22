import React, { useState } from 'react';

import { Text, Button, Box, Link } from '@chakra-ui/react';

function NavCard(props) {
  //   console.log(props);

  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      gap={5}
      h={'20vh'}
      w={['80vw', '20vw']}
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
      >
        {props.data.desc}
      </Box>
      <Button
        pos={'absolute'}
        variant={'primary'}
        bottom='1'
        right='0'
        isDisabled={props.data.status}
      >
        <Link
          href={`/viewrecipes`}
          // href={`/${props.data.title}`}
          style={{ textDecoration: 'none' }}
        >
          {props.data.title}
        </Link>
      </Button>
    </Box>
  );
}

export default NavCard;
