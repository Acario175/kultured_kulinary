// 'use client';

// import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
  Link,
  Image,
  HStack,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// import NextLink from 'next/link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();
  // const [scroll, setScroll] = useState(false);

  // const navBg = useColorModeValue('gray.300', 'gray.600');
  // const navBg = useColorModeValue('#9a9a9a', '#9a9a9a');
  const NavBtns = [
    // <Text fontSize='md' fontWeight={'bold'} key={'home'}>
    //   <Link href='/' style={{ textDecoration: 'none' }}>
    //     Home
    //   </Link>
    // </Text>,

    <Text
      // fontSize='md'
      fontWeight={'bold'}
      key={'CreateRecipe'}
    >
      <Link href='/CreateRecipe' style={{ textDecoration: 'none' }}>
        Create Rx
      </Link>
    </Text>,

    <Text
      //  fontSize='md'
      fontWeight={'bold'}
      key={'listings'}
    >
      <Link href='/listings' style={{ textDecoration: 'none' }}>
        View All Rx
      </Link>
    </Text>,
    <Text
      //  fontSize='md'
      fontWeight={'bold'}
      key={'listings'}
    >
      <Link href='/createingred' style={{ textDecoration: 'none' }}>
        Add Ingred.
      </Link>
    </Text>,
    <Text
      //  fontSize='md'
      fontWeight={'bold'}
      key={'listings'}
    >
      <Link href='/viewingreds' style={{ textDecoration: 'none' }}>
        View Ingred.
      </Link>
    </Text>,

    // <Text fontSize='md' fontWeight={'bold'} key={'Sold'}>
    //   <Link href='/sold' style={{ textDecoration: 'none' }}>
    //     Sold
    //   </Link>
    // </Text>,

    // <Text fontSize='md' fontWeight={'bold'} key={'Testimonials'}>
    //   <Link href='/testimonials' style={{ textDecoration: 'none' }}>
    //     Testimonials
    //   </Link>
    // </Text>,

    // <IconButton onClick={toggleColorMode} w='1vw' key={'colorMode'}>
    //   {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    // </IconButton>,
  ];

  return (
    <Box
      // bg={useColorModeValue('gray.300', 'blackAlpha.900')}
      // bg={navBg}
      // bg={{ base: 'red', sm: 'red', md: 'red', lg: 'red' }}
      // bg={['red', 'blue']}
      // px={4}
      // position={'sticky'}
      pos={'fixed'}
      top={0}
      boxShadow={'md'}
      zIndex={300}
      // opacity={0.8}
      w='100vw'
      // color={'red'}
      // m={5}
      // minH={'8vh'}
    >
      <Box
        // bg={'red'}
        h={16}
        marginX={[5, 120]}
        alignItems={'center'}
        justify={'space-between'}
        // justify={'space-around'}
        gap={['18vw', 200]}
        display={['flex']}
      >
        <Text
          //  fontSize='md'
          // fontWeight={'bold'}
          key={'home'}
          variant='NavTitle'
        >
          <Link href='/' style={{ textDecoration: 'none' }}>
            Kultured Kulinary
          </Link>
        </Text>
        {/* <Spacer /> */}
        <HStack spacing='14px' display={['none', 'flex']} m={1} right={100}>
          {NavBtns}
        </HStack>
        {/* {NavBtns} */}
        <IconButton
          // pos={'relevant'}
          size={'lg'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          // display={{ md: 'none' }}
          // display={{ base: 'flex', md: 'none' }}
          display={['flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant='outline'
          colorScheme={useColorModeValue('gray.300', 'blackAlpha.600')}
          m={5}
        />
      </Box>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} bg='' m={4}>
          <Stack spacing={4} justifyContent={'center'}>
            {NavBtns}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
