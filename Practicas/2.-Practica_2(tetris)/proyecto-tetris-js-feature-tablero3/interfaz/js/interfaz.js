const boardWidth = 10;
const boardHeight = 20;


// Score
let scoreDisplay = document.querySelector('.contenedor__score-numero');
let score = 0;


let grid = document.querySelector('.contenedor__juego');



// esta funcion pinta la estructura de cada bloque hay que hacer append a lo que devuelve 
//para incluir el bloque
function generateBoardBlock() {
    // <div class="bloque__contenedor">
    // <div class="bloque__interior"></div>
    // </div>
    const bloqueContenedor = document.createElement('div');
    const bloqueInterno = document.createElement('div');
    bloqueContenedor.className = 'bloque__contenedor';
    bloqueInterno.classList.add('bloque__interior');

    bloqueContenedor.appendChild(bloqueInterno);
    return bloqueContenedor;
}



// funcion para pintar la estructura del mini board
function generateMiniBoardBlock() {
    // <div class="bloque__contenedor">
    // <div class="bloque__interior"></div>
    // </div>
    const bloqueContenedor = document.createElement('div');
    const bloqueInterno = document.createElement('div');
    bloqueContenedor.className = 'bloque__contenedor_mini';
    bloqueInterno.classList.add('bloque__interior_mini');

    bloqueContenedor.appendChild(bloqueInterno);
    return bloqueContenedor;
}




// a esta funcion le mandas la clase del bloque que vas a rellenar con las piezas el tamaño y altura
// que va a tener y se rellenara con los cuadrados

function drawBoard(containerClass, width, heigth) {
    const tablero = document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width * heigth; i++) {
        tablero.appendChild(generateBoardBlock());

    }
}


// funcion para pintar de mini board en el dom
function drawMiniBoard(containerClass, width, heigth) {
    const tablero = document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width * heigth; i++) {
        tablero.appendChild(generateMiniBoardBlock());

    }
}


// funcion que agregara una linea final
function generateBoardBlockFinal() {
    const bloqueFinal = document.createElement('div');
    bloqueFinal.classList.add('bloque__contenedor');
    bloqueFinal.classList.add('bloque_bloqueado');
    bloqueFinal.classList.add('final_line');
    return bloqueFinal;
}


// Funcion para pintar la linea final que ayudara a detener los bloques
function drawBoardFinalLine(containerClass, width) {
    const tablero = document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width; i++) {
        tablero.appendChild(generateBoardBlockFinal());
    }
}




drawBoard('contenedor__juego', 10, 20);
drawBoardFinalLine('contenedor__juego', 10);
drawMiniBoard('contenedor__score-cuadrados', 4, 4);


// Ancho y alto del tablero
const BOAR_WIDTH = 10;
const BOAR_HEIGHT = 20;
let nextRandom = 0;

// Array con todos los cuadrados internos
let cuadrados = Array.from(document.querySelectorAll('.bloque__contenedor'));

console.log(cuadrados);

// Rotaciones de los tetrominios

//tetrominioI
const tetrominioI = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH + 3],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 3 + 1],
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH + 3],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 3 + 1]
];


//tetrominioL
const tetrominioL = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2],
    [0, 1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [0, BOAR_WIDTH, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1]
];


//tetrominioS
const tetrominioS = [
    [BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [0, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [0, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1]
];


//tetrominioZ
const tetrominioZ = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [2, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [2, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1]
];


//tetrominioJ
const tetrominioJ = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 2],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [1, 2, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1]
];


//tetrominioO
const tetrominioO = [
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1]
]


//tetrominioT
const tetrominioT = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1],
    [1, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [1, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1]
]


// Posicion incial en el tablero    
let posicionActual = 4;


// Seleccion de la rotacion de los tetrominio, hay cuatro posibilidades
let rotacionActualTetrominio = 0;


// Array de los tetrominios diponibles
const losTetrominios = [tetrominioI, tetrominioL, tetrominioS, tetrominioZ, tetrominioJ, tetrominioO, tetrominioT];


// Rotacion aleatoria del tetrominio
let random = Math.floor(Math.random() * losTetrominios.length);
let forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];


// dibujar el tetrominio
function draw() {
    forma_del_tetrominio_elegido.forEach(v => {
        cuadrados[posicionActual + v].classList.add('tetrominio');
    })

}


