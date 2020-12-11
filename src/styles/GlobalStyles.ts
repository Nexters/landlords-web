import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset}
    *{
      box-sizing: border-box;
      font-family: Spoqa Han Sans;
    }
    html, body, #root{
      width: 100%;
      height: 100%;
      background-color: #ffffff;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
`;

export default GlobalStyles;
