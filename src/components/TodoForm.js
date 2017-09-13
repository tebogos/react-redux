
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formInputChanged,handleAddTodo,saveTodo} from '../reducers/todo';


 class TodoForm extends Component{

   handleChange=(eve)=>{
  console.log(eve.target.value);
    this.props.formInputChanged(eve.target.value);

  }
  handleSubmit=(eve)=>{
    if(eve.keyCode===13){
      eve.preventDefault();
      this.props.saveTodo(this.props.currentTodo);
    }
    // eve.preventDefault();
    // this.props.saveTodo(this.props.currentTodo);
  }
  handleClick=(eve)=>{
    // eve.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  }
  render(){
  return(
  <div className="add-todo">
    <button onClick={this.handleClick}className="add-todo__button">Add todo</button>
  <input className="add-todo__input" onKeyUp={this.handleSubmit} onChange={this.handleChange}value={this.props.currentTodo} type="text" placeholder="Add Todo" />
  </div>
);
}
}

export default connect(
  (state)=>({currentTodo:state.todo.currentTodo}),{formInputChanged,handleAddTodo,saveTodo}
)(TodoForm);
