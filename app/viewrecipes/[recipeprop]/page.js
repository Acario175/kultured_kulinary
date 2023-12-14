'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import useSWR from 'swr';

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
  console.log(pathname);
  const title = pathname.split('/').slice(-1)[0].replaceAll('%20', ' ');
  console.log(title);
  const { data, error } = useSWR(['/api/loneRecipe', title], fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  let tempHolder = <Box>No Data</Box>;

  if (data) {
    tempHolder = (
      <Box
        display='flex'
        // flexWrap={'wrap'}
        flexDirection='column'
        gap={5}
      >
        <Text>Recipe Title: {data.title}</Text>
        <Text>Description: {data.description}</Text>
        <Text>{data.directions}</Text>
      </Box>
    );
  }

  // console.log(title);
  console.log(data);

  return (
    <Box
      marginTop={'8vh'}
      marginX={[10, 0, 120]}
      minH='70vh'
      display={'flex'}
      flexDirection='column'
      flex='wrap'
      //   bg={'red'}
    >
      {/* <Text fontSize={'lg'} fontWeight={'bold'}> */}
      {tempHolder}
      {/* </Text> */}
    </Box>
  );
};

export default Recipeprop;
