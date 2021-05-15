import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './CounterSlice';
import postReducer from './postSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
