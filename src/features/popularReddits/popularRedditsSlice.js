import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadReddits = createAsyncThunk(
  "popularReddits/getPopularReddits",
  async ([searchTerm, buttonSubreddit]) => {
    let word = "r/popular.json";
    let term = '';
    if (buttonSubreddit === ''){
      if (searchTerm !== ''){
        term = searchTerm.replace(' ','%20');
        word = `search.json?q=${term}`;
      } 
    } else {
      word = `${buttonSubreddit}.json`;
    }
    const data = await fetch(`https://www.reddit.com/${word}`);
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "popularReddits",
  initialState: {
    reddits: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
  [loadReddits.pending]: (state, action) => {
    state.isLoading = true;
    state.hasError = false;
   },
  [loadReddits.fulfilled]: (state, action) => {
    state.reddits = action.payload.data.children;
    state.isLoading = false;
    state.hasError = false;
  },
  [loadReddits.rejected]: (state, action) => {
    state.isLoading = false;
    state.hasError = true;
  }
  }
}

export const popularRedditsSlice = createSlice(sliceOptions);
export const selectPopularReddits = (state) => state.popularReddits.reddits;
export default popularRedditsSlice.reducer;
