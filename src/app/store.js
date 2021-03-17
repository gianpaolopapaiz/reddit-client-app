import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReduder from '../features/searchBar/searchSlice';
import popularRedditsReducer from '../features/popularReddits/popularRedditsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReduder,
    popularReddits: popularRedditsReducer
  },
});
