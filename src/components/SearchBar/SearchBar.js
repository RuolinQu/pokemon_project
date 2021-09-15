import React from 'react'
import { Button, Search } from 'semantic-ui-react'
import { fetchData } from '../../api/api';

const SearchBar = ({searchInput,handleInput, handleClick}) => {  
    return (
        <div className="searchBar-container">
            <input onChange={handleInput} value={searchInput} />
            <button className="searchButton" onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBar
