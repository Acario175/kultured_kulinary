'use client';
import { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu>
      <MenuButton as={Button} onClick={() => setIsOpen(!isOpen)}>
        Click to Open Dropdown
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log('Option 1 clicked')}>
          Option 1
        </MenuItem>
        <MenuItem onClick={() => console.log('Option 2 clicked')}>
          Option 2
        </MenuItem>
        <MenuItem onClick={() => console.log('Option 3 clicked')}>
          Option 3
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
