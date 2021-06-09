import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v27-latin-300.woff2') format('woff2'),

}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v27-latin-regular.woff2') format('woff2'),

}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v27-latin-700.woff2') format('woff2'),

}
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.white} inset;
    }
    /* Cor do texto do autocomplete */
    input:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors['purple.500']} !important;
    }
  }
`}


`

export default GlobalStyles
