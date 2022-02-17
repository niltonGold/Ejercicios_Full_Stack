// creo un elemento p
const textDOM = document.createElement('p');
// le añado texto
textDOM.textContent = 'Axel Presidente';
// añado una clase css al elemento
textDOM.classList.add('text--active');
// añado al DOM como hijo del body
document.body.appendChild(textDOM);