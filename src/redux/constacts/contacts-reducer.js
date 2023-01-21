import { createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts } from './contacts-action';

export const contactsReducer = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
