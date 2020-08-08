import React, { useEffect } from "react";
import "./TopNavbar.scss";

import $ from "jquery";

import logo from "../../images/logo.svg";

function TopNavbar() {
  useEffect(() => {
    let lastScrollTop = 0,
      delta = 5;
    $(window).scroll(function () {
      var nowScrollTop = $(this).scrollTop();
      var rollY = window.scrollY;

      if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
        if (nowScrollTop > lastScrollTop) {
          // ACTION ON
          // SCROLLING DOWN
          //   alert("down");
          $(".top-navbar").css({
            top: "-70px",
          });
        } else {
          // ACTION ON
          // SCROLLING UP
          //   alert("up");
          $(".top-navbar").css({
            top: "40px",
          });
        }
        lastScrollTop = nowScrollTop;
      }

      $(".center-item").css({
        top: 50 - rollY / 7 + "%",
      });
    });

    $(".menu-btn").click(function () {
      $(".sidebar").fadeIn("slow");
    });
  }, []);

  return (
    <div className="top-navbar">
      <div className="left-logo">
        <i className=" menu-btn fas fa-bars"></i>
        <a href="#/">
          {" "}
          <img className="logo-image" src={logo} alt="this is logo" />
        </a>
      </div>
      <div className="right-menu">
        <ul className="lang-ul">
          <li className="lang-item">uz</li>
          <li className="lang-item">ru</li>
          <li className="lang-item">en</li>
        </ul>
      </div>
    </div>
  );
}

export default TopNavbar;
