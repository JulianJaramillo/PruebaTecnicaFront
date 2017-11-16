import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//Creacion del componente formulario que se presentara en la pagina
class Formulario extends Component { 

  LenguajeInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input 
          error={hasError}
          fluid 
          placeholder="Lenguaje..."
          {...input}
          {...custom} />
      </div>
    );
  }

  //Creacion del cmetodo submit que enviara el parametro ingresado al archivo sagas que consume el servicio.
  submit({ Lenguaje }, dispatch) {
   
    return new Promise((resolve, reject) => {
      dispatch({ 
        type: 'FETCH_LENGUAJE',
        Lenguaje,
        resolve,
        reject 
      });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }

//Creacion de las etiquetas del formulario donde se ingresara el texto correspondiente
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field name="Lenguaje" component={this.LenguajeInput} /> 
        <br/> 
        <Button fluid type="submit">Enviar</Button>
      </form>
    );
  }
}

//Validacion del Field por si se encuentra vacio
const validate = values => {
  const errors = {}
  if (!values.Lenguaje || values.Lenguaje.trim() === '') {
    errors.Lenguaje = 'Codigo Requerido'
  } 
  return errors
}


export default reduxForm({
  form: 'formulario',
  validate
})(Formulario)
