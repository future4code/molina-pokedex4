import React from "react";
import Router from "./route/Router";
import styled, { createGlobalStyle} from 'styled-components'
import PokeCard from "./components/pokecard/PokeCard";

const GlobalStyle =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #202020;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
      <PokeCard/>
    </div>
  );
}

export default App;
