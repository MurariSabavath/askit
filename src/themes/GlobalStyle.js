import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.bg};
        font-family: Arial, Helvetica, sans-serif;
        color: ${({ theme }) => theme.text};
        padding: 0;
        margin: 0
    }

    * {
        box-sizing: border-box;
    }
 
`;

export const lightTheme = {
  bg: "#ffffff",
  text: "#27313c",
  textSoft: "#444b53",
  textStrong: "#4a4a4a",
  sublte: "#f7f9fd",
  border: "#dde8f6",
  shadow: "#aac1dc",
  input: "#ffffff",
  outline: "#e6b2bb",
  mark: "#e3417114",
  special: "#e34171",
  specialBg: "#e84575",
  specialText: "#ffffff",
  specialShadow: "#744f56",
  specialMark: "#ffffff14",
  light: "#fcf1f3",
  dark: "#5d3e44",
  bgContrast: "#ffffff",
  textContrast: "#192129",
  textSoftContrast: "#1d2025",
  textStrongContrast: "#4a4a4a",
  sublteContrast: "#f7f9fd",
  borderContrast: "#a6b7cc",
  shadowContrast: "#8a9eb6",
  inputContrast: "#ffffff",
  outlineContrast: "#e19ca9",
  markContrast: "#af305629",
  specialContrast: "#af3056",
  specialBgContrast: "#b53259",
  specialTextContrast: "#ffffff",
  specialShadowContrast: "#2d1d20",
  specialMarkContrast: "#ffffff29",
  lightContrast: "#fcf1f3",
  darkContrast: "#5d3f44",
  hoverBg: "rgb(229, 229, 229)",
};

export const darkTheme = {
  bg: "#202020",
  text: "#dcdfe5",
  textSoft: "#b8bcc2",
  textStrong: "#bbbbbb",
  sublte: "#212529",
  border: "#26313d",
  shadow: "#000000",
  input: "#1c1c1c",
  outline: "#dc8698",
  mark: "#d7678114",
  special: "#d76781",
  specialBg: "#a3425a",
  specialText: "#e4dedf",
  specialShadow: "#2a1a1d",
  specialMark: "#e4dedf14",
  light: "#edccd1",
  dark: "#452f33",
  bgContrast: "#202020",
  textContrast: "#edeff2",
  textSoftContrast: "#eeeff0",
  textStrongContrast: "#bbbbbb",
  sublteContrast: "#212529",
  borderContrast: "#4a515b",
  shadowContrast: "#000000",
  inputContrast: "#1c1c1c",
  outlineContrast: "#db8194",
  markContrast: "#e19ca929",
  specialContrast: "#d76781",
  specialBgContrast: "#853449",
  specialTextContrast: "#f1eeef",
  specialShadowContrast: "#000000",
  specialMarkContrast: "#f1eeef29",
  lightContrast: "#f4dfe2",
  darkContrast: "#452f33",
  hoverBg: "rgb(70, 70, 73)",
};

export default GlobalStyles;
