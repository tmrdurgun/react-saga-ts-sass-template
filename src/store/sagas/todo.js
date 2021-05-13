import {
    call,
    take,
    all,
    put,
} from 'redux-saga/effects';

import { request } from '../../commons/utils';

import * as constants from '../constants';

import {
    GET_TODOS_URL,
} from '../../commons/urls';

import * as todoActions from '../actions/todo';

function* getTodos() {
    const result = yield call(request, GET_TODOS_URL, 'get', false, true);

    try {
        if(result) {
            yield put(todoActions.setTodos(result));
        }
    } catch (error) {
        console.log(error.message);
    }

}

export function* getTodosWatcher() {
    while (true) {
        const action = yield take(constants.GET_TODOS);
        yield call(getTodos, action);
    }
}