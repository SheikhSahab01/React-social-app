import React from 'react'
import "./navbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';




const navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeft"> 
          <span className="logo">Social App</span>
        </div> 
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchbaricon"/>
            <input type="text" className="searchinput" placeholder="Search" active></input>
          </div>
        </div> 
        <div className="navbarRight">

          <div className="navbarLinks">
            <span className="navbarLink">Homepage</span>
            <span className="navbarLink">Timeline</span>
          </div>

          <div className="navbarIcons">

            <div className="navbarIconItem">
              <Person />
              <span className="navbarIconBadge">1</span>
            </div>

            <div className="navbarIconItem">
              <Chat />
              <span className="navbarIconBadge">2</span>
            </div>

            <div className="navbarIconItem">
              <Notifications />
              <span className="navbarIconBadge">4</span>
            </div>
          </div>

          <div className="navbarimgContainer">
          <img src="/assets/person/5.jpg" alt="person" className="navbarImg"/>
          <span className="onlineBadge"></span>

          </div>

          
        </div> 
      </div>
    </>
  )
}

export default navbar