import {Component} from 'react'
import './index.css'
import TabItem from '../TabItem'
import AppItem from '../AppItem'
import tabsAppslist from './tabs-apps-list.json';

const tabsList = tabsAppslist.tabs;

const appsList = tabsAppslist.apps;

// Write your code here
class AppStore extends Component {
  state = {activeTabId: tabsList[0].tabId, searchInput: ''}

  getFilteredApps = () => {
    const {activeTabId} = this.state
    const filteredApps = appsList.filter(
      eachApp => eachApp.category === activeTabId,
    )
    return filteredApps
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput, activeTabId} = this.state
    const searchResults = appsList.filter(
      eachItem =>
        eachItem.appName.toLowerCase().includes(searchInput.toLowerCase()) &&
        eachItem.category === activeTabId,
    )
    return searchResults
  }

  onClickTabUpdate = value => {
    this.setState({activeTabId: value})
  }

  render() {
    const {activeTabId, searchInput} = this.state
    const filteredAppsList = this.getFilteredApps()
    const searchedAppsList = this.getSearchResults()
    const signinupHTML = `/appstore/signinup.html`;

    return (
      <div className="bg-container">
        <div><h1 className="heading">AirBrain AI Apps New</h1><a href={signinupHTML}>Log in</a>&nbsp;&nbsp;&nbsp;<a href={signinupHTML}>Sign up</a></div>
        <div className="search-container">
          <input
            type="search"
            className="search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="tabs-container">
          {tabsList.map(eachItem => (
            <TabItem
              tabDetails={eachItem}
              key={eachItem.tabId}
              onClickTabUpdate={this.onClickTabUpdate}
              isActive={eachItem.tabId === activeTabId}
            />
          ))}
        </ul>
        <ul className="apps-container">
          {searchedAppsList.map(eachItem => (
            <AppItem appDetails={eachItem} key={eachItem.appId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore
