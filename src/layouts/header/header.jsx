import React from "react";
import "./header.scss";

import TopNavbar from "../../components/topNavbar/TopNavbar";

function header() {
  return (
    <div className="header">
      <TopNavbar />

      <div className="center-item">
        <h1>
          <code>your ideas-your product</code>
        </h1>
      </div>

      <div className="under-nav">
        <div className="mid-item">scroll down</div>

        <div className="right-item">
          <ul>
            <li>Behanse</li>
            <li>Dribble</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default header;
