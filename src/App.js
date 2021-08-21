import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Recipe from './Recipe';

export default function App() {
  const APP_ID = '4b69527e';
  const APP_KEY = '3c6d7c8c19e2ec9e1047c7771953ca32';
  const [recipe, setResipe] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    setResipe(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="button" value={search} onChange={updateSearch}>
          Search
        </button>
      </form>
      {recipe.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}
