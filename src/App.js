import React from 'react';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipes from "./components/landingpage"


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Recipes/>
       
      </BrowserRouter>
    </div>
  );
};

export default App;