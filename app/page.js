'use client';
// import Image from 'next/image';
// import styles from './page.module.css'
import useSWR from 'swr';
import { useEffect, useState, useRef } from 'react';

import {
  Box,
  chakra,
  shouldForwardProp,
  Button,
  Text,
  Textarea,
} from '@chakra-ui/react';
// import DropdownMenu from '@/components/DropdownMenu';
import DropdownMenuText from '@/components/DropdownMenuText';

const fetcher = (url) => fetch(url).then((res) => res.json());

async function sendDataToApi() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );

    if (response.ok) {
      const data = await response.json();
      // console.log('Data inserted:', data['meals'].slice(0, 20));

      const tempData = data['meals'].slice(0, 20);

      try {
        console.log('hi', tempData);

        const response = await fetch('/api/insertData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tempData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Data inserted:', data);
        } else {
          console.error('Failed to insert data');
        }
      } catch (error) {
        console.log('error');
        console.error('Error inserting data:', error);
      }
    } else {
      console.error('Failed to insert data');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }

  // console.log('Data inserted:', data);
}

export default function Home() {
  return (
    <Box
      bg='#fec7d7'
      minH={'100vh'}
      display='flex'
      flexWrap={'wrap'}
      flexDirection='column'
      alignContent={'center'}
      justifyContent={'center'}
      // textAlign={'center'}
      gap={50}
    >
      <Button onClick={sendDataToApi}>Insert Data</Button>
      <Button></Button>
      <Button variant='primary'>Primary Button</Button>
      {/* <DropdownMenu /> */}
      {/* <DropdownMenuText /> */}
    </Box>
  );
}
