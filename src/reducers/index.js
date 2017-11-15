import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import lenguajesHtml from './lenguajeshtml';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  lenguajesHtml  
});

export default rootReducer;

