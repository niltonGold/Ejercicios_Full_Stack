// 5- Vamos a crear una clase que represente a un animal. 
//    (nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())
// 6- Vamos a crear la clase perro que hereda de animal.
// 7- Vamos a crear la clase gato que hereda de animal.
// 8- Vamos a crear la clase gallina que hereda de animal




class Animal{
    constructor(nombre, edad, patas, color, sonido , foto){
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
        this.color = color;
        this.sonido = sonido;
        this.foto = foto;
    }

    hacersonido(){
        const sonido = new Audio(this.sonido);
        return sonido.play();
    }

    mostrarAnimal(){
        return this.foto;
    }
}


class Perro extends Animal{
    constructor(nombre, edad, patas, color, sonido , foto){
        super(nombre, edad, patas, color, sonido , foto);
    }

}


class Gato extends Animal{
    constructor(nombre, edad, patas, color, sonido , foto){
        super(nombre, edad, patas, color, sonido , foto);
    }

}


let foto_de_bailey = 'bailey.jpg';
let sonido_perro = 'ladra.mp3';
let perro1 = new Animal('bailey', 5 , 4 , 'brown' , sonido_perro , foto_de_bailey);

let foto_de_linda = 'gato.jpg';
let sonido_gato = 'maulla.mp3';
let gato = new  Animal('linda', 2 , 3 , 'black' , sonido_gato , foto_de_linda);

document.querySelector('.btn_mostrar_informacion_perro').addEventListener( 'click' , e => {

            const parrafoImagen = document.createElement('img');
            parrafoImagen.setAttribute( 'src' , perro1.mostrarAnimal() );
            parrafoImagen.setAttribute( 'width' , '60px' );
            parrafoImagen.setAttribute( 'height' , '60px' );
            const divImageContainer = document.querySelector('.div_perro_2');
            divImageContainer.appendChild(parrafoImagen);


            const divInformationContainer = document.querySelector('.div_perro_3');


            const perro_nombre = document.createElement('p');
            perro_nombre.textContent = `Nombre: ${perro1.nombre}`;
            perro_nombre.style.fontSize = '60%';
            divInformationContainer.appendChild(perro_nombre);

            const perro_edad = document.createElement('p');
            perro_edad.textContent = `Edad: ${perro1.edad}`;
            perro_edad.style.fontSize = '60%';
            divInformationContainer.appendChild(perro_edad);


            const perro_patas = document.createElement('p');
            perro_patas.textContent = `Patas: ${perro1.patas}`;
            perro_patas.style.fontSize = '60%';
            divInformationContainer.appendChild(perro_patas);


            const perro_color = document.createElement('p');
            perro_color.textContent = `Color: ${perro1.color}`;
            perro_color.style.fontSize = '60%';
            divInformationContainer.appendChild(perro_color);

});











