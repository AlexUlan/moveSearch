import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.body}>
      Header
      <div>
        <NavLink to="/">На главную</NavLink>
      </div>
    </div>
  );
};
export default Header;
