# Generando páginas dentro de nuestra app (Router)

Es un elemento de las Web que nos permite dirigir al usuario a una Ruta (Una página web dentro de nuestra App Web).

Con el modelo tradicional el router lo implementaba una parte el navegador y otra el servidor. Cada ve que un usuario hacía click en un `a` el navegador consultaba al servidor en la dirección que había en el atributo `href`.

En una SPA, no volvemos al servidor a por las siguientes páginas, por lo que debe existir una navegación en cliente.

Para que eso exista necesito que todo el HTML, CSS y JS de las páginas se descarguen en la primera solicitud del usuario (esto se optimiza con una técnica que se llama `Lazy Loading`)

Para poder gestionar la navegación entre páginas y la definición de páginas en React, tenemos una librería que se llama [React Router DOM](https://reactrouter.com/web/example/basic)

## React Router DOM

Es una librería que nos proporciona varios componentes para la gestión de la navegación:

- Componentes para definir Rutas:

  - `ReactRouterDOM.BrowserRouter`: Es un componente que permite definir un Enrutador, es decir, un componente que permitirá enrutar (navegar). Como es BrowserRouter, definirá un router en el navegador.
  - `ReactRouterDOM.Switch`: Es un componente que permite definir las rutas que va a tener el Router.
  - `ReactRouterDOM.Route`: Es un componente que permite definir una ruta concreta dentro del Router. Tiene varioas atributos, uno de ellos es el `path` que indica la URL correspondiente a esa ruta. Además debemos indicarle el DOM que tiene que pintar cuando alguien navegue a esa ruta.

  ```jsx
  class App extends React.Component {
    render() {
      return (
        <ReactRouterDOM.BrowserRouter>
          {/*Esto son los enlaces (como si fuesen a de html) a rutas internas de React */}
          <Header></Header>
          {/* Es la definición de las páginas que yo tengo en mi app. Suele ir en el App.jsx */}
          <ReactRouterDOM.Switch>
            <ReactRouterDOM.Route path="/page1">
              <AirportList></AirportList>
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route path="/page2">
              <CityList></CityList>
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route path="/">
              <p>Esto sería como una home</p>
            </ReactRouterDOM.Route>
          </ReactRouterDOM.Switch>
          <Footer></Footer>
        </ReactRouterDOM.BrowserRouter>
      );
    }
  }
  ```

- Componentes Visuales (Se ven en el DOM):

  - `ReactRouterDOM.Link`: Es un componente que realiza la navegación a una ruta definida en un Router. Es como si fuese un `a` de HTML, pero interno de react. La URL donde va a redigir se indica en el atributo `to` del componente, lo que sería el `href` de un `a`.

  ```jsx
  <ReactRouterDOM.Link to="/page2">Go to Page 2</ReactRouterDOM.Link>
  ```