// Borrar el tetrominio
function undraw() {
    forma_del_tetrominio_elegido.forEach(v => {
        cuadrados[posicionActual + v].classList.remove('tetrominio');
    })
}

// Mover los tetrominio hacia abajo cada medio segundo
time = setInterval(moveDown, 1000);

// Mover los tetrominios al tocar las teclas de movimientos
function controles(tecla) {
    if (tecla.keyCode === 37) {
        moveLetf();
    } else if (tecla.keyCode === 38) {
        rotar();
    } else if (tecla.keyCode === 39) {
        moveRight();
    } else if (tecla.keyCode === 40) {
        moveDown();
    }
}


// Evento al tocar una tecla
document.addEventListener('keyup', controles);


// Funcion para moverse abajo
function moveDown() {
    mostrarSiguiente();
    undraw();
    
    posicionActual += BOAR_WIDTH;
    draw();
    freeze();
}


// Congelar el tetrominio al final 
function freeze() {
    // Si alguno algun bloque de la siguiente fila es el final
    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v + BOAR_WIDTH].classList.contains('bloque_bloqueado'))) {
        console.log(posicionActual);
        // Entonces bloqueara el tetrominio
        isGameOver();
        forma_del_tetrominio_elegido.forEach(v => cuadrados[posicionActual + v].classList.add('bloque_bloqueado'));

        random = nextRandom;
        nextRandom = Math.floor(Math.random() * losTetrominios.length);
        forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];
        posicionActual = 4;
        draw();
        addScore()
    }
}

// funcion para cuando se pierde la partida
function isGameOver() {
    if (posicionActual === 14) {

        clearInterval(time);
        const gameover = document.createElement('div');
        const botonRepetir = document.createElement('button');
        botonRepetir.className = 'boton__repetir';
        botonRepetir.textContent = "Try Again";

        botonRepetir.addEventListener('click', () => {

            cuadrados.forEach(c => c.classList.remove('tetrominio'));
            cuadrados.forEach(d => d.classList.remove('bloque_bloqueado'));
            // aqui hay que poner otra vez el bloque final
            time = setInterval(moveDown, 1000);

            gameover.className = "gameover__off";



        })

        gameover.className = "contenedor__gameover gameover__on";
        gameover.appendChild(botonRepetir);
        document.body.appendChild(gameover);

    }
}

// Mover el tetrominio a la izquierda hasta el borde
function moveLetf() {
    undraw();
    const bordeIzquierdo = forma_del_tetrominio_elegido.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0);
    // Cuando estoy pegado al borde estoy en la columna 0 

    if (!bordeIzquierdo) {
        posicionActual -= 1; // si no estoy al borde, me muevo a la izquierda
    }

    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v].classList.contains('bloque_bloqueado'))) {
        posicionActual += 1; // ????
    }
    draw();
}


// Mover el tetrominio a la derecha hasta llegar al borde
function moveRight() {
    undraw();
    const bordeDerecho = forma_del_tetrominio_elegido.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1));

    if (!bordeDerecho) {
        posicionActual += 1;
    }

    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v].classList.contains('bloque_bloqueado'))) {
        posicionActual -= 1;
    }
    draw();
}

