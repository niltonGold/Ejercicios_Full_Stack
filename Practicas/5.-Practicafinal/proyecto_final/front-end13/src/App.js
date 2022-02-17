import './App.css';
import Login from './pages/login';
import PaginaComanda from './pages/pagina-comanda';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MesasTerraza from './components/pagina-mesas(componetes)/mesas--terraza';
import MesasSala from './components/pagina-mesas(componetes)/mesas--sala';
import MesasBarra from './components/pagina-mesas(componetes)/mesas--barra';
import PaginaMesas from './pages/pagina-mesas';
import { PaginaCobro } from './pages/pagina-cobro';
import ThemeProvider from '../src/theming/theme-provider';
import SwichtButton from '../src/components/swich';
import {useTranslation} from "react-i18next";
import PrivateRoute from './pages/privateRoutes';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Admin from './pages/admin/pagina_principal_Admin';
import Ticket from './pages/tickeFinal';
import PoliticaPrivacidad from './pages/politica_privacidad';
import TerminosCondiciones from './pages/terminos_condiciones';



function App() {

  const [t, i18n] = useTranslation('common');

  return (
    <ThemeProvider > 
      <Router>
          <div className='header_persistente'>

            <div className='boton_swicht'>
              <SwichtButton></SwichtButton>
            </div>

            <div className='botones_en_es'>
              <Button onClick={() => i18n.changeLanguage('en')} variant="contained" size="small">EN</Button>
              <Button onClick={() => i18n.changeLanguage('es')} variant="contained" size="small">ES</Button>
            </div>

          </div>

          <Switch>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute> 
            
            <PrivateRoute path="/pagina_mesas">

                <PaginaMesas></PaginaMesas>
              
                <Route path="/pagina_mesas/mesas_sala">     
                    <MesasSala></MesasSala>
                </Route>

                <Route path="/pagina_mesas/mesas_terraza">
                    <MesasTerraza></MesasTerraza> 
                </Route>

                <Route path="/pagina_mesas/mesas_barra">
                    <MesasBarra></MesasBarra>
                </Route>

            </PrivateRoute>

            <PrivateRoute path="/pagina_comanda/:id">     
                    <PaginaComanda></PaginaComanda>
            </PrivateRoute>

            <PrivateRoute path="/pagina_cobro/:cuentaTotal">     
                    <PaginaCobro></PaginaCobro>
            </PrivateRoute>

            <Route path="/ticket">  
              <Ticket></Ticket>
            </Route>

            <Route path="/politica_privacidad">
                <PoliticaPrivacidad></PoliticaPrivacidad>
            </Route>

            <Route path="/terminos_condiciones">
              <TerminosCondiciones></TerminosCondiciones>
            </Route>

            <Route path="/">
              <Login></Login>  
            </Route> 

          </Switch>  
        
      </Router>
    </ThemeProvider>   

  );
}

export default App;
