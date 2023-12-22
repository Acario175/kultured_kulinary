'use client';

import {
  Box,
  chakra,
  shouldForwardProp,
  Button,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

import NavCard from '@/components/NavCard';

// const fetcher = (url) => fetch(url).then((res) => res.json());

const tempJson = [
  {
    title: 'Create Recipe',
    desc: `This is your chance to add to our vast list `,
    status: false,
    link: '/createrecipe',
  },
  {
    title: 'Discover Recipes',
    desc: `Explore a vast collection of mouthwatering recipes from around the world. `,
    status: false,
    link: '/viewrecipes',
  },
  {
    title: 'Add Ingredient',
    desc: `This is your chance to add to our vast list `,
    status: true,
    link: '/',
  },
  {
    title: 'Explore Ingredients',
    desc: `Discover new ingredients from our culinary experts.`,
    status: true,
    link: '/',
  },
];

async function sendDataToApi() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );

    if (response.ok) {
      const data = await response.json();

      const tempData = data['meals'];

      try {
        // console.log('hi', tempData);

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
}
const tempHolder = tempJson.map((item, index) => {
  return <NavCard key={`${item.title}+${index}`} data={item} />;
});

export default function Home() {
  return (
    <Box
      // bg='#fec7d7'
      minH={'100vh'}
      display='flex'
      flexWrap={'wrap'}
      flexDirection='column'
      alignContent={'center'}
      justifyContent={'center'}
      // textAlign={'center'}
      gap={50}
      // marginT={[100, 120]}
      marginTop={'8vh'}
    >
      {/* <Box p={5} h={'20vh'} bg={'red'}> */}
      {/* <Heading
          variant={'TestTitle'}
          fontSize='50px'
          height='10px'
          lineHeight='10px'
          bg={'#d52e3f'}
        >
          I'm a Heading
        </Heading> */}
      {/* </Box> */}
      {/* <Button onClick={sendDataToApi} isDisabled>
        Insert Data
      </Button> */}
      <Box
        w={['100vw', '50vw']}
        display={'flex'}
        // flexDirection={'column'}
        flexWrap={'wrap'}
        gap={5}
        // bg={'red'}
        alignContent={'center'}
        justifyContent={'center'}
      >
        {/* <Button variant='primary' isDisabled>
          Add Ing
        </Button>
        <Button variant='primary'>
          <Link href='/createrecipe' style={{ textDecoration: 'none' }}>
            Create Recipe
          </Link>
        </Button>
        <Button variant='primary'>
          <Link href='/viewrecipes' style={{ textDecoration: 'none' }}>
            View All Recipes
          </Link>
        </Button>
        <Button variant='primary' isDisabled>
          View All Ings
        </Button>
        <NavCard data={tempJson[0]} /> */}
        {tempHolder}
      </Box>
    </Box>
  );
}
