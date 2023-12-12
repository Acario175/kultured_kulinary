import { useState } from 'react';
// import Select from 'react-select';
import { useTheme } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  // Add more options as needed
];

function SearchableMenu() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();

  const handleOptionClick = (selectedOption) => {
    console.log(selectedOption.value);
    setSelectedOption(null); // Reset select option to default
  };

  const filterOptions = (inputValue) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.gray[100],
    }),
  };

  return (
    <Select
      suppressHydrationWarning={true}
      inputId='aria-example-input'
      instanceId={'sdfgxcnh'}
      options={filterOptions(inputValue)}
      value={selectedOption}
      onChange={(selectedOption) => {
        handleOptionClick(selectedOption);
        setSelectedOption(selectedOption);
      }}
      onInputChange={(inputValue) => setInputValue(inputValue)}
      placeholder='Search options'
      styles={customStyles}
      isClearable
    />
  );
}

// export default SearchableInputWithOptions;

export default SearchableMenu;
