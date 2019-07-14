import React from "react"
import s from "./MainBody.module.css"

const MainBody = (props) =>{
  
  const sumbitQuery = (e) =>{
    e.preventDefault();
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
export default MainBody;