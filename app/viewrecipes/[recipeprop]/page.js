'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import {
  Box,
  Text,
  Button,
  Link,
  Spinner,
  Center,
  VStack,
} from '@chakra-ui/react';
import useSWR from 'swr';
import RecipeInfoCard from '@/components/RecipeInfoCard';

const fetcher = async ([url, title]) =>
  fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title),
  }).then((res) => res.json());

const Recipeprop = () => {
  // const router = useRouter();

  const pathname = usePathname();
  // console.log(pathname);
  const title = pathname.split('/').slice(-1)[0].replaceAll('%20', ' ');
  // console.log(title);
  const { data, error } = useSWR(['/api/loneRecipe', title], fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  let tempHolder = (
    <Center mt={10}>
      <VStack spacing={0}>
        <Spinner
          thickness='60px'
          emptyColor='gray.200'
          color='purple.500'
          boxSize='500px'
          speed='0.65s'
        />
        <Text fontSize='60px' color='gray.700'>
          Loading...
        </Text>
      </VStack>
    </Center>
  );
  let tempText = '';

  if (data) {
    // console.log(data);
    // tempText = data.directions.split(
    //   /(\nRecipe Below:\n|Ingredients Below:\n)/
    // );
    tempHolder = <RecipeInfoCard data={data} />;
    // tempHolder = (
    //   <Box
    //     display='flex'
    //     // flexWrap={'wrap'}
    //     flexDirection='column'
    //     gap={5}
    //   >
    //     <Text>
    //       Recipe Title:<br></br> {data.title}
    //     </Text>
    //     <Text>Description: {data.description}</Text>
    //     <Text>Ingredients: </Text>
    //     <Text whiteSpace='pre-line'>{data.ingredients}</Text>
    //     <Text>Directions: </Text>
    //     <Text>{data.directions}</Text>
    //     {/* <Text>{(tempText[1], tempText[2])}</Text> */}
    //     {/* <div> {(tempText[1], tempText[2])}</div> */}
    //     {/* <Text>{tempText[1]}</Text> */}
    //     <NextLink
    //       href={{
    //         pathname: '/updaterecipe',
    //         query: {
    //           title: data.title,
    //           // description: data.description,
    //           // directions: data.directions,
    //         },
    //       }}
    //       // passHref
    //     >
    //       {/* <Button
    //         // pos={'absolute'}
    //         variant={'primary'}
    //         // bottom='2'
    //         // right='2'
    //         // isDisabled={props.data.status}
    //         // as='a'
    //       > */}
    //       {/* <Link
    //         //   href={`/viewrecipes`}
    //         // href={`/updaterecipe`}
    //         style={{ textDecoration: 'none' }}
    //         // href={{ pathname: '/updaterecipe', query: data.title }}
    //         // passhref
    //       > */}
    //       {'updaterecipe'}
    //       {/* </Link> */}
    //       {/* </Button> */}
    //       {/* {'updaterecipe'} */}
    //     </NextLink>
    //   </Box>
    // );
  }

  // console.log(tempText);
  // console.log(data);

  return (
    <Box
      marginTop={'8vh'}
      marginX={[10, 0, 120]}
      minH='70vh'
      display={'flex'}
      flexDirection='column'
      flex='wrap'
      //   bg={'red'}
      // sx={{
      //   backgroundColor: 'white',
      //   borderRadius: '0.25rem',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   // overflow: 'hidden',
      //   paddingLeft: '30px',
      //   background:
      //     'repeating-linear-gradient(#0000 0 calc(1.2rem - 1px),#66afe1 0 1.2rem) right bottom /100% 100%,linear-gradient(red 0 0) 30px 0/2px 100% #fff',
      //   backgroundRepeat: ' no-repeat',
      //   lineHeight: '1.2rem',
      //   WebkitMask:
      //     'radial-gradient(circle .8rem at 2px 50%,#0000 98%,#000)0 0/100% 2.4rem',
      //   boxShadow:
      //     'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
      // }}
    >
      {/* <Text fontSize={'lg'} fontWeight={'bold'}> */}
      {tempHolder}
      {/* </Text> */}
      {/* {<RecipeInfoCard data={data} />} */}
    </Box>
  );
};

export default Recipeprop;
