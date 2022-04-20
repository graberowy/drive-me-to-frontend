import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
      type: 'dark',
      colorBackground: '#262626',
      colorBackgroundBody: '#333333',
      colorText: '#ffffff',
    //   colorTextAdditional: '#999999',
    //   colorHover: '#38373f',
    //   colorBorder: '#333246',
    //   colorIcon: '#605f7b',
    //   imgInvert: 'invert(100%)',
    //   colorFieldsBorder: ' #33333a',
    //   colorBubble: 'rgba(68, 79, 97, 0.65)',
    //   colorBubbleActive: 'rgba(92, 104, 156, 0.6)',
    //   colorScrollbar: '#606071',
    //   colorFitness: '#ffffff',
      colorLink: '#b01fe0',
      colorAlwaysDark: "#38373f",
    },
  });
  
  export const lightTheme = createTheme({
    palette: {
      type: 'light',
      colorBackground: '#eff3fb',
      colorBackgroundBody: '#f2f4f7',
      colorText: '#646777',
    //   colorTextAdditional: '#646777',
    //   colorHover: '#fafbfe',
    //   colorBorder: '#eff1f5',
    //   colorIcon: '#dddddd',
    //   imgInvert: 'invert(0%)',
    //   colorFieldsBorder: '#f2f4f7',
    //   colorBubble: 'rgba(242, 244, 247, 0.65)',
    //   colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
    //   colorScrollbar: '#B4BFD0',
    //   colorFitness: '#646777',
      colorLink: '#b01fe0',
      colorAlwaysDark: "#38373f",
    },
  });
  
  const themes = {
    dark: darkTheme,
    light: lightTheme
  };
  
  export default themes;