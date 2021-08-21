import React, { useEffect } from 'react';
import './style.css';
import axios from "axios"

export default function App() {
  const APP_ID = '4b69527e';
  const APP_KEY = '3c6d7c8c19e2ec9e1047c7771953ca32	—';
  useEffect(() => {
    console.log('effect runs');
  }, []);

   const getRecipe= async ()=>{
const response =await axios.get( "http://www.edamam.com/ontologies/edamam.owl#recipe_379d5e1cd14a8339773a9477428c33f0")
   }
  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="button">Search</button>
      </form>
    </div>
  );
  }