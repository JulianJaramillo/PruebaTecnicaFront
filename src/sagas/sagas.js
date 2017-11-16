import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

// Se consume el servicio y se retorna la respuesta
function postlenguajesHtml(Lenguaje) {
  return  request.post('http://localhost/ServiceTest/api/lenguajes/retorno') // Se cambia la direccion dependiendo de donde se desplegue o ejecute el servicio
    .set('Content-Type', 'application/json')
    .send('{"Entrada":" '+ Lenguaje + '" ,"Compilado":""}')
    .then((data) => {
      return JSON.parse(data.text);
    });
}

function* callPostlenguajesHtml({Lenguaje, resolve, reject}) {
  const result = yield call(postlenguajesHtml, Lenguaje);
  if (result.SuccessfulOperation) {
    yield put({type: "LENGUAJE_FETCHED", result});
    yield call(resolve);
  } else {
    yield call(reject, {Lenguaje: 'No hay datos'});
  }
}

function* postlenguajesHtmlSaga() {
  console.log(callPostlenguajesHtml.Lenguaje);
  yield* takeEvery("FETCH_LENGUAJE", callPostlenguajesHtml);
}

export default function* root() {
  yield [
    fork(postlenguajesHtmlSaga)
  ]
}
