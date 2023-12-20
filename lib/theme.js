// theme.js

// 1. imports
import { extendTheme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource-variable/merienda';

// import './fonts.css';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. Creating styles
const styles = {
  global: {
    body: {
      bg: '#fec7d7',
      color: '#522d23',
    },
  },
  // global: (props) => ({
  //   body: {
  //     // bg: mode('#f9f4ef', '#041C32')(props),
  //     bg: mode('#cbb393', '#cbb393')(props),
  //     // color: mode('#1C1C1C', '#D2C5B3')(props),
  //     // color: mode('#660000', '#900000')(props),
  //     color: mode('#862e28', '#862e28')(props),
  //   },
  //   h2: 'yellow.500',
  // }),
};

const customHeading = defineStyle({
  baseStyle: {
    // fontWeight: 'thin',
    // fontFamily: 'Oswald',
    // fontSize: '3xl',
    // color: '#cbb393',
  },
  variants: {
    TestTitle: {
      // bg: '#9656a1',
      // color: 'white',
      // _hover: { bg: '#9656a1' },
      // fontSize: '2xl',
      fontFamily: 'Merienda Variable, sans-serif',
      fontSize: '15rem',
      textAlign: 'center',
      height: '90vh',
      lineHeight: '90vh',
      color: '#fcedd8',
      // background: '#d52e3f',
      // font-family: 'Niconne', cursive;
      fontWeight: '700',
      textShadow:
        '5px 5px 0px #eb452b,  10px 10px 0px #efa032,  15px 15px 0px #46b59b,  20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b, 35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b',
    },
  },
});

const customText = defineStyleConfig({
  // The styles all button have in common
  // baseStyle: {
  //   // fontWeight: 'bold',
  //   fontFamily: 'Raleway',

  //   // textTransform: 'uppercase',
  // },
  variants: {
    NavTitle: {
      // bg: '#9656a1',
      // color: 'white',
      // _hover: { bg: '#9656a1' },
      fontSize: '2xl',
      fontFamily: 'Merienda Variable, sans-serif',
    },
  },
});

const components = {
  Heading: customHeading,
  Text: customText,
  Button: {
    // baseStyle: {
    //   fontWeight: 'bold',
    //   borderRadius: 'md',
    //   _hover: { bg: 'teal.500' },
    //   _focus: { boxShadow: 'outline' },
    // },
    variants: {
      primary: {
        bg: '#9656a1',
        color: 'white',
        _hover: { bg: '#D6BCFA', color: '#44337A' },
        w: '200px',
        h: '50px',
        m: '1',
      },
      secondary: {
        bg: 'gray.300',
        _hover: { bg: 'gray.400' },
      },
      testVar: {
        // 'background-color': '#9656a1',
        colorScheme: 'purple',
        height: '48px',
      },
    },
  },
};

// 3. extend the theme
const theme = extendTheme({
  styles,
  config,
  components,
  // fonts: {
  //   body: 'Oswald',
  //   // heading: "Georgia, serif",
  //   // mono: "Menlo, monospace",
  // },
});

export default theme;
