import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';


import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function MesasBarra(){



    const [t, i18n] = useTranslation('common');

    return(
        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', }, mt: 2 }} >

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}>
                    
                    <div>{t('rango.rango')} 1</div>

                    <Link to={`/pagina_comanda/B1`}>
                        <Stack id="B1" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B1</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B2`}>
                        <Stack id="B2" spacing={2}>
                                <Button variant="contained">
                                    <div className='mesa'>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B2</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B3`}>
                        <Stack id="B3" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B3</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B4`}>
                        <Stack id="B4" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B4</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B5`}>
                        <Stack id="B5" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B5</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>


                </Paper>

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                    <div>{t('rango.rango')} 2</div> 

                    <Link to={`/pagina_comanda/B6`}>
                        <Stack id="B6" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B6</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B7`}>
                        <Stack id="B7" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B7</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B8`}>
                        <Stack id="B8" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B8</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B9`}>
                        <Stack id="B9" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B9</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/B10`}>
                        <Stack id="B10" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                        <div>B10</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                </Paper>
        </Box>
    )
}