// Rotar los tetrominios
function rotar() {

    let arrayArotar = losTetrominios[random][rotacionActualTetrominio];
    console.log(arrayArotar);

    let iR1_1_X = losTetrominios[0][1]; // tetrominio i r =2 
    let iR1_2_X = iR1_1_X.map(e => e + 1);

    let lR2 = losTetrominios[1][1];
    let lR3 = losTetrominios[1][3];

    let tR2 = losTetrominios[6][1];
    let tR3 = losTetrominios[6][3];

    let sR2 = losTetrominios[2][1];

    let jR3 = losTetrominios[4][3];

    let zR3 = losTetrominios[3][1];


    let jR1 = losTetrominios[4][1];

    let pasaYrota = false;



    if ((iR1_1_X === arrayArotar) && pegadoDerecha(iR1_1_X)) {
        pasaYrota = true;
    }
    if ((iR1_1_X === arrayArotar) && pegadoDerecha(iR1_2_X)) {
        pasaYrota = true;
    }



    if ((lR2 === arrayArotar) && lR2.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1))) {
        pasaYrota = true;
    }
    if ((lR3 === arrayArotar) && lR3.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1))) {
        pasaYrota = true;
    }



    if ((tR2 === arrayArotar) && tR2.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1))) {
        pasaYrota = true;
    }



    if ((sR2 === arrayArotar) && sR2.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1))) {
        pasaYrota = true;
    }



    if (iR1_1_X === arrayArotar && iR1_1_X.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0)) {
        pasaYrota = true;
    }


    if (iR1_1_X === arrayArotar && iR1_1_X.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0)) {
        pasaYrota = true;
    }


    if (jR3 === arrayArotar && jR3.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0)) {
        pasaYrota = true;
    }
    if (jR1 === arrayArotar && jR1.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1))) {
        pasaYrota = true;
    }




    if (zR3 === arrayArotar && zR3.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0)) {
        pasaYrota = true;
    }

    if (tR3 === arrayArotar && tR3.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0)) {
        pasaYrota = true;
    }


    function pegadoDerecha(arr) {
        // let arr = losTetrominios[random][rotacionActualTetrominio];
        boolean0 = ((posicionActual + arr[0]) % BOAR_WIDTH) === (9);
        boolean1 = ((posicionActual + arr[1]) % BOAR_WIDTH) === (9);
        boolean2 = ((posicionActual + arr[2]) % BOAR_WIDTH) === (9);
        boolean3 = ((posicionActual + arr[3]) % BOAR_WIDTH) === (9);
        let Array2 = [boolean0, boolean1, boolean2, boolean3];
        return Array2.every(e => e === true);
    }









    // iR1_1 = iProhibidoR1_1();
    // iR1_2 = iProhibidoR1_2();




    if (!pasaYrota) {
        undraw();
        // const bordeD = forma_del_tetrominio_elegido.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1));


        rotacionActualTetrominio++; // Eligo la siguiente forma del tetrominio






        if (rotacionActualTetrominio === forma_del_tetrominio_elegido.length) {
            rotacionActualTetrominio = 0;
        }

        forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];

        draw();
    }

}




//Mostrar el siguiente tetrominio en el panel pequeño

    //Seleccionar los cuadrados del mini board
    let cuadrados2 = Array.from(document.querySelectorAll('.bloque__contenedor_mini'));
    console.log(cuadrados2);

    //Posicion actual mini board
    const miniBoardWidth = 4;
    let posicionInicialMiniBoard = 0;

    // tetrominios sin rotacion
    const tetrominioMiniBoard = [
        [miniBoardWidth, miniBoardWidth+1, miniBoardWidth+2, miniBoardWidth+3],// ltetrominio
        [miniBoardWidth, miniBoardWidth+1, miniBoardWidth+2, miniBoardWidth*2],// ltetrominio
        [miniBoardWidth+1, miniBoardWidth+2, miniBoardWidth*2, miniBoardWidth*2+1],// stretominio,
        [miniBoardWidth, miniBoardWidth+1, miniBoardWidth*2, miniBoardWidth*2+1],//ztetrominio
        [miniBoardWidth, miniBoardWidth+1, miniBoardWidth+2, miniBoardWidth*2+2],//jtetrominio
        [0, 1, miniBoardWidth, miniBoardWidth+1],//otetrominio
        [miniBoardWidth, miniBoardWidth+1, miniBoardWidth+2, miniBoardWidth*2+1]//ttetrominio
    ];
// funcion para mostrar el tetrominio siguiente en el mini board
function mostrarSiguiente(){

    //Eliminar el otro tetrominio del mini board
    cuadrados2.forEach( e => {
        e.classList.remove('tetrominio');
    });

    tetrominioMiniBoard[nextRandom].forEach( e => {
        cuadrados2[posicionInicialMiniBoard + e].classList.add('tetrominio'); 
    })
}


// Agregar un score
function addScore(){
    for(let i=0; i<199; i+=BOAR_WIDTH){
        const columna = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

        if( columna.every( index => cuadrados[index].classList.contains('bloque_bloqueado'))){
            score += 10;
            scoreDisplay.innerHTML = score;

            columna.forEach( index => {
                cuadrados[index].classList.remove('bloque_bloqueado');
                cuadrados[index].classList.remove('tetrominio');
            });

            const cuadradosRemovidos= cuadrados.splice(i,BOAR_WIDTH);
            cuadrados = cuadradosRemovidos.concat(cuadrados);
            
            cuadrados.forEach( index =>  grid.appendChild(index));

        }
    }

}


let elm = document.querySelector('.cuerpo');
console.log(elm.className);




