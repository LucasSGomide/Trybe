import React from 'react';
import PokemonList from './PokemonList'
import './App.css';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
