export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700
    }
  },

  colors: {
    primary: ' #7B95DE',
    secondary: '#342EAF',
    white: '#fafafa',
    black: '#080A19',
    'purple.10': '#D9DADD',
    'purple.100': '#B88AD2',
    'purple.500': '#b466c8',
    'purple.700': '#352E57',
    'purple.600': '#4A407A',
    'purple.800': '#9200FC',
    'purple.900': '#22013A',
    'gray.50': ' #EAEAEA',
    'gray.100': '#8f8f8f',
    'gray.200': '#2e2f42',
    success: '#149414',
    error: '#D00000'
  },
  spacings: {
    xxxsmall: '0.2rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
