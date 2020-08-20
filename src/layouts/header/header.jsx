import React from "react";
import "./header.scss";

import TopNavbar from "../../components/topNavbar/TopNavbar";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <TopNavbar />

      <div className="center-item">
        <h1>
          <code> {t("titul")} </code>
        </h1>
      </div>

      <div className="under-nav">
        <div className="mid-item">{t("scrollDown")}</div>

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

export default Header;
