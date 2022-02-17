import { useState } from "react";
import {  ThemeProvider as MuiThemeProvider } from '@mui/material/styles';// a una importancion se le puede cambiar el nombre con el as
import { myTheme, myDarkTheme } from './theme.js'
import { ThemeContext } from "./theme-context.js";
import * as React from 'react';
/**
 * Necesita una variable de estado
 * es el wrapper, es decir la envoltura
 */
export default function ThemeProvider({children}){
    const [isDark, changeTheme] = React.useState(false);

    return(
        //le paso el valor actual y la funcion para cambiar el tema
        <ThemeContext.Provider value={[isDark, changeTheme]}> 
            <MuiThemeProvider theme={isDark ? myDarkTheme : myTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}