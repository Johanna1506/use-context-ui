import { take, call, put, race, delay, select, takeEvery } from "redux-saga/effects";
import * as authTypes from './actionTypes';

function* handleLogin() {
  yield console.log('login in saga')
}

export default function* authSagas() {
  yield takeEvery(authTypes.LOGIN_SUCCESS, handleLogin);
}