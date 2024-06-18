import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807");
      setPokemonList(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <button onClick={fetchPokemon} style={{ padding: '10px 20px', fontSize: '16px', margin: '20px' }}>Fetch Pokemon</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pokemonList.map((pokemon, index) => (
          <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

