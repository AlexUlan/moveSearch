import React from "react"
import s from "./SearchBar.module.css"

const SearchBar = (props) =>{
  
  const sumbitQuery = (e) =>{
    e.preventDefault();
    props.getDataQueryString(props.queryString);
  }
  const changeQuerystring = (e) =>{
   props.changeQuerySting(e.target.value)
  }
 
  return (
    <div className={s.body}>
      <form onSubmit = {sumbitQuery}>
      <div className  = {s.searchInput}>
       <input type="text" onChange={changeQuerystring} value={props.queryString}/>
       <button>search</button>
       </div>
      </form>
      Body
    </div>
  )
}
export default SearchBar;