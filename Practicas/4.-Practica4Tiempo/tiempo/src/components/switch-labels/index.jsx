import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { useContext, useState } from 'react';
import {GradosContext} from '../../context';
import FormControlLabel from '@mui/material/FormControlLabel';


const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

export default function SwitchLabels() {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' }} };
  
  const[grados, setGrados] = useContext(GradosContext); // Contexto Celsius/Farenheit
    const[grado, setGrado]  = useState('ºCfff')   // Label ºC ºF
    const handleChange = ()=>{
       grados === 'celsius' ? setGrados('farenheit') : setGrados('celsius')
       grado === 'ºC' ? setGrado('ºF') : setGrado('ºC')
       console.log(grados);
    }

  return (
    <div>
        <FormControlLabel
          value="start"
          control= {<SwitchUnstyled  onChange={handleChange} component={Root} {...label} />}
          label={grado}
          labelPlacement="start"
        />
          
         
      
    </div>
  );
}