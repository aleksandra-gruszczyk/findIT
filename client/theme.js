// https://mantine.dev/theming/theme-object/#usage
export const getTheme = (colorScheme = 'light') =>
  colorScheme === 'light' ? lightTheme : darkTheme

// Common base styles that both themes can inherit,
// and then override if needed:
const baseTheme = {
  fontFamily: 'Noto Sans',
  headings: { fontFamily: 'Noto Sans' },
}

const lightTheme = {
  ...baseTheme,
  // https://mantine.dev/theming/theme-object/#colorscheme
  colorScheme: 'light',
  // https://mantine.dev/theming/colors/#primary-color
  // default is blue shades:
  primaryColor: 'customLight',
  // These two (white and black) are not referencing theme color shades,
  // but specific CSS color values directly:
  //white: '#F0EBD8', // used for various component backgrounds with light scheme
  black: '#363B6E', // used for text with light scheme
  // https://mantine.dev/theming/colors/
  // https://mantine.dev/theming/theme-object/#colors
  colors: {
    customLight: [
      '#C49DB3',
      '#F6F3E8',
      '#E7C7B4',
      '#F7DEC0',
      '#F0EBD8',
      '#50B0C8',
      '#2C95B5',
      '#115D81', //button color on the landing page
      '#495791',
    ],
  },
  // You can add your own extra theme styles to reference on
  // a theme object by adding them to this `other` key:
  other: {
    logo: {
      text: '#495791',
      symbol: '#F7DEC0',
    },
  },
}

const darkTheme = {
  ...baseTheme,
  // https://mantine.dev/theming/theme-object/#colorscheme
  colorScheme: 'dark',
  primaryColor: 'cyan',
  // https://mantine.dev/theming/theme-object/#colors
  // https://mantine.dev/theming/colors/
  white: 'yellow', // seems to be used for some elements color style in dark scheme
  black: 'green', // Seems ignored in dark scheme?
  colors: {
    // https://mantine.dev/guides/dark-theme/#colors
    // Some mantine components are hard-coded to use the `dark` color in dark scheme,
    // while other mantine components may still use the `primaryColor` choice.
    // You can override the `dark` color shades here:
    dark: [
      '#fae6ff', // shade 0 - used for text color in dark scheme
      '#e7b8fb',
      '#d38bf5', // dimmed text shade
      '#2AC9DE', // placeholder text in the input fields
      '#b02fe9',
      '#9617d0',
      '#7510a3',
      '#530a75', // shade 7 - used for body background color in dark scheme
      '#330548',
      '#14001c',
    ],
  },
  // Let's change our logo svg colours for dark mode!
  other: {
    logo: {
      text: 'cyan',
      symbol: '#fe87f9',
    },
  },
}
