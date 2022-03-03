import React from 'react'
import '../assets/style/search.css';

const Search = ({ handleInput, handleKeyPress, search }) => {
  return (
    <div className='text-search'>
      <button className="btn-search"><i className='fas fa-search'></i></button>
    <input
      type='text'
      className='input-search'
      placeholder='Type to Search...'
      onChange={handleInput}
      onKeyPress={handleKeyPress}
      value={search}
    />
    </div>
  )
}

export default Search