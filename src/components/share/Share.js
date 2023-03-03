import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/5.jpg" alt="person"/>
                <input className="shareInput" type="text" placeholder="What's in your Mind" />
            </div> 
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">

                    <div className="shareOption">
                        <PermMedia  className="shareIcon" />
                        <span className="shareOptionText">Photo | Video</span>
                    </div>

                    <div className="shareOption">
                        <Label  className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <Room  className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions  className="shareIcon" />
                        <span className="shareOptionText">Emoji</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share