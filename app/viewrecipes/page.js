'use client';
// import Head from 'next/head';
import {
  Heading,
  Box,
  Button,
  Text,
  Flex,
  Link,
  Spinner,
  Center,
  VStack,
} from '@chakra-ui/react';
import useSWR from 'swr';

import ViewRxCards from '@/components/ViewRxCards';

const fetcher = (url) => fetch(url).then((res) => res.json());

// function RecipeCard(props) {
//   // console.log(props);
//   return (
//     <Box
//       sx={{
//         backgroundColor: 'white',
//         borderRadius: '0.25rem',
//         display: 'flex',
//         flexDirection: 'column',
//         // overflow: 'hidden',
//         paddingLeft: '30px',
//         background:
//           'repeating-linear-gradient(#0000 0 calc(1.2rem - 1px),#66afe1 0 1.2rem) right bottom /100% 100%,linear-gradient(red 0 0) 30px 0/2px 100% #fff',
//         backgroundRepeat: ' no-repeat',
//         lineHeight: '1.2rem',
//         WebkitMask:
//           'radial-gradient(circle .8rem at 2px 50%,#0000 98%,#000)0 0/100% 2.4rem',
//         boxShadow:
//           'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
//       }}
//       h={'30vh'}
//       w={['30vh', '30vh']}
//       position='relative'
//       // _hover={{ transform: 'translate(-30px, -30px)' }}
//     >
//       <Text
//         fontSize={'30px'}
//         // lineHeight={'2.4rem'}
//         // bg={'white'}
//         fontWeight={'bold'}
//         w={'240px'}
//         mt={'15px'}
//       >
//         {props.data.title}
//       </Text>
//       <br />
//       <Text
//         align={'center'}
//         bg={''}
//         w={'245px'}
//         noOfLines={6}
//         mt={'5px'}
//         // right={'500px'}
//       >
//         {props.data.description}
//       </Text>
//       <Button pos={'absolute'} variant={'primary'} bottom='1' right='0'>
//         <Link
//           href={`/viewrecipes/${props.data.title}`}
//           // href={`/${props.data.title}`}
//           style={{ textDecoration: 'none' }}
//         >
//           Explore Kulinary
//         </Link>
//       </Button>
//     </Box>
//   );
// }

export default function Viewrecipes() {
  const { data, error } = useSWR('/api/recipes', fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  let tempHolder = [];

  if (data) {
    // console.log(data.data['0']);
    data['data'].map((item, index) => {
      tempHolder.push(<ViewRxCards key={item.title + index} data={item} />);
    });
    // tempHolder.push(<ViewRxCards key='SampleTest' data={data['data'][0]} />);
    // tempHolder.push(<ViewRxCards key='SampleTest' data={data['data'][0]} />);
    // tempHolder.push(<ViewRxCards key='SampleTest' data={data['data'][0]} />);
    // tempHolder.push(<ViewRxCards key='SampleTest' data={data['data'][0]} />);
  }

  return (
    <Box
      minH='70vh'
      // h={['86vh', '92vh']}
      // bg='red'
      mt={'80px'}
      marginX={[1, 120]}
      // align='center'
    >
      <Box mt={5}>
        <Heading size='4xl' align='center' m={2}>
          Welcome to All Recipes
        </Heading>
        <Box
          display={'flex'}
          flexWrap='wrap'
          // flex={'wrap'}
          // flexDirection={['column', 'column']}
          gap={10}
          // m={50}
          // align='center'
          // alignItems={'center'}
          justifyContent={'center'}
          // bg={'red'}
          // h={['86vh', '92vh']}
          p={'1vw'}
        >
          {data ? (
            tempHolder
          ) : (
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
          )}
        </Box>
      </Box>
    </Box>
  );
}
