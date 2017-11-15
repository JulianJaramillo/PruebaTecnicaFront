import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

function postlenguajesHtml(Lenguaje) {
    request.post('http://localhost/ServiceTest/api/lenguajes/retorno')
    .set('Content-Type', 'application/json')
    .send('{"Entrada":" '+ Lenguaje + '" ,"Compilado":""}')
    .then((data) => {
      return JSON.parse(data.text);
    });
}

function* callPostlenguajesHtml({Lenguaje, resolve, reject}) {
  const result = yield call(postlenguajesHtml, Lenguaje);
  console.log(result);
  if (result.query.results) {
    yield put({type: "LENGUAJE_FETCHED", result});
    yield call(resolve);
  } else {
    yield call(reject, {Lenguaje: 'No hay datos'});
  }
}

function* postlenguajesHtmlSaga() {
  yield* takeEvery("FETCH_LENGUAJE", callPostlenguajesHtml);
}

export default function* root() {
  yield [
    fork(postlenguajesHtml)
  ]
}
