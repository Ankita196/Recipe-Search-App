import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Recipe from './Recipe';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    margin: '40px auto',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(5),
    flex: 1,
    width: 150
  },
  iconButton: {
    padding: 10
  },
  heading: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#ad1457',

    justifyContent: 'center',
    fontFamily: ['Comic Sans MS', 'Comic Sans']
    // backgroundColor: 'rgb(4, 5, 12)'
  },
  roots: {
    display: 'flex',
    justifyContent: 'center',

    '& > <ArrowRightIcon style={{fontSize:20}} />': {
      margin: theme.spacing(2)
    }
  }
}));

export default function Recipes() {
  const classes = useStyles();
  const APP_ID = '4b69527e';
  const APP_KEY = '3c6d7c8c19e2ec9e1047c7771953ca32';
  const [recipes, setResipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(['all']);
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
    <div>
      <Grid item xs={12}>
        <Grid
          className={classes.heading}
          style={{ fontSize: 30, fontWeight: 'bold' }}
        >
          {' '}
          Search Your Favourite Recipe
        </Grid>
      </Grid>
      <Paper component="form" className={classes.root} onSubmit={updateQuery}>
        <InputBase
          type="text"
          value={search}
          onChange={updateSearch}
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

      <div>
        <Grid container xs={12}>
          {recipes.map(recipe => (
            <Grid
              item
              xs={10}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}
            >
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                mealType={recipe.recipe.mealType}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
