import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function MesasSala(){

    const [t, i18n] = useTranslation('common');

    return(

        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', }, mt: 2 }} >

            <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={4}>
                
                <div>{t('rango.rango')} 1</div>

                <Link to={`/pagina_comanda/S1`}>
                    <Stack id="S1" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S1</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S2`}>
                    <Stack id="S2" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S2</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S3`}>
                    <Stack id="S3" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S3</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S5`}>
                    <Stack id="S4" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S4</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S5`}>
                    <Stack id="S5" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S5</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>


            </Paper>

            <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                <div>{t('rango.rango')} 2</div> 

                <Link to={`/pagina_comanda/S6`}>
                    <Stack id="S6" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S6</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S7`}>
                    <Stack id="S7" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S7</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S8`}>
                    <Stack id="S8" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S8</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S9`}>
                    <Stack id="S9" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S9</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

                <Link to={`/pagina_comanda/S10`}>
                    <Stack id="S10" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                    <div>S10</div>
                                </div>
                            </Button>      
                    </Stack>
                </Link>

            </Paper>
      </Box>

    
    )
}