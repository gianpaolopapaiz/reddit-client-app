import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/*import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../favoriteRecipes/favoriteRecipesSlice";
import { selectSearchTerm } from "../search/searchSlice";*/

export const loadReddits = createAsyncThunk(
  "popularReddits/getPopularReddits",
  async () => {
    const data = await fetch("https://www.reddit.com/r/popular.json");
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
    console.log(action.payload);
    console.log(action.payload.data.children[0]['data'].title);
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

/*export const selectFilteredPopularReddits = (state) => {
  const popularReddits = selectPopularReddits(state);
  const searchTerm = selectSearchTerm(state);

  return popularReddits.filter((reddit) =>
    reddit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};*/

export default popularRedditsSlice.reducer;
