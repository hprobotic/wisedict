import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  @font-face {
    font-family: Camphor;
    font-weight: 300;
    src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/300-light.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/300-light.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 300;
      font-style: italic;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/300-light-italic.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/300-light-italic.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 400;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/400-regular.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/400-regular.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 400;
      font-style: italic;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/400-regular-italic.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/400-regular-italic.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 500;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/500-medium.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/500-medium.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 500;
      font-style: italic;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/500-medium-italic.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/500-medium-italic.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 600;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/600-bold.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/600-bold.woff) format("woff")
  }

  @font-face {
      font-family: Camphor;
      font-weight: 600;
      font-style: italic;
      src: url(https://d15cqi4lzrc9py.cloudfront.net/fonts/600-bold-italic.woff2) format("woff2"),url(https://d15cqi4lzrc9py.cloudfront.net/fonts/600-bold-italic.woff) format("woff")
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Camphor,Open Sans,Segoe UI,sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
