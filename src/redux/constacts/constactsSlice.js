import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
    // [fetchContacts.pending]: state => {
    //   state.isLoading = true;
    // },
    // [fetchContacts.fulfilled]: (state, { payload }) => {
    // state.isLoading = false;
    // state.contacts = payload;
    // state.error = null;
    // },
    // [fetchContacts.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // [deleteContacts.pending]: state => {
    //   state.isLoading = true;
    // },
    // [deleteContacts.fulfilled]: (state, { payload }) => {
    // state.isLoading = false;
    // state.contacts = state.contacts.filter(({ id }) => id !== payload);
    // state.error = null;
    // },
    // [deleteContacts.rejected]: (state, { payload }) => {
    // state.isLoading = false;
    // state.error = payload;
    // },
    // [addContacts.pending]: state => {
    //   state.isLoading = true;
    // },
    // [addContacts.fulfilled]: (state, { payload }) => {
    // state.isLoading = false;
    // state.contacts = [...state.contacts, payload];
    // state.error = null;
    // },
    // [addContacts.rejected]: (state, { payload }) => {
    // state.isLoading = false;
    // state.error = payload;
    // },
  },
  //   reducers: {
  //     addContacts: (state, { payload }) => {
  //       state.contacts.push(payload);
  //     },
  //     deleteContacts: (state, { payload }) => {
  //       state.contacts = state.contacts.filter(({ id }) => id !== payload);
  //     },
  //   },
});
// export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
