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
  let tempText = '';

  if (data) {
    tempText = data.directions.split(
      /(\nRecipe Below:\n|Ingredients Below:\n)/
    );
    tempHolder = (
      <Box
        display='flex'
        // flexWrap={'wrap'}
        flexDirection='column'
        gap={5}
      >
        <Text>Recipe Title: {data.title}</Text>
        <Text>Description: {data.description}</Text>
        {/* <Text>{data.directions}</Text> */}
        <Text>{(tempText[1], tempText[2])}</Text>
        <div> {(tempText[1], tempText[2])}</div>
        <Text>{tempText[1]}</Text>
      </Box>
    );
  }

  console.log(tempText);
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
      sx={{
        backgroundColor: 'white',
        borderRadius: '0.25rem',
        display: 'flex',
        flexDirection: 'column',
        // overflow: 'hidden',
        paddingLeft: '30px',
        background:
          'repeating-linear-gradient(#0000 0 calc(1.2rem - 1px),#66afe1 0 1.2rem) right bottom /100% 100%,linear-gradient(red 0 0) 30px 0/2px 100% #fff',
        backgroundRepeat: ' no-repeat',
        lineHeight: '1.2rem',
        WebkitMask:
          'radial-gradient(circle .8rem at 2px 50%,#0000 98%,#000)0 0/100% 2.4rem',
        boxShadow:
          'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
      }}
    >
      {/* <Text fontSize={'lg'} fontWeight={'bold'}> */}
      {tempHolder}
      {/* </Text> */}
    </Box>
  );
};

export default Recipeprop;
