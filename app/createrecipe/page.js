'use client';
// import Head from 'next/head';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import RecipeParent from '@/components/RecipeParent';

export default function createRecipe() {
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
          Welcome To Kreation
        </Heading>
        <Text fontWeight={'bold'} my={10}>
          Below you will be able to pick you ingredients that once clicked will
          be added to the text box. The text box is where you will type out the
          directions as you see fit
          <br />
          Please keep in mind the directions should go under the "Recipe Below:"
          section & Ingredients should go in the "Ingridents Below:" section
        </Text>
        <RecipeParent />
      </Box>
    </Box>
  );
}
