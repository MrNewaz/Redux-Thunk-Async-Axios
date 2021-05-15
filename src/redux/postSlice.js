import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    lists: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.lists = action.payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default postSlice.reducer;
