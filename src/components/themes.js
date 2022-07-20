import { createGlobalStyle } from "styled-components";
import Navbar from './Navbar.js'

export const lightTheme = {
 
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  
  body: "#000",
  
  
 
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;