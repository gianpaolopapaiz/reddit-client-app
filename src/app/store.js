import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReduder from '../features/searchBar/searchSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReduder
  },
});
