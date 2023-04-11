import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Newsreader", serif;
}
html {
  width: auto;
}
body {
  max-width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
`;
