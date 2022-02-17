import './style.css';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../theming/theme-context';
import { useContext } from 'react';
import {useTheme} from '@mui/material/styles';

function Header() {
    // devuelve el value de su Provider más cercano
    const [isDark, updateTheme] = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <header style={{backgroundColor: theme.palette.primary.main}} className='header__container'>
            <Switch
                color="secondary"
                checked={isDark}
                onChange={() => updateTheme(!isDark)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </header>
    )
}

export default Header;
