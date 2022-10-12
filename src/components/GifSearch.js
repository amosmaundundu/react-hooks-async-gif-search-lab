import React, {useState} from 'react';

function GifSearch( {updateSearch} ) {

    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateSearch(text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a Search Term:
                    <input type="text" value={text} onChange={handleChange}/>
                </label>
                <input type="submit" value="Find Gifs" />
            </form>
        </div>
    )
}

export default GifSearch;
