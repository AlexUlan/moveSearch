import React, { useEffect } from "react";
import SearchBar from "./SeacrhBar";
import { connect } from "react-redux";
import {
  changeQuerySting,
  getTopMovies,
  getDataQueryString
} from "../../../redux/reducers/moviesReducer";

const SearcBarConatiner = props => {
  return <SearchBar {...props} />;
};
const MapStateTopPops = state => {
  return {
    // movies:state.moviesReducers.data,
    queryString: state.moviesReducers.queryString
  };
};
export default connect(
  MapStateTopPops,
  {
    changeQuerySting,
    getDataQueryString
    // getTopMovies
  }
)(SearcBarConatiner);
