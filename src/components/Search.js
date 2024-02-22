import React from 'react'

const Search = ({ searchItems, setSearchItems }) => {
  return (
    <div className='search'>
      <form>
        <label htmlFor="search" style={{ display: 'none' }}>Search Item</label>
        <input
          type="text"
          placeholder='Search an item'
          name='search'
          id='search'
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search