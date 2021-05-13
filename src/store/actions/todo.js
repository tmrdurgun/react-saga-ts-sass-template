import * as constants from '../constants';

// GET ALL HOLIDAYS
export const getTodos = () => ({ type: constants.GET_TODOS });
export const setTodos = (data) => ({ type: constants.GET_TODOS }, data);