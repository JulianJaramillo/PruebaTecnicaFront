import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
