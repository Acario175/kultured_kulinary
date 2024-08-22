import React, { useState } from 'react';
import Select from 'react-select';

import {
  Textarea,
  //   Menu,
  //   MenuButton,
  //   MenuList,
  //   MenuItem,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
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
        name='directions'
        value={props.recipeText}
        onChange={(e) => props.setTextData(e.target.value)}
        size='lg'
        w={['100%']}
        h={['50vh', '40vh']}
      />
    </Box>
  );
}

// Sibling Component B
function IngrdsDropdown(props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const { data, error } = useSWR('/api/readData', fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  const handleOptionClick = (option) => {
    if (option) {
      const tempText = props.recipeText.split(
        /(\nRecipe Below:\n|Ingredients Below:\n)/
      );
      // console.log(tempText);
      props.setTextData(
        tempText[1] +
          tempText[2] +
          option.value +
          ': ' +
          '\n' +
          tempText[3] +
          tempText[4]
      );
    }
  };

  let tempBox = (
    <Select
      // suppressHydrationWarning={true}
      inputId='aria-example-input'
      instanceId={'sfgxcnh'}
      placeholder='Search options'
      options={{ label: 'No Data', value: 'No Data' }}
    />
  );

  if (data) {
    tempBox = (
      <Select
        // suppressHydrationWarning={true}
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

  return (
    <Box fontSize={'2rem'} w={['70vw', '30vw']}>
      {tempBox}
    </Box>
  );
}

// Parent Component
function RecipeParent() {
  const [textBoxValue, setTextBoxValue] = useState(
    'Ingredients Below:\n\nRecipe Below:\n'
  );

  const [formData, setFormData] = useState({
    title: '',
    rec_description: '',
    // ingredient: '',
    // instructions: 'Ingredients Below:\n\nRecipe Below:\n',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempJson = {
      title: formData.title,
      description: formData.rec_description,
      directions: textBoxValue,
    };
    // console.log(tempJson);

    try {
      const response = await fetch('/api/submitRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tempJson),
      });
      // Handle response accordingly
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleIngredientChange = (e) => {
  //     setFormData({ ...formData, ingredient: e.target.value });
  //   };

  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      // gap={5}
      // bg={'brown'}
      // size={['1.2rem', '2rem']}
      sx={{
        '& form': {
          '& label': {
            fontSize: '2rem', // Apply this to all FormLabels in this form
          },
          '& input': {
            fontSize: '2rem', // Apply this to all Inputs in this form
          },
          '& Textarea': {
            fontSize: '2rem', // Apply this to all Inputs in this form
          },
          '& select': {
            fontSize: '2rem', // Apply this to all Inputs in this form
          },
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <FormControl
          // marginY={2}
          // fontSize={['1.2rem', '20rem']}
          >
            <FormLabel
              // fontSize={['1.2rem', '2rem']}
              display='inline-block'
            >
              Title
            </FormLabel>
            <Input
              // fontSize={['1.2rem', '2rem']}
              borderColor={'#232946'}
              _focus={{ borderColor: '#004643' }}
              _hover={{ borderColor: '#004643' }}
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              w={['80vw', '40vw']}
            />
          </FormControl>
          <FormControl marginY={2}>
            <FormLabel display='inline-block'>Description</FormLabel>
            <Textarea
              name='rec_description'
              type='text'
              value={formData.rec_description}
              onChange={handleChange}
              w={['80vw', '40vw']}
            />
          </FormControl>
          <FormControl>
            <FormLabel display='inline-block'>Ingredients:</FormLabel>

            <IngrdsDropdown
              setTextData={setTextBoxValue}
              recipeText={textBoxValue}
              setFormData={setFormData}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Instructions</FormLabel>

            <TextComp
              recipeText={textBoxValue}
              setTextData={setTextBoxValue}
              setFormData={setFormData}
            />
          </FormControl>
          {/* <Button type='submit' isDisabled> */}
          <Button name='rec_submit' type='submit' mb={2}>
            Submit Recipe
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default RecipeParent;
