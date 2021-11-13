import { combineReducers } from 'redux';
import { createReducer} from '@reduxjs/toolkit';
import actions from './contacts-action';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>[...state.filter(item => item.id !== action.payload)]
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});


export default combineReducers({
    items,
    filter
})