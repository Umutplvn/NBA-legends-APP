import React, { useState } from "react";
import headerImg from "../../assets/nba-logo.png";
import headerStyle from "./headerStyle.module.css";

const Header = ({ setSearchValue }) => {

  return (

    <div className={headerStyle["header"]}>
      <img className={headerStyle["headerImg"]} src={headerImg} alt="" />
      <p className={headerStyle["title"]}>NBA Legends</p>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
          className={headerStyle["input"]}
        type="text"

          placeholder="Search Player..."
      />
    </div>
  );
};
export default Header;
