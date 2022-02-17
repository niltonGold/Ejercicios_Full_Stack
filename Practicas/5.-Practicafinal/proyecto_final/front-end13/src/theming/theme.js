import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import { BlueGrey } from '@mui/material/colors';
import { typography } from '@mui/system';



 export const myTheme = createTheme({
        palette:{ 

                    primary:{
                        main: amber[500],
                        dark:'#c79100' 
                    },

                    secondary:{
                        main: blue[700],
                        dark:'#0069c0'  
                    },
                    ternary:{
                        main: blue[100],
                        dark:'#8aacc8'  
                    },

                    

        }


});


export const myDarkTheme = createTheme({
        palette:{


                primary:{
                    main: indigo[500],
                    dark: '#002984',
                  },

                secondary:{
                    main: red[500],
                    dark:'#e91e63'  
                },

                ternary:{
                    main: blue[700],
                    dark:'#004ba0'  
                },

        }
});