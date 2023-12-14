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
    fontFamily: 'Oswald',
    // fontSize: '3xl',
    // color: '#cbb393',
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
  // Heading: customHeading,
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
        // 'border-radius': '4px',
        // 'border-width': '0',
        // 'box-shadow':
        //   'rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset',
        //   box-sizing: border-box;
        //   color: #36395A;
        //   cursor: pointer;
        //   display: inline-flex;
        //   font-family: "JetBrains Mono",monospace;
        height: '48px',
        //   justify-content: center;
        //   line-height: 1;
        //   list-style: none;
        //   overflow: hidden;
        //   padding-left: 16px;
        //   padding-right: 16px;
        //   position: relative;
        //   text-align: left;
        //   text-decoration: none;
        //   transition: box-shadow .15s,transform .15s;
        //   user-select: none;
        //   -webkit-user-select: none;
        //   touch-action: manipulation;
        //   white-space: nowrap;
        //   will-change: box-shadow,transform;
        //   font-size: 18px;
      },
    },
  },
};
// <!-- HTML !-->
// <button class="button-52" role="button">Button 52</button>

// /* CSS */
// .button-52 {
//   font-size: 16px;
//   font-weight: 200;
//   letter-spacing: 1px;
//   padding: 13px 20px 13px;
//   outline: 0;
//   border: 1px solid black;
//   cursor: pointer;
//   position: relative;
//   background-color: rgba(0, 0, 0, 0);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-52:after {
//   content: "";
//   background-color: #ffe54c;
//   width: 100%;
//   z-index: -1;
//   position: absolute;
//   height: 100%;
//   top: 7px;
//   left: 7px;
//   transition: 0.2s;
// }

// .button-52:hover:after {
//   top: 0px;
//   left: 0px;
// }

// @media (min-width: 768px) {
//   .button-52 {
//     padding: 13px 50px 13px;
//   }
// }

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
