import React from "react"
import s from "./MoviesPage.module.css"; 
const urlposter = "https://image.tmdb.org/t/p/original";

export default (props) =>{
  console.log(props)
  return (
    <div>
       <div className={s.bodyContent}>
      <div className={s.poster}>
         <img style={{height:"500px"}} src={`${urlposter}${props.poster_path}`}/>
      </div>
      <div>
        <h2>{props.name || props.title}</h2>
        <div>Даты выпуска {props.first_air_date || props.release_date}</div>
        <div>Рейтинг {props.vote_average}</div>
        <a href = {props.homepage}>Домашняя страница</a>
        <p>{props.overview}</p>
        {/* <div>Страны выпуска {props.overview.map(item =>{return <span>{item}</span>})}</div> */}
      </div>
      </div>
    </div>
  )
}