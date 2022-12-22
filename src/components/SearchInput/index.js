import React from 'react'
import './index.css'
import {FaSearch} from 'react-icons/fa'

const SearchInput = (props) => {
  const {searchInput, onChangeSearchInput, onEnterSearchInput} = props

  const onChangeSearch = (event) => onChangeSearchInput(event)
  const onEnterSearch = (event) => onEnterSearchInput(event)
  return (
    <div className="search-input-container">
    <button
      className="search-button"
      type="button"
    >
    <FaSearch className="search-icon" />
    </button>
    <input
      value={searchInput}
      type="search"
      className="search-input"
      placeholder="Search"
      onChange={onChangeSearch}
      onKeyDown={onEnterSearch}
    />
  </div>
  )
}

export default SearchInput