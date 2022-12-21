import React from 'react'
import './index.css'
import { homeTabsInfo } from '../../constants/home_tabs_info'
import HomeTab from '../HomeTab'

const HomeTabs = (props) => {
  const {currentTabId , clickTabItem} = props
  const onClickTabItem = (tabId) => {
    clickTabItem(tabId)
  }
  return (
    <ul className="tabs-container">
    {homeTabsInfo.map((tabDetails) => (
      <HomeTab
        key={tabDetails.tabId}
        tabInfo={tabDetails}
        onClickTabItem={onClickTabItem}
        isCurrentTab={ currentTabId == tabDetails.tabId}
      />
    ))}
  </ul>
  )
}

export default HomeTabs