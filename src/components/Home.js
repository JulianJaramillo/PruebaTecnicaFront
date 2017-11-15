import React, { Component } from 'react';
import Formulario from './Formulario';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {Entrada: true};
    this.state = {Compilado: ""};
    this.state = {SuccessfulOperation: true};
    this.state = {Message: true};
    this.state = {Exception: true};
  }

  yahooWidget() {
    
    const Compilado = this.props.Compilado;
    console.log(Compilado)
    if (Compilado != "") {
        console.log("Entre");
      let html = this.props.Compilado;
      let breakString = "<br/>";
      let domElemnts = "<!DOCTYPE html>";
      domElemnts += "<html>";
      domElemnts += "  <head>";
      domElemnts += "<meta charset='utf-8'/>";
      domElemnts += "    <title></title>";
      domElemnts += "  </head>";
      domElemnts += "  <body>";
      domElemnts += this.props.Compilado;
      domElemnts += "  </body>";
      domElemnts += "</html>";
      // remove <![CDATA[ and ]]>
      return (
        <div>
          <br/>
          <Header as='h3' textAlign='center'>
          {domElemnts}
          </Header>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
      );
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <Formulario/>
        {this.yahooWidget()}
      </div>
    );
  }
}

export default Home;
