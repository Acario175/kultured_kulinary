'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Box, Text, SimpleGrid } from '@chakra-ui/react';
// import ImageCarousel from '../../../components/ImageCarousel';
// import {
//   F4btdup1,
//   F4btdup2,
//   F4btdup3,
//   F4btdup4,
//   F4btdup5,
//   F4btdup6,
//   F4btdup7,
//   tbacn21rental1,
//   tbacn21rental2,
//   tbacn21rental3,
//   tbacn21rental4,
//   tbacn21rental5,
//   obaef11rental1,
//   obaef11rental2,
//   obaef11rental3,
//   obaef11rental4,
//   obaef11rental5,
// } from '../../../lib/galleryImages';

const Recipeprop = () => {
  // const router = useRouter();
  const pathname = usePathname();
  let imageData = [];
  // let title;
  let description;
  // &apos;

  // const searchParams = useSearchParams();
  // console.log(pathname.split('/')[-1]);

  const title = pathname.split('/').slice(-1)[0];
  console.log(title);

  return (
    <Box
      marginTop={'8vh'}
      marginX={[0, 0, 120]}
      minH='70vh'
      display={'flex'}
      flexDirection='column'
      flex='wrap'
      //   bg={'red'}
    >
      <Text fontSize={'lg'} fontWeight={'bold'}>
        {title}
      </Text>
    </Box>
  );
};

export default Recipeprop;
