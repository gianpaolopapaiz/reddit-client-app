import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularReddits } from "./popularRedditsSlice";
import { Reddit } from '../../components/Reddit/Reddit'
//import FavoriteButton from "../../components/FavoriteButton";
//import Reddits from "../../components/Recipe";
//import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
//import { selectFilteredAllRecipes } from "./allRecipesSlice";
//import Spinner from "../../components/Spinner";

//const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const PopularReddits = () => {
  const dispatch = useDispatch();
  const popularReddits = useSelector(selectPopularReddits);
  const { isLoading } = useSelector((state) => state.popularReddits);

  /*const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };*/

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="reddits-container">
        <h2>Popular Reddits</h2>
        {popularReddits.map( (reddit) => (
          <Reddit reddit={reddit}/>))} 
      </div>
  );

  /*
  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddFavoriteRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
  */
};

