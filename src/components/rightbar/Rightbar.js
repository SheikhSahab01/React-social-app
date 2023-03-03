import React from 'react'
import "./rightbar.css"


const Rightbar = () => {
  return (
    <div className="Rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/other/gift.png" alt="person" />
          <span className="birthdayText">
              <b className="birthdayBold">Gargi</b> and <b className="birthdayBold">3 Others </b> 
              have their birthday Today.
          </span>
        </div>
      </div>


      <img className="rightbarAd" src="/assets/other/ad3.jpg" alt="person" />
      <h4 className="rightbarTitle"> Online </h4>
      <hr className="rightbarHr"/>
      <ul className="rightbarFriendList">

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/8.jpg"  />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/4.jpg" alt="person" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/2.jpg" alt="person" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/9.jpg"alt="person"  />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/12.jpg" alt="person" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/1.jpg" alt="person" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer" >
            <img className="rightbarProfileImg" src="/assets/person/7.jpg" alt="person" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Jhon Carter</span>
        </li>
      </ul>
    </div>
  )
}

export default Rightbar
