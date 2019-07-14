const CHANGE_QUERY = "CHANGE_QUERY";
const SET_MOVIES = "SET_MOVIES";
 
const initialState = {
  data:[],
  queryString:""
}

const queryReducer = (state=initialState, action) =>{
  switch (action.type){
    case SET_MOVIES :{
      return {...state, data:[...state.data, action.data]}
    };
    case CHANGE_QUERY :{
      return {...state,
        queryString:action.text
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

export default queryReducer;