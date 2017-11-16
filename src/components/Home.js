import React, { Component } from 'react';
import Formulario from './Formulario';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

//Definicion de las propiedades de react que mapearan los datos
class Home extends Component {
  constructor(props) {
    super(props);
    this.LenguajeWidget = this.LenguajeWidget.bind(this);
}
  

// Creacion de componente donde se inyectara la respuesta del servicio
LenguajeWidget() {
    const query = this.props.lenguajeshtml.Value;
    console.log(query);
    if (query) {
      let html = query.Compilado;
      let breakString = "<br/>";
      let domElemnts = "<!DOCTYPE html>";
      domElemnts += "<html>";
      domElemnts += "  <head>";
      domElemnts += "<meta charset='utf-8'/>";
      domElemnts += "    <title></title>";
      domElemnts += "  </head>";
      domElemnts += "  <body>";
      domElemnts += query.Compilado;
      domElemnts += "  </body>";
      domElemnts += "</html>";
      return (
        <div>
          <br/>
          <Header as='h3' textAlign='center'>
          {domElemnts}
          </Header>
        </div>
      );
    } else {
      return false;
    }
  }

  //Renderizacion del formulario y respuesta anterior
  render() {
    return (
      <div>
        <Formulario/>
        {this.LenguajeWidget()}
      </div>
    );
  }
}

export default Home;
