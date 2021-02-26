import React, { useState } from 'react';


const SearchBar = ({ searchFunction }) => {
    const [value, setValue] = useState('')
    return (
        <div className="mt-8">
            <input
                type="search"
                className="bg-purple-white shadow rounded border-0 p-3"
                placeholder="Search videos"
                key="random1"
                onKeyUp={event => setValue(event.target.value)} />
            <button
                type="button"
                className="ml-4 py-2 px-4 bg-blue-500 text-white font-semibold border border-red-600 rounded hover:bg-blue-800 hover:border-transparent transition ease-in duration-200 transform"
                onClick={e => searchFunction(value, e)}>Search</button>
        </div>
    );
}

export default SearchBar;