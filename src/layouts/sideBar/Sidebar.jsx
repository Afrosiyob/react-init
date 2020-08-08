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
        <li className="menu-item"> work </li>
        <li className="menu-item"> about us </li>
        <li className="menu-item"> contact </li>
      </ul>
    </div>
  );
}

export default Sidebar;
