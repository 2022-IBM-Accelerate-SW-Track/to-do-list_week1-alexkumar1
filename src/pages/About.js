import React, { Component } from 'react';
import "./About.css";
import picture from "../assets/picture.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
            <div class="split left">
              <div className="centered">
                <img 
                className="profile_image"
                src={picture}
                alt="Profile Pic">
                </img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Alexander Kumar</div>
                <div className="brief_description">
                  Hello my name is Alexander and I'm a rising sophmore at MIT and love to read and hike
                </div>
              </div>
            </div>
          </div>
        </p> 
      </div>
    )
  }
}