import React from "react"
import MainBody from "./MainBody";
import {connect} from "react-redux"
import {changeQuerySting} from "../../redux/reducers/queryStringReducer"

const MainBodyConatiner = props => {
  return <MainBody {...props}/>;
};
const MapStateTopPops = (state) =>{
  return {
    movies:state.queryStringReducers.data,
    queryString:state.queryStringReducers.queryString
  }
}
export default connect(MapStateTopPops,{changeQuerySting})(MainBodyConatiner)
