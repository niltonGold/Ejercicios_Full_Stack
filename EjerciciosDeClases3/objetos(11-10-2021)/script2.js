// let coche1 = {
//     marca : `nova`,
//     modelo : `delorian`,
//     matricula : `fresh`,
//     ruedas : 4,
//     color : `plateado`,
//     velocidad : `35km/h`,
//     itv : false,
// }

// if ( coche1.itv ) {
//     document.write(`<p>ITV pasada</p>`);
// } else {
//     document.write(`<p>ITV NO pasada</p>`);
// }


// document.write(`<p>Velocidad anterior ${coche.velocidad}</p>`);
// coche.velocidad = `50km/h`;
// document.write(`<p>Nueva Velocidad ${coche.velocidad}</p>`);

document.write(`<p>1</p>`);
        let objeto1 = {
            numero:33,
        }
        console.log(objeto1.numero);
        console.log(objeto1);

        let objeto11 = {
            caracter: 'hola',
            acierto: true,
            desconocido: null,
            nodefinido: undefined,
            array: [1,2,3],
            fun: function () {
                let num = 2;
                console.log(num);
            }
        }
        console.log(objeto11.caracter);
        console.log(objeto11.acierto);
        console.log(objeto11.desconocido);
        console.log(objeto11.nodefinido);
        console.log(objeto11.array);
        objeto11.fun();
        console.log(objeto11);

        delete objeto11.caracter;
        delete objeto11.acierto;
        delete objeto11.desconocido;
        delete objeto11.nodefinido;
        delete objeto11.array;
        delete objeto11.fun;

        console.log(objeto11);


        document.write(`<p>2</p>`);
        let coche2 = {
            marca: `nova`,
            modelo:`escarabajo`,
            matricula:`A1`,
    velocidad:`30km/h`,
    estado: true,
}

document.write(`<p>3</p>`);
        let carro1 = {
            marca: `nova`,
            modelo:`escarabajo1`,
            matricula:`A1`,
            velocidad:10,
            estado: true,
        }
        let carro2 = {
            marca: `nova1`,
            modelo:`escarabajo2`,
            matricula:`A2`,
            velocidad:20,
            estado: true,
        }
        let carro3 = {
            marca: `nova2`,
            modelo:`escarabajo3`,
            matricula:`A3`,
            velocidad:30,
            estado: false,
        }
        let carro4 = {
            marca: `nova`,
            modelo:`escarabajo4`,
            matricula:`A4`,
            velocidad:40,
            estado: false,
        }

        let arrayCarros = [ carro1 , carro2 , carro3 , carro4 ];
        console.log(arrayCarros[3].velocidad);


document.write(`<p>4</p>`);
        console.log(arrayCarros[3].velocidad);  
        
        

document.write(`<p>5</p>`);
        let marcaIntroducida = 'nova'; 
        let cocheMarca = arrayCarros.filter( v => v.marca === marcaIntroducida );
        console.log(cocheMarca);


document.write(`<p>6</p>`);
        let contadorEncendido = 0;
        for ( let i=0 ; i<arrayCarros.length ; i++ ) {
            if ( arrayCarros[i].estado ) {
                contadorEncendido += 1;
            }
        }
        console.log(contadorEncendido);

document.write(`<p>7</p>`);
    let acumulador = 0;
    for ( let i=0 ; i<arrayCarros.length ; i++ ) {
        acumulador += arrayCarros[i].velocidad;
    }
    const media = acumulador/arrayCarros.length;
    console.log(media);

document.write(`<p>8</p>`);
    let arrayBi = [ [1,2,3] , [4,5,6] , [7,8,9] ];
    let result = '';
    function diagonal(arr){
        for ( let i=0 ; i<arr.length ; i++ ) {
            for ( let j=0 ; j<arr[i].length ; j++ ) {
                if ( i === j ) {
                    console.log(arr[i][j]);
                }
            }
        }
    }
    
    diagonal(arrayBi);

