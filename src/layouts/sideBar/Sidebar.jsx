import React, { useEffect } from "react";

import $ from "jquery";
import "./Sidebar.scss";

function Sidebar() {
  useEffect(() => {
    $(".sidebar").click(function () {
      $(this).fadeOut("slow");
    });
  }, []);
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          {" "}
          <a href="#work">work</a>{" "}
        </li>
        <li className="menu-item">
          {" "}
          <a href="#abus">about us</a>{" "}
        </li>
        <li className="menu-item">
          {" "}
          <a href="#contact">contact</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
