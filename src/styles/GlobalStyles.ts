import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset}
    *{
      box-sizing: border-box;
      font-family: Spoqa Han Sans;
    }
    html, body{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
    }
    #root{
      min-width: 360px;
      max-width: 400px;
      width: 100%;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    .add-button {
      margin-bottom: 24px;
    }
`;

export default GlobalStyles;
