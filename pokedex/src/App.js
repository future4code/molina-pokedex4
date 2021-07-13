import React from "react";
import Router from "./route/Router";
import { createGlobalStyle} from 'styled-components'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PokeCard from './components/pokecard/PokeCard'


const GlobalStyle = createGlobalStyle`
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
      <Header/>
      <Router/>
      <PokeCard/>
      <Footer/>
      
    </div>
  );
}

export default App;
