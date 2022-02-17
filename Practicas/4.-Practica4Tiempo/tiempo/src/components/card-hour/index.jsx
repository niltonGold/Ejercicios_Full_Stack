import './style.css'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

export default function CardHour(props){


        function prueba(i){
          let st;
                if ( i<9){
                    st = `${0}${i}:${0}${0}`;
                }else{
                    st = `${i}:${0}${0}`;
                    if(i===24){
                        st = `${0}${0}:${0}${0}`;
                    }
                }
          return st;
        }



        function kelviACelsius(temp){
              return temp-273.15;
        }




        return (
        //   <Card sx={{ minWidth: 65, maxWidth: 65, height: 150, bgcolor: 'background.paper' }}>

        <Fragment> 

        {
          props.array.map( (e,i) =>
          
  


                <CardContent >
                  <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {/* <div>{props.array}</div> */}
                    {/* 00:00 */}
                    {prueba(i)}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    icono
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* 88888ºC */}
                    {kelviACelsius(e).toFixed(0)+' ºC'}
                  </Typography>
                </CardContent>


              )
        }
        </Fragment>
        //   </Card>
        );
      }
















//     return  <div className=" hour__container">
//                 <p>{props.data.hora}</p>
//                 <p>luna</p>
//                 <p>{props.data.grados}</p>
            
//              </div>

// }