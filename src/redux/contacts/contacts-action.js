import { v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', ({name, number}) => ({payload: {
          id: v4(),
          name,
          number
        }}));
    
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/filterContact');

const action = {
    addContact,
    deleteContact,
    changeFilter
}

export default action;