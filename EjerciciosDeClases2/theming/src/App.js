import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import Paper from '@mui/material/Paper';


import ThemeProvider from './theming/theme-provider';
import Header from './components/header';

function App() {
  

  return (
   <ThemeProvider>
      <Paper style={{ minHeight: '100vh' }}>
        <Header />
        <Grid container justifyContent="space-around">
          <Button variant="contained" color="primary">Hola</Button>
          <Button variant="contained" color="bootcamp">Hola</Button>
          <Alert variant="filled" elevation={6} severity="warning">This is a warning message!</Alert>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
