'use strict'; // carga el archivo en modo estricto de JS

// un componente de react es una clase que extiende de React.Component
class LikeButton extends React.Component { 
  constructor(props) { // cuando el componente se instancia, se llamará a su constructor
    super(props); // llamar al constructor React.Component
    this.state = { liked: false };
  }

  render() { 
    // Este metodo es fundamental para ser un componente de reactJS. 
    // React llama a este método cada vez que quiera pintarlo
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// soleccionar el contenedor de React (Donde va el HTML de reactJS)
const domContainer = document.querySelector('#react-demo-container');
// Llamamos al metodo render de la librería ReactDOM, pasándole el componente que queremos pintar
// en el contenedor que quere pintar
const reactLikeDOM = React.createElement(LikeButton);
ReactDOM.render(reactLikeDOM, domContainer);