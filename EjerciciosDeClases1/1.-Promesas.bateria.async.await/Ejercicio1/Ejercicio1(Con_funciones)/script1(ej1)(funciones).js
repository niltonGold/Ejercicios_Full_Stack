
// Ejercicio 1.- Obtener la informacion de la bateria utilizando promesas
//    y pintar en el HTML si está cargando y que porcentaje de
//    batería queda
//


// 1.-Obtener el porcentaje de bateria
//    esto se obtiene con getBattery,
//    el getBattery devuelve todo tipo de informacion relacionado
//    con la bateria,
//    getBattery devuelve una promesa
//   como es una promesa lo que devuelve entonce uso then para gestionar
//   es promesa



// funcion que pinta en el dom el nivel de la bateria
function drawBatteryLevel(batteryLevel){
        const percentDom = document.querySelector('[data-battery-percent]');
        percentDom.textContent = `${batteryLevel*100}%`;
} 


// funcion que pinta en el dom true se la bateria se esta cargando y false
// si no se esta cargando, es decir si esta enchufada o no
function drawCharging(charging){
        const chargingDom = document.querySelector('[data-battery-charging]');
        chargingDom.textContent = charging;
}


navigator.getBattery().then( (batteryManager) =>{  

        drawBatteryLevel(batteryManager.level);

        drawCharging(batteryManager.charging); 

       // Eventos
        // Evento que se escuchara cuando se enchufa o desenchufa
        batteryManager.addEventListener('chargingchange', () =>{
                drawCharging(batteryManager.charging);
        });

        // Evento que se escuchara El porcentaje de la bateria cambie
        batteryManager.addEventListener('levelchange', () =>{
                drawBatteryLevel(batteryManager.level);
        });
        
})


