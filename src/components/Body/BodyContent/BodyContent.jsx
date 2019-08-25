import React from "react"
import MoviesItem from "./../MoviesItem/MoviesItem"
import s from "./BodyContent.module.css"


export default (props)=>{
  const clickMovies  = (id) =>{
  }
  return <div className={s.bodyItems}>
    {props.moviesData.map(item =>{
      return <MoviesItem  click = {()=> {clickMovies(item)}} key={item.id} id = {item.id}  type = {item.title ? "movie" : "tv"} title={item.title || item.name} img={item.backdrop_path || item.profile_path }/>
    })}
    Body Content!
  </div>
}