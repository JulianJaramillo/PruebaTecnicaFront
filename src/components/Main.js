import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react'

//Creacion Componente Header de la aplicacion
class Main extends Component {
  render() {
    return (
      <Container text>
        <Header as="h1" textAlign="center">
          <Link to="/">lenguajesHtml</Link>
        </Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    )
  }
}

export default Main;