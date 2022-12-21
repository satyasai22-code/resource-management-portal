import React from 'react'


const SearchInput = (props) => {
  const {onClickSearchBtn,searchInput, onChangeSearchInput, onEnterSearchInput} = props
  const onClickSearch = () => onClickSearchBtn()
  const onChangeSearch = () => onClickSearch()
  const onEnterSearch = () => onEnterSearchInput()
  return (
    <div className="search-input-container">
    <button
      className="search-button"
      type="button"
      onClick={onClickSearch}
    >
    {/* <BiSearch className="search-icon" /> */}
    S
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