import * as types from './ActionTypes';

export const increment =(index)=> ({
    type: types.INCREMENT,
    index
});

export const decrement =(index)=> ({
    type: types.DECREMENT,
    index
});

export const setColor =({index, color})=> ({
    type: types.SET_COLOR,
    index,
    color
});

export const create = ()=> ({
        type: types.CREATE
});

export const remove = ()=> ({
        type: types.REMOVE
});