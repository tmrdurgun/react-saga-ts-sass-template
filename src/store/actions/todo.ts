import * as constants from '../constants';

// GET ALL HOLIDAYS
export const getTodos = () => ({ type: constants.GET_TODOS });
export const setTodos = (data: any) => ({ type: constants.SET_TODOS, data });