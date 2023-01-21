import { ADD_CONTACTS, DELETE_CONTACTS } from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction(ADD_CONTACTS);
export const deleteContacts = createAction(DELETE_CONTACTS);
