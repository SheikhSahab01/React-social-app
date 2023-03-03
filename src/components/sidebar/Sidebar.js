import React from 'react'
import "./sidebar.css"
import { DynamicFeed, Sms, Duo, Group, Bookmarks, Help, Work, Event, School  } from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">

                <li className="sidebarListItem">
                    <DynamicFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>

                <li className="sidebarListItem">
                    <Sms className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>

                <li className="sidebarListItem">
                    <Duo className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>

                <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>

                <li className="sidebarListItem">
                    <Bookmarks className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>

                <li className="sidebarListItem">
                    <Help className="sidebarIcon"/>
                    <span className="sidebarListItemText">FAQ</span>
                </li>

                <li className="sidebarListItem">
                    <Work className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>

                <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>

                <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>


            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <span className="sidebarCloseFriend"> Close Friend </span>
            <ul className="sidebarFriendlist">

                <li className="sidebarFriend">
                    <img src="/assets/person/1.jpg" className="sidebarFriendImg"alt="person" />
                    <span className="sidebarFriendName">Sufiyan Gouri</span>
                    <span className="sidebarFriendBadge"></span>
                </li>


                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpg" className="sidebarFriendImg"alt="person" />
                    <span className="sidebarFriendName">Sufiyan Gouri</span>
                    <span className=""></span>
                </li>

                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpg" className="sidebarFriendImg"alt="person" />
                    <span className="sidebarFriendName">Sufiyan Gouri</span>
                    <span className="sidebarFriendBadge"></span>
                </li>

                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpg" className="sidebarFriendImg"alt="person" />
                    <span className="sidebarFriendName">Sufiyan Gouri</span>
                    <span className="sidebarFriendBadge"></span>
                </li>

                <li className="sidebarFriend">
                    <img src="/assets/person/6.jpg" className="sidebarFriendImg"alt="person" />
                    <span className="sidebarFriendName">Sufiyan Gouri</span>
                    <span className=""></span>
                </li>

                

            </ul>

        </div>
    </div>
  )
}

export default Sidebar