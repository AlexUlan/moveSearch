import React, {useEffect} from "react"
import MainBody from "./MainBody";
import {connect} from "react-redux"
import {changeQuerySting,getTopMovies} from "../../redux/reducers/moviesReducer"

const MainBodyConatiner = props => {
  useEffect(()=>{props.getTopMovies()},[])
  return <MainBody {...props}/>;
};
const MapStateTopPops = (state) =>{
  return {
    movies:state.moviesReducers.data,
    queryString:state.moviesReducers.queryString
  }
}
export default connect(MapStateTopPops,{
  changeQuerySting,
  getTopMovies})
  (MainBodyConatiner)
