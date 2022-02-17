// Ejercicio 2.- Repetir el ejercicio 1 pero utilizando async/Await


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



async function drawBatteryStatus(){
    // como el getBattery devuelve una promesa puedo usar el await
    const batteryManager = await navigator.getBattery();
    drawBatteryLevel(batteryManager.level);
    drawCharging(batteryManager.charging);
}

drawBatteryStatus();








