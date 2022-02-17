
// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 3- Crear una clase gallina que represente  una gallina y funcione como las anteriores.
// 4- Crear un objeto de cada clase e imprimir el sonido que hace



// 1
class Perro {
    //Constructores
    constructor( nombre , edad , patas , color , foto){
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
        this.color = color;    
        this.foto = foto;
    }


    //Metodos
    hacersonido(){
        const sonido = new Audio('ladra.mp3');
        return sonido.play();
    }

    mostrarAnimal(){
    const divContainer = document.getElementById('imagen_perro');
        divContainer.style.width='400px';
        divContainer.style.height='400px';
        divContainer.style.backgroundImage=`url("${this.foto}")`;


    }

}

let foto_de_bailey = 'bailey.jpg';
let perro1 = new Perro('n',2,4,'red', foto_de_bailey);


document.getElementById('sonido').addEventListener( 'click', e => {
    perro1.hacersonido();
});


document.getElementById('foto').addEventListener('click', () =>{
    perro1.mostrarAnimal();
});










