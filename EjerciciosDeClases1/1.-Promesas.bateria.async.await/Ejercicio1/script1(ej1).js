
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
navigator.getBattery().then( (batteryManager) =>{  
   // mostrar informacion de la bateria en el DOM

        // recupero el p con atributo data-batter-percent
        const percentDom = document.querySelector('[data-battery-percent]');
        
        // recupero el p con atributo data-batter-charging
        const chargingDom = document.querySelector('[data-battery-charging]');

        // meter en los ps sus contenidos
        percentDom.textContent = `${batteryManager.level * 100}%`;
        chargingDom.textContent = batteryManager.charging;
         
})