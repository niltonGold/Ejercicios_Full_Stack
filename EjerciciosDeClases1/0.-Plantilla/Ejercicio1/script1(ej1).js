

const div1 = document.querySelector('.root');

const p1 = document.createElement('div');
p1.textContent= "hola mundo";
p1.className = "div_container"

div1.appendChild(p1);

const p2 = document.createElement('div')
p2.textContent="hola2";
p2.className="div_container"

div1.appendChild(p2);



let cuadrados = Array.from(document.getElementsByClassName('div_container'));
console.log(cuadrados);
div1.appendChild(p2);
div1.appendChild(p1);

