'use client';
// import Head from 'next/head';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import RecipeParentUpdate from '@/components/RecipeParentUpdate';

import useSWR from 'swr';

const fetcher = async ([url, title]) =>
  fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title),
  }).then((res) => res.json());

export default function updaterecipe() {
  // const router = useRouter();
  // const pathname = useSearchParams();
  // console.log(pathname.search);
  // const receivedData = router.query;
  // console.log(router);

  const searchParams = useSearchParams();
  // console.log(searchParams.get('title')); // Logs "search"
  // console.log(searchParams.get('description')); // Logs "description"
  // console.log(searchParams.get('directions')); // Logs "directions"

  const pathname = searchParams.get('title');
  // console.log(pathname);
  const title = pathname.split('/').slice(-1)[0].replaceAll('%20', ' ');
  console.log(title);
  // const { data, error } = useSWR(['/api/loneRecipe', title], fetcher, {
  //   revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
  //   initialData: 'No Data',
  // });

  // let tempHolder = <Box>No Data</Box>;
  let tempText = '';

  // console.log(data);

  // if (data) {
  // tempText = data.directions.split(
  //   /(\nRecipe Below:\n|Ingredients Below:\n)/
  // );

  // tempHolder = (
  //   <Box
  //     display='flex'
  //     // flexWrap={'wrap'}
  //     flexDirection='column'
  //     gap={5}
  //   >
  //     <Text>Recipe Title: {data.title}</Text>
  //     <Text>Description: {data.description}</Text>
  //     {/* <Text>{data.directions}</Text> */}
  //     <Text>{(tempText[1], tempText[2])}</Text>
  //     <div> {(tempText[1], tempText[2])}</div>
  //     <Text>{tempText[1]}</Text>
  //       {/* <Button
  //         // pos={'absolute'}
  //         variant={'primary'}
  //         // bottom='2'
  //         // right='2'
  //         // isDisabled={props.data.status}
  //         // as='a'
  //       > */}
  //   </Box>
  // );
  // }
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
          Welcome To Update Season
        </Heading>
        <Text fontWeight={'bold'} my={10} align='center'>
          Below you will be able to pick you ingredients that once clicked will
          be added to the text box. The text box is where you will type out the
          directions as you see fit
          <br />
          Please keep in mind the directions should go under the &quot;Recipe
          Below:&quot; section & Ingredients should go in the &quot;Ingridents
          Below:&quot; section
        </Text>
        <RecipeParentUpdate data={title} />
      </Box>
    </Box>
  );
}
