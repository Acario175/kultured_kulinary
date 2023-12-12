import React, { useState } from 'react';
// import { useState } from 'react';
import Select from 'react-select';

import {
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from '@chakra-ui/react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

// Sibling Component A
function TextComp(props) {
  return (
    <Box>
      <Textarea
        color={'pink'}
        borderColor={'pink'}
        bg={'gray'}
        // placeholder='Editable Text'
        value={props.recipeText}
        onChange={(e) => props.setTextData(e.target.value)}
        size='lg'
        w={'80vw'}
        h={'30vh'}
      />
    </Box>
  );
}

// Sibling Component B
function SiblingB(props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const { data, error } = useSWR('/api/readData', fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  //   console.log(data);

  const handleOptionClick = (option) => {
    // console.log(option);
    if (option) {
      //   const tempText = props.recipeText.split('Recipe');
      const tempText = props.recipeText.split(
        /(\nRecipe Below:\n|Ingredients Below:\n)/
      );
      console.log(tempText);
      props.setTextData(
        tempText[0] + option.value + ': ' + '\n' + tempText[1] + tempText[2]
      );
    }
    // setSelectedOption(null); // Reset select option to default
  };

  let tempBox = (
    <Menu color={''}>
      <MenuButton
        as={Button}
        // variant='outline'
        mb={4}
        w={'40vw'}
      >
        Select an Option
      </MenuButton>
      <MenuList>
        <MenuItem key={'TempData'}>{'NO Data Yet'}</MenuItem>
      </MenuList>
    </Menu>
  );

  if (data) {
    // let filterOptions = (inputValue) => {
    //   console.log('inputValue: ', inputValue);
    //   return data.data.filter((option) => {
    //     console.log(option);
    //     option.value.toLowerCase().includes(inputValue.toLowerCase());
    //   });
    // };
    tempBox = (
      <Select
        suppressHydrationWarning={true}
        inputId='aria-example-input'
        instanceId={'sdfgxcnh'}
        // options={filterOptions(inputValue)}
        options={data.data}
        value={selectedOption}
        onChange={(selectedOption) => {
          handleOptionClick(selectedOption);
          //   setSelectedOption(selectedOption);
        }}
        // onInputChange={(inputValue) => setInputValue(inputValue)}
        placeholder='Search options'
        // styles={customStyles}
        isClearable
        // oncl
      />
    );
  }

  return <Box>{tempBox}</Box>;
}

// Parent Component
function RecipeParent() {
  const [textBoxValue, setTextBoxValue] = useState(
    'Ingridents Below:\n\nRecipe Below:\n'
  );

  return (
    <Box>
      <h2>Parent Component</h2>
      <SiblingB
        //   setDataFromSiblingB={setDataFromSiblingB}
        setTextData={setTextBoxValue}
        recipeText={textBoxValue}
      />
      <TextComp
        // dataFromSiblingB={dataFromSiblingB}
        recipeText={textBoxValue}
        setTextData={setTextBoxValue}
      />
    </Box>
  );
}

export default RecipeParent;
