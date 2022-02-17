
// Parte1- Crear un clase que represente a un círculo.
// tendrá la propiedad radio y color y como métodos
// tendremos calcularArea y calcularPerimetro.




class Circulo {


    // Inicializar y definir las propiedades

    constructor ( radio , color) {
        this.radio = radio;
        this.color = color;
        
    }



    // Metodos
    Area(){
        return Math.PI * Math.pow(this.radio,2);
    }

    Perimetro(){
        return 2 * Math.PI * this.radio;
    }

    
}

let circulo1 = new Circulo(4, 'red');
console.log(circulo1.Area().toFixed(2));

console.log(circulo1.Perimetro().toFixed(2));

console.log(typeof parseInt(circulo1.Perimetro().toFixed(2)));
console.log(circulo1.radio);

