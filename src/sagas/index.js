import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_DATA, RENDER_DATA } from '../actions';

export function* fetchToDoList() {
  const endpoint =
    'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';
  const response = yield call(fetch, endpoint);
  const resp = yield response.json();
  yield put({ type: RENDER_DATA, data: resp.data });
}

export function* loadData() {
  yield takeEvery(LOAD_DATA, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadData()]);
}
