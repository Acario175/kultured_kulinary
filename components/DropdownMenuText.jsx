import { useState } from 'react';
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

function DropdownMenuText() {
  const [textBoxValue, setTextBoxValue] = useState(
    'The recipe starts as follows:\n'
  );
  const { data, error } = useSWR('/api/readData', fetcher, {
    revalidateOnMount: true, // Forces the cache to be used and checked before calling the API
  });

  let choices;
  let tempBox = (
    <MenuList>
      <MenuItem key={'TempData'}>{'NO Data Yet'}</MenuItem>
    </MenuList>
  );

  if (data) {
    // const [options] = useState([...data]); // Replace with your options
    // choices = [...data];
    // console.log(data.data);
    tempBox = [
      <MenuList key={'menuList'} maxHeight='40vh' overflowY='auto'>
        {data.data.map((option, index) => (
          // console.log(option.name),
          <MenuItem
            key={option.name + option.id}
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </MenuItem>
        ))}
      </MenuList>,
    ];
  }

  const handleOptionClick = (option) => {
    // console.log(option);
    setTextBoxValue(option.name + ': ' + '\n' + textBoxValue);
  };

  return (
    <Box color={''} display={'flex'} flexDirection='column'>
      <Menu color={''}>
        <MenuButton
          as={Button}
          // variant='outline'
          mb={4}
          w={'40vw'}
        >
          Select an Option
        </MenuButton>
        {tempBox}
        {/* <MenuList>
          {choices.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList> */}
      </Menu>
      <Textarea
        color={'pink'}
        borderColor={'pink'}
        // placeholder='Editable Text'
        value={textBoxValue}
        onChange={(e) => setTextBoxValue(e.target.value)}
        size='lg'
        w={'80vw'}
      />
    </Box>
  );
}

export default DropdownMenuText;
