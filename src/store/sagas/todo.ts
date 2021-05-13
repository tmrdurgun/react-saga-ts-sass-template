import { StrictEffect } from 'redux-saga/effects';
import * as Effects from "redux-saga/effects";
import { request } from '../../commons/utils';
import * as constants from '../constants';
import {
    GET_TODOS_URL,
} from '../../commons/urls';
import * as todoActions from '../actions/todo';

const call: any = Effects.call;
const take: any = Effects.take;
const all: any = Effects.all;
const put: any = Effects.put;

function* getTodos(): Generator<StrictEffect, void, any> {
    const result = yield call(request, GET_TODOS_URL, 'get', false);

    try {
        if(result) {
            yield put(todoActions.setTodos(result));
        }
    } catch (error) {
        console.log(error.message);
    }

}

export function* getTodosWatcher(): Generator<StrictEffect, void, any> {
    while (true) {
        const action = yield take(constants.GET_TODOS);
        yield call(getTodos, action);
    }
}