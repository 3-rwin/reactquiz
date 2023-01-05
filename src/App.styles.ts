// npm i styled-components
// npm i styled-components @types/styled-components
import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background_home.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    box-sizing: border-box;
  }

html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-color: rgb(232, 232, 232);

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: black;
  }

  .score {
    color: black;
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 20px;
  }

  h1 {
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    background-size: 100%;
    background-clip: text;
    text-align: center;
    margin: 20px;
  }
  
  .start, .next {
    cursor: pointer;
    padding: 0.75rem 2rem;
    margin: 20px;
    border-radius: 10px;
    border: none;
    background-color: rgb(50, 124, 185);
    color: rgb(255, 214, 157);
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 2px 2px 10px 0px #333;
  }

  .start:hover, .next:hover {
    animation: rise 0.5s ease-in-out forwards;
  }

  @keyframes rise {
    0%   { transform: translateY(0); }
    100%  { transform: translateY(-2px); }
  }
`;