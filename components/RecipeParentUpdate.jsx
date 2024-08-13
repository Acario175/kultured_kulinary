import React, { useState, useEffect } from 'react';
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

const fetcher = async ([url, title]) =>
  fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title),
  }).then((res) => res.json());

const fetcherGet = (url) => fetch(url).then((res) => res.json());

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

  const { data, error } = useSWR('/api/readData', fetcherGet, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  const handleOptionClick = (option) => {
    console.log(option);
    console.log(props.recipeText);

    if (option) {
      const tempText = props.recipeText.split(
        /(\nRecipe Below:\n|Ingredients Below:\n)/
      );
      console.log(tempText);
      let onClickTextBox = `Ingredients Below:\n${tempText[2]}\n${option.value}:\nRecipe Below:\n${tempText[4]}
      `;
      console.log(onClickTextBox);
      props.setTextData(
        // tempText[1] +
        //   tempText[2] +
        //   option.value +
        //   ': ' +
        //   '\n' +
        //   tempText[3] +
        //   tempText[4]
        onClickTextBox
      );
    }
  };

  let tempBox = (
    <Select
      suppressHydrationWarning={true}
      inputId='aria-example-input'
      instanceId={'sfgxcnh'}
      placeholder='No options'
      options={{ label: 'No Data', value: 'No Data' }}
    />
  );

  // console.log(data);
  if (data) {
    tempBox = (
      <Select
        suppressHydrationWarning={true}
        inputId='aria-example-input'
        instanceId={'sdfgxcnh'}
        // placeholder='Search options'
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
function RecipeParent(props) {
  // console.log(props.data);

  const { data, error } = useSWR(['/api/loneRecipe', props.data], fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
    initialData: 'No Data',
  });

  let tempTextBox = '';

  console.log(data);

  //   console.log(`
  // Ingredients Below:
  // ${data.ingredients}
  // Recipe Below:
  // ${data.directions}
  //     `);

  const [textBoxValue, setTextBoxValue] = useState('Incoming  Data');
  const [formData, setFormData] = useState({
    title: 'Loding Title',
    description: 'Loding Description',
    // ingredient: '',
    // instructions: 'Ingredients Below:\n\nRecipe Below:\n',
  });

  // if (props.data) {
  useEffect(() => {
    // console.log('hi');
    // console.log(data);
    if (data) {
      // console.log(data);
      tempTextBox = `Ingredients Below:\n${data.ingredients}\nRecipe Below:\n${data.directions}
          `;
      setFormData({
        title: data.title,
        description: data.description,
      });
      setTextBoxValue(tempTextBox);
    }
  }, [data]);
  // }

  // useEffect(() => {
  //   setFormData({ title: props.data.title, description: 'Loding Description' });
  // }, [props.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempJson = {
      title: formData.title,
      description: formData.description,
      directions: textBoxValue,
    };
    // console.log(tempJson);

    try {
      const response = await fetch('/api/updateRecipe', {
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
        <Button type='submit'>Submit Recipe</Button>
      </form>
    </Box>
  );
}

export default RecipeParent;
