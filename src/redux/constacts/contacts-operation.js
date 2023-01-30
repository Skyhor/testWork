import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://63d020d310982404378dd00c.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://63d020d310982404378dd00c.mockapi.io/contacts'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://63d020d310982404378dd00c.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://63d020d310982404378dd00c.mockapi.io/contacts',
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
