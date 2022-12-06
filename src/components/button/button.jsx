import React from 'react';

function Button({ actualPoke, updatePoke }) {
    return(
        <div className='buttons'>
            <button className='button btn-prev' onClick={() => {
                updatePoke(actualPoke-1);
            }}>Prev &lt;</button>
            <button className='button btn-prev' onClick={() => {
                updatePoke(actualPoke+1);
            }}>Next &gt;</button>
        </div>
    );
}

export default Button;