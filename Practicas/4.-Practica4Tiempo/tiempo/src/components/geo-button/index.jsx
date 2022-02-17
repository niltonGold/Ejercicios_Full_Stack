import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TextField from '@mui/material/TextField';// el texField es el input
import pinAndSearch27 from '../../icons/pinAndSearch27.svg'
import { handleBreakpoints } from '@mui/system';
import { ConstructionOutlined } from '@mui/icons-material';
import CardActualDay from '../card-actual-day';
import DaySelector from '../day-selector';
import SwitchLabels from '../switch-labels'

import './style.css';


export default function GeoButton() {

  const [ ciudad, updateCiudad ] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const city = e.target.city.value;
    updateCiudad(city);
}

  return (
<React.Fragment>
    <div className="div_principal">
            <PopupState variant="popover" popupId="demo-popup-menu" >
              {(popupState) => (
                <React.Fragment>
                  <div>
                    <div className="div_buscardor_cel_faren">
                          <div>
                              <Button variant="text" {...bindTrigger(popupState)}>
                              <img src={pinAndSearch27} alt="geolocalizacion"/>
                              </Button>
                          </div>

                          <div>
                              <SwitchLabels></SwitchLabels>
                          </div>
                    </div>

                    <div>
                      <Menu {...bindMenu(popupState)} anchorOrigin={{vertical: 'top',horizontal: 'right',}} >
                        
                        <MenuItem sx={{fontSize:'12px'}} disableGutters>

                        <form onSubmit={handleSubmit}>
                            <TextField name="city" id="standard-basic" label="Searchxxx" variant="outlined" size='small'/>
                            {/* <button type="submit">Enviar</button> */}
                        </form>    
                        </MenuItem>
                      
                        {/* <MenuItem sx={{fontSize:'12px'}} disableGutters onClick={popupState.close}>Ubicación actual</MenuItem> */}

                      </Menu>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </PopupState>

            <div className="parte_inferior">
                <div>    
                <CardActualDay city={ciudad}></CardActualDay>
                </div>

                {/* <div>
                <DaySelector></DaySelector>
                </div> */}
            </div> 
     </div>           
</React.Fragment>

  );
}