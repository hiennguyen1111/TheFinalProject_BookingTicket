import React, { Component } from "react";
import "./CustomCss.css";

export default class CustomCss extends Component {
  render() {
    return (
      <div className="container">
        <article className="p-5 shadow-lg text-center">
          <p className="text-6xl text-center hover:text-red-600 font-extralight">
            Someone you loved
          </p>
          <p className="content1">
            I'm going under and this time I fear there's no one to save me
          </p>
          <p className="content2">
            This all or nothing really got a way of driving me crazy.
          </p>
          <p className="content3">I need somebody to heal</p>
          <p className="content4">Somebody to know</p>
          <p className="content5">Somebody to have</p>
          <p className="content6">Somebody to hold</p>
          <p className="content7">It's easy to say, but it's never the same</p>            
          <p className="content8">
          I guess I kinda liked the way you numbed all the pain.
          </p>
          <button className="buttonLike p-2 m-3 rounded-lg">Like</button>
          <button className="buttonShare p-2 m-3 rounded-lg">Share</button>
        </article>
      </div>
    );
  }
}
