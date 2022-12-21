import React from 'react'
import { fetchStatus } from '../../constants/home_tabs_info'
import ErrorPage from '../ErrorPage'
import Loading from '../Loading'
import NoResource from '../NoResource'
import ResourceList from '../ResourceList'

const { success, failure, inProgress} = fetchStatus
const tabs = ['', 'request', 'user']
const ResourceSection = (props) => {
    const {resourcesList, searchInput, currentTabId, fetchDataStatus, onClickTryAgain} = props
    const onClickTry = () => onClickTryAgain()

    const isCurrentTabIdNotResources = ( currentTabId !== 0 )
    const filterResourcesByTag = (resources) => (resources.filter((resource) => resource.tag === tabs[currentTabId]))
    const filterResourcesBySearchInput = (resources) => (resources.filter((resource) => resource.title.toUpperCase().includes(searchInput.toUpperCase())))
    
    const isListEmpty = (list) => ( list.length === 0 )
   
    const filteredDataBySearchAndTag = () => {
        let filteredResources = resourcesList;
        if (isCurrentTabIdNotResources) {
          filteredResources = filterResourcesByTag(resourcesList)
        }
        return filterResourcesBySearchInput(filteredResources)
    };
    const finalData = filteredDataBySearchAndTag()  

    switch (fetchDataStatus) {
        case success:{
            if(isListEmpty(finalData)) return (<NoResource message={searchInput}/>)  
            else return (<ResourceList data={finalData}/>)      
        }
        case failure:
            return (<ErrorPage onClickTryAgain={onClickTry}/>)
        case inProgress:
            return (<Loading/>)
        default:
            return null;
    }    
}

export default ResourceSection