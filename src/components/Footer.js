import React from 'react';
import {Link} from 'react-router-dom';

 class Footer extends React.Component{
   activeChecked=()=>{

   document.getElementById("active").checked =true;
  }
  allChecked=()=>{

  document.getElementById("all").checked =true;
 }
 completedChecked=()=>{

 document.getElementById("completed").checked =true;
}
render(){

  return (


  <fieldset className="filters">
    <legend className="filters__title">show:</legend>
    <input type="checkbox" className="filters__checkbox" />
   <div className="filters__group">
    <Link onClick={this.allChecked} className="filter" to="/" >
      <input type="radio" id="all" name="filter"  className="filter__radio"/>
      <span className="filter__label--all">ALL</span></Link>
    <Link onClick={this.activeChecked} className="filter" to="/active" >
      <input id="active" type="radio" name="filter"  className="filter__radio"/>
      <span className="filter__label--active">Active</span></Link>
    <Link onClick={this.completedChecked}className="filter" to="/completed" >
      <input type="radio" id="completed" name="filter"  className="filter__radio"/>
      <span className="filter__label--completed">Completed</span></Link>
      </div>
  </fieldset>
)}
}
export default Footer;
