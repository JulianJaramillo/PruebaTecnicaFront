import React, { Component } from 'react';
import Formulario from './Formulario';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.yahooWidget = this.yahooWidget.bind(this);
}
  

  yahooWidget() {
    
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
