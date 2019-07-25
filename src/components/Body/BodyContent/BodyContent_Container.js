import React, {useEffect} from "react"
import {connect} from "react-redux"
import BodyContent from "./BodyContent"
import {getTopMovies} from "../../../redux/reducers/moviesReducer"

const BodyContentContiner = (props) =>{
  useEffect(()=>{props.getTopMovies()},[])
  return (
    <BodyContent {...props}/>
  )
}

const MapStateToProps = (state) =>{
  return {
    moviesData: state.moviesReducers.data
  }
}

export default connect(MapStateToProps,{
  getTopMovies
})(BodyContentContiner) 