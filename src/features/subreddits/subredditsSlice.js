import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const loadSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async () => {
    let word = "subreddits.json";
    const data = await fetch(`https://www.reddit.com/${word}`);
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "subreddits",
  initialState: {
    subreddits: [],
    buttonSubreddit: '',
    isLoading: false,
    hasError: false
  },
  reducers: {
    setButtonSubreddit: (state, action) => (state = {
      subreddits: state.subreddits,
      isLoading: state.isLoading,
      hasError: state.hasError,
      buttonSubreddit: action.payload
    })
  },
  extraReducers: {
  [loadSubreddits.pending]: (state, action) => {
    state.isLoading = true;
    state.hasError = false;
   },
  [loadSubreddits.fulfilled]: (state, action) => {
    state.subreddits = action.payload.data.children.slice(0, 10);
    state.isLoading = false;
    state.hasError = false;
  },
  [loadSubreddits.rejected]: (state, action) => {
    state.isLoading = false;
    state.hasError = true;
  }
  }
}

export const subredditsSlice = createSlice(sliceOptions);
export const { setButtonSubreddit } = subredditsSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectButtonSubreddit = (state) => state.subreddits.buttonSubreddit;
export default subredditsSlice.reducer;
