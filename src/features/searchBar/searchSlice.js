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
  initialState: {
    searchInput: '',
    isLoading: false,
    hasError: false
  },
  reducers: {
    setSearchTerm: (state, action) => {
      return {
        ...state,
        searchInput: action.payload
      }
    },    
    clearSearchTerm: (state) => {
      return {
        ...state,
        searchInput: ""
      }
    }
  }
}


export const searchSlice = createSlice(sliceOptions);

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchInput;

export default searchSlice.reducer;
