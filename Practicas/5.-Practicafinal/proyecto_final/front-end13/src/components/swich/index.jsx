import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../theming/theme-context';
import { useContext } from 'react';
import * as React from 'react';


export default function SwichtButton(){

    const [isDark, updateTheme] = React.useContext(ThemeContext);

    return(
        <div>
        <Switch
            color="primary"
            checked={isDark}
            onChange={() => updateTheme(!isDark)}
            inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    )
}