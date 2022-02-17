import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const myTheme = createTheme({
    palette: {
      primary: {
        main: '#673a2d'
      },
      secondary: {
        main: red[800],
        dark: '#8e0000'
      },
      bootcamp: {
        main: '#23a45f'
      },
      warning: {
        main: '#000000'
      }
    },
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              borderRadius: '30%',
            },
          },
        },
        MuiAlert: {
            styleOverrides: {
                message:{
                    color: red[900],
                    fontSize: '30px'
                }
            }
        }
      },
  });
  
export const myDarkTheme = createTheme({
    palette: {
      mode: 'dark',
      warning: {
        main: '#FF0000'
      }
    }
  });
  