import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadReddits = createAsyncThunk(
  "popularReddits/getPopularReddits",
  async () => {
    const data = await fetch("https://www.reddit.com/r/popular.json");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "search",
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),    
    clearSearchTerm: (state) => (state = '')
  }
}


export const searchSlice = createSlice(sliceOptions);
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state) => state.search;
export default searchSlice.reducer;
