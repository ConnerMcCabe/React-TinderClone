import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import FastfoodIcon from "@material-ui/icons/FastfoodTwoTone";
import FourumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="headerIcon" color="primary" fontSize="large" />
      </IconButton>

      <FastfoodIcon className="headerIcon" color="secondary" fontSize="large" />

      <IconButton>
        <FourumIcon className="headerIcon" color="primary" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
