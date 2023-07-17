import { createGlobalStyle, keyframes } from 'styled-components';

export function rotationBuilder() {
  const rotation = keyframes`
        0% {
             transform: rotate(0deg);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
            opacity: .9
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }`;
  return rotation;
}
export const GlobalStyles = createGlobalStyle`
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        @media(max-width: 1366px){
            html {
                font-size: 76.75%;
                }
        }
        @media(max-width: 1080px){
            html {
                font-size: 75.75%;
                }
        }
        @media(max-width: 720px){
            html {
                font-size: 74%;
                }
        }
        :focus{
            outline: 0;
        }
        body, input-security, select, textarea, button {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            background: #f2f2f2;

        }
        button, a {
            cursor: pointer;
        }
        a{
            color: inherit;
            text-decoration: none;
        }
        .menu-active{
            background-color: #760AB8;
            }
        .spinner {
            animation: ${rotationBuilder()} 1.8s linear infinite;
        }
    `;
