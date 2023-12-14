import React, { useState } from 'react';
import Select from 'react-select';

import {
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
      //   console.log(tempText);
      props.setTextData(
        tempText[0] + option.value + ': ' + '\n' + tempText[1] + tempText[2]
      );
      //   props.setFormData({
      //     ...props.formData,
      //     [instructions]:
      //       tempText[0] + option.value + ': ' + '\n' + tempText[1] + tempText[2],
      //   });
    }
  };

  let tempBox = (
    // <Menu color={''}>
    //   <MenuButton as={Button} mb={4} w={'40vw'}>
    //     Select an Option
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem key={'TempData'}>{'NO Data Yet'}</MenuItem>
    //   </MenuList>
    // </Menu>
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
    'Ingridents Below:\n\nRecipe Below:\n'
  );

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // ingredient: '',
    // instructions: 'Ingridents Below:\n\nRecipe Below:\n',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempJson = {
      title: formData.title,
      description: formData.description,
      directions: textBoxValue,
    };
    console.log(tempJson);

    // try {
    //   const response = await fetch('/api/submitRecipe', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   // Handle response accordingly
    // } catch (error) {
    //   // Handle error
    //   console.error('Error:', error);
    // }
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
      {/* <h2>Parent Component</h2>
      <IngrdsDropdown
        //   setDataFromSiblingB={setDataFromSiblingB}
        setTextData={setTextBoxValue}
        recipeText={textBoxValue}
      />
      <TextComp
        // dataFromSiblingB={dataFromSiblingB}
        recipeText={textBoxValue}
        setTextData={setTextBoxValue}
      /> */}
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
          {/* <Select
            name='ingredient'
            value={formData.ingredient}
            onChange={handleIngredientChange}
          >
            <option value='Ingredient 1'>Ingredient 1</option>
            <option value='Ingredient 2'>Ingredient 2</option>
            // Add more options as needed 
          </Select> */}
          <IngrdsDropdown
            //   setDataFromSiblingB={setDataFromSiblingB}
            setTextData={setTextBoxValue}
            recipeText={textBoxValue}
            setFormData={setFormData}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Instructions</FormLabel>
          {/* <Textarea
            name='instructions'
            value={formData.instructions}
            onChange={handleChange}
          /> */}
          <TextComp
            // dataFromSiblingB={dataFromSiblingB}
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
