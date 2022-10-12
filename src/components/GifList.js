
import React from 'react';

function GifList( {gif} ) {

  return (
      <div>
          {gif.map(gif => {
              return <img key={gif} src={gif} alt='gif' />
          })}
      </div>
  )
}

export default GifList;