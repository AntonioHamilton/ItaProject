import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    }
    
    html, body, #root, .App {
        height: 100%;
        background-color: #fff;
        color: #181313;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;