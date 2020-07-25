import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #ffffff;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
