import React,{useEffect} from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import MoviePage from "./MoviePage"
import {getSelectedDataMovies} from "./../../../redux/reducers/moviesReducer"

const MoviesPageContiner = (props)=>{
  const {idMovies , typeMovies} = props.match.params;
 // console.log(idMovies, typeMovies)
  useEffect(()=>{
    props.getSelectedDataMovies(typeMovies , idMovies );
  }
    ,[])
 // console.log(props)
  return(
    <MoviePage {...props.selectedMoviesData}/>
  )
}

const mapStateToProps = (state) =>{
  return {
    selectedMoviesData : state.moviesReducers.moviesSelected
  }
}


export default compose(connect(mapStateToProps
  ,{getSelectedDataMovies}
), withRouter)(MoviesPageContiner)


