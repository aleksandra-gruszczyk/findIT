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
  // white: 'gold', // used for various component backgrounds with light scheme
  // black: 'purple', // used for text with light scheme
  // https://mantine.dev/theming/colors/
  // https://mantine.dev/theming/theme-object/#colors
  colors: {
    customLight: [
      '#dafff0',
      '#adffd8',
      '#7cffc1',
      '#4affa8',
      '#1aff91',
      '#00e678',
      '#00b35c',
      '#008041',
      '#004e26',
      '#001c08',
    ],
  },
  // You can add your own extra theme styles to reference on
  // a theme object by adding them to this `other` key:
  other: {
    logo: {
      text: '#ff743f',
      symbol: '#0e87f9',
    },
  },
}

const darkTheme = {
  ...baseTheme,
  // https://mantine.dev/theming/theme-object/#colorscheme
  colorScheme: 'dark',
  primaryColor: 'hotpink',
  primaryShade: 3,
  // https://mantine.dev/theming/theme-object/#colors
  // https://mantine.dev/theming/colors/
  white: '#ffe2f4', // seems to be used for some elements color style in dark scheme
  black: 'green', // Seems ignored in dark scheme?
  colors: {
    // https://mantine.dev/guides/dark-theme/#colors
    // Some mantine components are hard-coded to use the `dark` color in dark scheme,
    // while other mantine components may still use the `primaryColor` choice.
    // You can override the `dark` color shades here:
    // dark: [],
    hotpink: [
      '#ffe2f4',
      '#ffb2da',
      '#ff80bf',
      '#fe4ea6', //this one
      '#fd218c',
      '#e40d73',
      '#b20559',
      '#800040',
      '#4e0026',
      '#1f000f',
    ],
  },
  components: {
    Card: {
      defaultProps: {},
    },
  },
  // Let's change our logo svg colours for dark mode!
  other: {
    logo: {
      text: 'gold',
      symbol: 'hotpink',
    },
  },
}
