import React from 'react'
import './index.css'

const HomeTab = (props) => {
  const { tabInfo, onClickTabItem, isCurrentTab } = props
  const { tabId, tabName} = tabInfo
  const currentTabClassName = isCurrentTab ? "cur-tab-btn" : "";
  const onClick = () =>{
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-item-container">
        <button
        type="button"
        className={`tab-btn ${currentTabClassName}`}
        onClick={onClick}
        >
        {tabName}
        </button>
  </li>
  )
}

export default HomeTab
