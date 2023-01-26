import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filtreSlice';
import contactsReducer from './constacts/constactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
export default store;
