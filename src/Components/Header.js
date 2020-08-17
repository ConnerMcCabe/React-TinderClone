import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import BathtubIcon from "@material-ui/icons/Bathtub";
import FourumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <PersonIcon />
      <BathtubIcon />
      <FourumIcon />
    </div>
  );
}

export default Header;
