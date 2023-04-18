import { createGlobalStyle } from "styled-components";

export const breakpoints = { first: "875px",
second: "700px",
phone: "450px" };

export default createGlobalStyle`
    :root {
      
    }
    html, body {
        margin: 0;
        margin-top: 0;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2 {
      font-family: 'Oswald', sans-serif;
      color: #fff;
    }
    p, label, input, button {
      font-family: 'Oswald', sans-serif;
    }

`;
