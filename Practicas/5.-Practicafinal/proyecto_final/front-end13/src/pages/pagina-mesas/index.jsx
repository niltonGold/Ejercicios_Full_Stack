
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from "react-i18next";
import Stack from '@mui/material/Stack';
import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function PaginaMesas(){

    const [t, i18n] = useTranslation('common');
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {  
        
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return(
        <header >

                <AppBar position="static">
                    <Container maxWidth="xm">
                            <Toolbar disableGutters>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                                    
                                    <IconButton  size="large"  aria-label="account of current user"  aria-controls="menu-appbar"  aria-haspopup="true"  onClick={handleOpenNavMenu}  color="inherit">
                                            <MenuIcon />
                                    </IconButton>
                                    
                                    <Menu id="menu-appbar"  anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}  keepMounted  transformOrigin={{ vertical: 'top', horizontal: 'left',}}  open={Boolean(anchorElNav)}   onClose={handleCloseNavMenu}  sx={{ display: { xm: 'block', md: 'none' }, }} >
                                    {/*contenido del menu pequeño */}
                                            <Stack className='pagina_mesas_btnGroup' spacing={1} direction="column">
                                            
                                                <Link to="/pagina_mesas/mesas_sala">
                                                    <Button className='pagina_mesa--btn' onClick={handleCloseNavMenu} variant="contained">
                                                        {t('pagina_mesas.sala')} 
                                                    </Button>
                                                </Link>
                                                <Link to="/pagina_mesas/mesas_terraza">
                                                    <Button className='pagina_mesa--btn' onClick={handleCloseNavMenu}  variant="contained">
                                                        {t('pagina_mesas.terraza')} 
                                                    </Button>
                                                </Link>

                                                <Link to="/pagina_mesas/mesas_barra">
                                                    <Button className='pagina_mesa--btn' onClick={handleCloseNavMenu}  variant="contained">
                                                        {t('pagina_mesas.barra')} 
                                                    </Button>
                                                </Link>

                                            </Stack>

                                    </Menu>

                                </Box>


                                <Box  className='mesas_links' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>

                                        <Stack spacing={3} direction="row">
                                            <Link to="/pagina_mesas/mesas_sala">
                                                <Button variant="contained">{t('pagina_mesas.sala')}hhh</Button>
                                            </Link>

                                            <Link to="/pagina_mesas/mesas_terraza">
                                                <Button variant="contained">{t('pagina_mesas.terraza')} </Button>
                                            </Link>

                                            <Link to="/pagina_mesas/mesas_barra">
                                                <Button variant="contained">{t('pagina_mesas.barra')} </Button>
                                            </Link>
                                        </Stack>

                                </Box>


                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                                    keepMounted
                                    transformOrigin={{ vertical: 'top',  horizontal: 'right',}}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu} >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                    </Container>
                </AppBar> 

        </header>
    )
}