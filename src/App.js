import './App.css';
import './assets/style/style.css';
import Button from './components/button/button';
import Pokedex from './components/pokedex/pokedex';

import pokedex from './assets/images/pokedex.png';
import { useState } from 'react';
import Search from './components/search/search';

function App() {

	const [pokemonName, setPokemonName] = useState('');
	const [pokemonID, setPokemonID] = useState('1');
	const [pokemonSprite, setPokemonSprite] = useState();
	
	// API Call
	const fetchPokemon = async (pokemon) => {
		const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const data = await APIResponse.json();
		return data;
	}
	
	// Rendering pokemon info
	const renderPokemon = async (pokemon) => {
		const data = await fetchPokemon(pokemon);
		const PokeName = data.name;
		console.log(data);
		setPokemonName(PokeName);
		setPokemonID(data.id);
		setPokemonSprite(data.sprites.versions['generation-v']['black-white'].animated.front_default);
	}
	console.log(pokemonSprite);

	renderPokemon(pokemonID);

	return (
		
		<div className='app_window pokedex_page'>
            <img src={pokedex} alt='Pokedex' className='pokedex_image'/>
			<Pokedex className='pokedex_element' pokemonNumber={pokemonID} pokemonName={pokemonName} pokeSprite={pokemonSprite}/>
			<Search />
			<Button className='button_element' actualPoke={pokemonID} updatePoke={setPokemonID} />
		</div>
  	);
}

export default App;
