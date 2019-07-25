import {moviesAPI} from "./../../API/api"
const CHANGE_QUERY = "CHANGE_QUERY";
const SET_MOVIES = "SET_MOVIES";
const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";
 
const initialState = {
  data:[],
  queryString:"",
  moviesSelected:{}
}

const queryReducer = (state=initialState, action) =>{
  switch (action.type){
    case SET_MOVIES :{
      return {...state, data:action.data}
    };
    case CHANGE_QUERY :{
      return {...state,
        queryString:action.text
      }
    };
    case SET_SELECTED_MOVIE:{
      return {...state, 
        moviesSelected: action.data
      }
    }
    default : return state
  }
}

export const changeQuerySting = (text) =>{
  return{
    type:CHANGE_QUERY,
    text:text
  }
}
export const setMovies = (movies) =>{
  return {
    type:SET_MOVIES,
    data:movies
  }
}
export const setSelectedMovies = (movie) =>{
  return {
    type:SET_SELECTED_MOVIE,
    data:movie
  }
}

export const getTopMovies = () =>{
  return dispatch =>{
    return moviesAPI.getTopMovies()
    .then(response =>dispatch(setMovies(response.results)))
  }
}

export const getDataQueryString = (querySting) => {
  return dispatch => {
    return moviesAPI.getDataQuery(querySting)
    .then(response => dispatch(setMovies(response.results)) )
  }
}

export const getSelectedDataMovies = (type, id) => {
  return dispatch =>{
    return moviesAPI.getSelectedData(type, id)
    .then(response => dispatch(setSelectedMovies(response.results)))
  }
}

export default queryReducer;