import { all } from 'redux-saga/effects';

import {
  getTodosWatcher,
} from './todo';


export default function* rootSaga() {
  yield all([

    // Todo watchers
    getTodosWatcher(),
  ]);
}
