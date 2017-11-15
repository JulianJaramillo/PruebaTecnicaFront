function lenguajesHtml(state = {}, action) {
    switch(action.type) {
      case 'LENGUAJE_FETCHED':
        return action.result;
      default:
        return state;
    }
  }
  
  export default lenguajesHtml;