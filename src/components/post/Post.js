import React from 'react'
import "./post.css"
import { MoreHoriz, Favorite } from '@material-ui/icons'

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/5.jpg"  alt="person"/>
                    <span className="NZEAX postUsername ">Tamana Sharma</span>
                    <span className="postDate">4min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreHoriz className="postTopRightIcon" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> Hey! There : ) </span>
                <img className="postImg" src="/assets/post/6.jpg" alt="person"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="postLikeIcon" />
                    <span className="postLikeCounter"> Liked by <span className="postLikeCounterBold">Sid_tripathi</span> and <span className="postLikeCounterBold">54 Others</span></span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">5 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
