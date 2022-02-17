
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

import Stack from '@mui/material/Stack';

import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';//sala
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';//barra
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';//terraza


import './style.css';

import React, { useState } from "react";
import {  Link, useParams } from "react-router-dom";


const pages = ['S', 'T', 'B'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function PaginaComandaHeader(){

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
  

    const [mostrarMesasSala, setMostrarMesasSala] = useState('icono--hidden');
    const [mostrarMesasBarra, setMostrarMesasBarra] = useState('icono--hidden');
    const [mostrarMesasTerraza, setMostrarMesasTerraza] = useState('icono--hidden');

    let { id } = useParams();
    console.log(id);

    function TipoMesa(id){
        if( id.id.charAt(0) === 'S'){
            setMostrarMesasSala('');
        }
        if( id.id.charAt(0) === 'B'){
            setMostrarMesasBarra('');
        }
        if( id.id.charAt(0) === 'T'){
            setMostrarMesasTerraza('');
        }
    }

    React.useEffect( ()=>{
        TipoMesa({id});
    },[{id}] )
    


    return(
        <header className="header_container">
            
                <AppBar position="static">
                   
                    <Container maxWidth="xm">
                            <Toolbar disableGutters>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit">
                                            <MenuIcon />
                                    </IconButton>
                                    <Menu   id="menu-appbar"  anchorEl={anchorElNav}   anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}  keepMounted  transformOrigin={{ vertical: 'top', horizontal: 'left',}}  open={Boolean(anchorElNav)}  onClose={handleCloseNavMenu}  sx={{ display: { xm: 'block', md: 'none' }, }} >

                                                <Stack spacing={3} direction="column">
                                                    
                                                    <Link to="/mesas_sala">
                                                        <Button onClick={handleCloseNavMenu} variant="contained">
                                                            {pages[1]} 
                                                        </Button>
                                                    </Link>
                                                    
 
                                                    <Link to="/mesas_Terraza">
                                                        <Button onClick={handleCloseNavMenu}  variant="contained">
                                                            {pages[1]}
                                                        </Button>
                                                    </Link>

                                                    <Link to="/mesas_barra">
                                                        <Button onClick={handleCloseNavMenu}  variant="contained">
                                                            {pages[2]}
                                                        </Button>
                                                    </Link>

                                                </Stack>  

                                    </Menu>
                                </Box>

                                {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}

                                

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                                
                                         <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar  alt="Remy Sharp">
                                                
                                                <div className={mostrarMesasSala} ><TableBarOutlinedIcon/></div>
                                                <div className={mostrarMesasBarra} ><LocalBarOutlinedIcon/></div>
                                                <div className={mostrarMesasTerraza} ><TableRestaurantOutlinedIcon/></div>
                                            </Avatar>   
                                            <div>{id}</div>
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