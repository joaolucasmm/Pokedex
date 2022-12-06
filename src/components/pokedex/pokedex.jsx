import React from 'react';

function Pokedex({pokemonNumber, pokemonName, pokeSprite}) {
    return(
        <div className='pokedex'>
            <img src={pokeSprite} className='pokemon_image' alt="Imagem do pokemon"/>
            <h1 className='pokemon_data'>
                <span className='data_number'>{pokemonNumber}</span>
                <span> - </span>
                <span className='data_name'>{pokemonName}</span>
            </h1>
        </div>
    );
}

export default Pokedex;