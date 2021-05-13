import * as constants from '../constants';

const INITIAL_STATE = {
    todos: [],
}

type Action = {
    type: string;
    data?: any;
}

const todoReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case constants.SET_TODOS: {
            return{
                ...state,
                todos: action.data
            }
        }

        default: {
            return state;
        }
    }
}

export default todoReducer;