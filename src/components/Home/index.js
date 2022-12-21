import React, { useState } from 'react'
import Header from '../Header'
import { homeTabsInfo, fetchStatus } from '../../constants/home_tabs_info'
import { RESOURCE_GET_URL } from '../../constants/api_url'
import HomeTabs from '../HomeTabs'
import SearchInput from '../SearchInput'

const {initial, success, failure, inProgress} = fetchStatus

const Home = () => {
 
  const [currentTabId, setCurrentTabId] = useState(homeTabsInfo[0].tabId)
  const [searchInput, setSearchInput] = useState("")
  const [fetchDataStatus, setFetchDataStatus] = useState(initial)
  const [itemList, setItemList] = useState([])

  const getResources = async () => {
    setFetchDataStatus(inProgress)
    const options = {
      method: "GET",
    };
    await fetch(RESOURCE_GET_URL, options)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        const filteredData = data.map((item) => ({ 
            id: item.id,
            title: item.title,
            link: item.link,
            iconUrl: item.icon_url,
            category: item.category,
            tag: item.tag,
            description: item.description
        }));
        setFetchDataStatus(success)
        setItemList(filteredData)
      } else {
        setFetchDataStatus(failure)
      }
    })
    .catch(() => {})
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value );
  };

  const onEnterSearchInput = (event) => {
    if (event.key === "Enter") {
      getResources();
    }
  };
  const onClickSearchBtn = (event) => {
    getResources();
  }
  const clickTabItem = (tabId) =>{
    setCurrentTabId(tabId)
    getResources()
  }
    return (
      <>
      <Header isButtonRequired={true} />
      <HomeTabs currentTabId={currentTabId} clickTabItem={clickTabItem}/>
      <SearchInput searchInput={searchInput} onClickSearchBtn={onClickSearchBtn} onChangeSearchInput={onChangeSearchInput} onEnterSearchInput={onEnterSearchInput}/>
      </>
    )
}

export default Home