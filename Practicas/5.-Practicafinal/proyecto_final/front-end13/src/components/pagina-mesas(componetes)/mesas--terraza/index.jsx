import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";



export default function MesasTerraza(){

    const [t, i18n] = useTranslation('common');

    return(
        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', }, mt: 2  }} >

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}>
                    
                    <div>{t('rango.rango')} 1</div>
                    <Link to={`/pagina_comanda/T1`}>
                        <Stack id="T1" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T1</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T2`}>
                        <Stack id="T2" spacing={2}>
                                <Button variant="contained">
                                    <div className='mesa'>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T2</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T3`}>
                        <Stack id="T3" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T3</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T4`}>
                        <Stack id="T4" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T4</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T5`}>
                        <Stack id="T5" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T5</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>


                </Paper>

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                    <div>{t('rango.rango')} 2</div> 

                    <Link to={`/pagina_comanda/T6`}>
                        <Stack id="T6" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T6</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T7`}>
                        <Stack id="T7" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T7</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T8`}>
                        <Stack id="T8" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T8</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T9`}>
                        <Stack id="T9" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T9</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                    <Link to={`/pagina_comanda/T10`}>
                        <Stack id="T10" spacing={2}>
                                <Button variant="contained">
                                    <div>
                                        <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                        <div>T10</div>
                                    </div>
                                </Button>      
                        </Stack>
                    </Link>

                </Paper>
        </Box>
    )
}