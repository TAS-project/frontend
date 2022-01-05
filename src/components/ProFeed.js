import React from 'react'
import "./proFeed.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

function ProFeed() {
    return (
        <div className="Title">
           <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">name:</span>
            <span className="rightbarInfoValue">taravat</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">family name:</span>
            <span className="rightbarInfoValue">monsef</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">taramonsef@gmail.com</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        </div>
    )
}

export default ProFeed
