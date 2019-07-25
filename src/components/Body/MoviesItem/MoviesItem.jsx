import React from "react";
import {NavLink} from "react-router-dom";
import s from "./MoviesItem.module.css";
const urlposter = "https://image.tmdb.org/t/p/original";

export default ({ title, img, click, id, type }) => {
  return (
    <div className={s.item}
    // onClick = {()=>{click()}} 
    >
      <NavLink to={`/selectMovies/${type}/${id}`}>
      <div>{title}</div>
      <img
        src={
          img
            ? urlposter + img
            : "http://www.moscinemateka.ru/images/2491/881b731646385d21e1436733fe42252c.png"
        }
        alt="poster"
      />
      </NavLink>
    </div>
  );
};
