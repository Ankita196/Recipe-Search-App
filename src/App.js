import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Recipe from './Recipe';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function App() {
  const classes = useStyles();
  const APP_ID = '4b69527e';
  const APP_KEY = '3c6d7c8c19e2ec9e1047c7771953ca32';
  const [recipe, setResipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(['chicken']);
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    setResipe(response.data.hits);
    console.log(response.data.hits);
  };

  function updateSearch(e) {
    setSearch(e.target.value);
  }
  function updateQuery(e) {
    e.preventDefault();
    setQuery(search);
  }
  return (
    <div className="App">
      <Paper component="form" className={classes.root} onSubmit={updateQuery}>
        <InputBase
          className={classes.input}
          placeholder="Search for recipe"
          inputProps={{ 'aria-label': 'search for recipe' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <form onSubmit={updateQuery}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
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
