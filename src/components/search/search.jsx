import React from 'react';

function Search({ setId, setSearch, status }) {
    const searchPokemon = function (e) {
        e.preventDefault();
        // console.log(status);
        setId(e.target.search.value.toLowerCase());
        // if(status === 200) {
        // }
        e.target.search.value =  '';
    }
    return (
        <form className='form' onSubmit={searchPokemon}>
            <input 
                type="search"
                name="search"
                className='input_search'
                placeholder='Name or Number'
                required
            >
            </input>
        </form>
    );
}

export default Search;