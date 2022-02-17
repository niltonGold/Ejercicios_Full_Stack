// recupera todos los li de la página
const listItemsDOM = document.querySelectorAll('li');
console.log(listItemsDOM);

const listItemsDOMClasses = document.querySelectorAll('.item');
console.log(listItemsDOMClasses);

const fourthItem = document.getElementById('CUARTO_ELEMENTO');
console.log(fourthItem);

const dataDemoDOM = document.querySelectorAll('[data-demo]');
console.log(dataDemoDOM);

const specialListDOM = document.querySelectorAll('.special');
specialListDOM.forEach(e => e.textContent='Special Cambiado');

const dataDemoListDOM = document.querySelectorAll('[data-demo="Atributo Custom"]');
dataDemoListDOM.forEach(e => e.style='font-size:48px;');

const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi);