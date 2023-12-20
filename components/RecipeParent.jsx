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
      console.log(tempText);
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
      suppressHydrationWarning={true}
      inputId='aria-example-input'
      instanceId={'sfgxcnh'}
      placeholder='Search options'
      options={{ label: 'No Data', value: 'No Data' }}
    />
  );

  if (data) {
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

  return <Box w={['70vw', '20vw']}>{tempBox}</Box>;
}

// Parent Component
function RecipeParent() {
  const [textBoxValue, setTextBoxValue] = useState(
    'Ingredients Below:\n\nRecipe Below:\n'
  );

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // ingredient: '',
    // instructions: 'Ingredients Below:\n\nRecipe Below:\n',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempJson = {
      title: formData.title,
      description: formData.description,
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
    <Box display={'flex'} flexDir={'column'} gap={5}>
      <form onSubmit={handleSubmit}>
        <FormControl marginY={2}>
          <FormLabel display='inline-block'>Title</FormLabel>
          <Input
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
            name='description'
            value={formData.description}
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
        <Button type='submit' isDisabled>
          Submit Recipe
        </Button>
      </form>
    </Box>
  );
}

export default RecipeParent;
