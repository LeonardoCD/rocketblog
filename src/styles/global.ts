import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    /* font-size: ; */

    /* FontSizes */
    --large: 2rem; // 32px
    --bigger: 1.5rem; // 24px
    --big: 1.125rem; // 18px
    --default: 1rem; // 16px
    --medium: 0.875rem; // 14px
    --small: 0.75rem; // 12px
    --smaller: 0.6875rem; // 11px
    --tiny: 0.625rem; // 10px

    /* Colors */
    --purple-bg: #290742;
    --dark-bg: #170027;
    --button-bg: #9e6dc2;
    --white: #fff;
    --light-purple: #fbf6ff;
    --green: #4fff4b;

    /* Containers */
    --container: 80rem;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--light-purple);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  input {
    outline: none;
  }
  
  ul {
    list-style-type: none;
  }
`;

