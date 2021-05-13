import { createSelector } from 'reselect';

const domain = (state: any) => state;

export const selectTodos = () => createSelector(
    domain,
    substate => substate.todo.todos,
);