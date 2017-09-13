import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import {handleToggle,getVisibleTodos,fetchTodos,deleteTodo} from '../reducers/todo';


const TodoItem=(props)=>(
  <div className="todo-list-group">

  <li  onClick={props.handleToggle.bind(this,props.todo.id)}
  className={props.todo.isComplete?'todo-list__item--completed':'todo-list__item--active' }
  >{props.todo.text} </li>&nbsp;
<span className="todo-list__delete" onClick={()=>props.deleteTodo(props.todo.id)}></span>
  </div>
)
class TodoList extends React.Component {

componentDidMount(){
this.props.fetchTodos();
}
 render(){

   return(
     <ReactCSSTransitionGroup
        component="ul"
        className="todo-list"
        transitionName="todo-transition"
        transitionEnterTimeout={100}
        transitionLeaveTimeout={100}
      >
  {this.props.todos.map(todo=><TodoItem deleteTodo={this.props.deleteTodo}
    handleToggle={this.props.handleToggle} key={todo.id} todo={todo} />)}
 </ReactCSSTransitionGroup>
)
}

};

export default connect(
  (state,ownProps)=>({todos:getVisibleTodos(state.todo.todos,ownProps.filter)}),{handleToggle,fetchTodos,deleteTodo}
)(TodoList);
