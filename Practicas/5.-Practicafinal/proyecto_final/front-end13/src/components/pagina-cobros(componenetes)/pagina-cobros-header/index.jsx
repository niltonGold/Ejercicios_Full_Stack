import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useTranslation} from "react-i18next";

export default function PaginaCobrosHeader() {
  const [t, i18n] = useTranslation('common');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('pagina_cobros.pagina_cobros')}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}