import React, {useState, useEffect} from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

function GifListContainer() {

    const [search, setSearch] = useState('dolphin')
    const [gif, setGif] = useState([])

    useEffect(() => {
        fetch (`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=Q40mhPstYytkPpcYyLVoHjYdBTLTkDX8`)
        .then(r => r.json())
        .then(data => {
            setGif(data.data.slice(0,3).map(n => n.images.original.url))
        })
    }, [search])

    function updateSearch(text) {
        setSearch(text)
    }

  return (
      <div>
          <GifSearch updateSearch={updateSearch}/>
          <GifList gif={gif}/>
      </div>
  )
}

export default GifListContainer;