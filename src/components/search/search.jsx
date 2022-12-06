import React from 'react';

function Search() {
    return (
        <form className='form'>
            <input 
                type="search"
                className='input_search'
                placeholder='Name or Number'
                required
            >
            </input>
        </form>
    );
}

export default Search;