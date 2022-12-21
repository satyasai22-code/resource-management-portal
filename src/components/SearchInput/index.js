import React from 'react'
import './index.css'
import {FaSearch} from 'react-icons/fa'

const SearchInput = (props) => {
  const {onClickSearchBtn,searchInput, onChangeSearchInput, onEnterSearchInput} = props
  const onClickSearch = (event) => onClickSearchBtn(event)
  const onChangeSearch = (event) => onChangeSearchInput(event)
  const onEnterSearch = (event) => onEnterSearchInput(event)
  return (
    <div className="search-input-container">
    <button
      className="search-button"
      type="button"
      onClick={onClickSearch}
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