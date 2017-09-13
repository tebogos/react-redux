import {getTodos,createTodo,updateTodo,destroyTodo} from '../lib/todoServices';
import {newMessage} from './message';
export const ADD_TODO='ADD_TODO';
export const TOGGLE_TODO='TOGGLE_TODO';
export const CURRENT_TODO_CHANGED='CURRENT_TODO_CHANGED';
export const LOAD_TODOS='LOAD_TODOS';
export const DELETE_TODO='DELETE_TODO';






const initial ={todos:[],currentTodo:""};
export const fetchTodos=()=>{
  return (dispatch)=>{
    dispatch(newMessage("Todo loaded!"))
    getTodos().then(todos=>dispatch(loadTodo(todos)))
  }
}


export const saveTodo = (text) => {
    return (dispatch) => {
      dispatch(newMessage("Added todo!"))
    createTodo(text).then(res => dispatch(addTodo(res)))
  }
}

export const deleteTodo=(id)=>{

  return (dispatch)=>{
    dispatch(newMessage("Todo deleted"));
    destroyTodo(id).then(res=>dispatch(removeTodo(id)));
  }
}
export const handleToggle=(id)=>{
return (dispatch,getState) =>{
  dispatch(newMessage("Todo toggled"));
  const {todos} = getState().todo;
  const ttodo =toggleTodos(todos,id).filter(td=>td.id===id)[0];
  updateTodo(ttodo).then(res=>
    dispatch(replaceTodo(res))
  )



}
}
const getRandomInt=(min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


const toggleTodo=(todo)=>{
  console.log("toogleTodo");
  return {...todo,isComplete:!todo.isComplete}
}
const toggleTodos=(todos,id)=>{
  console.log("toogleTodos with s id:  "+ id);

   return todos.map(todo=>{
if(todo.id===id)
    return toggleTodo(todo);
    else
    return todo;
  });
}

const replaceTodosWithTodo=(state,td)=>{

  console.log("toogleTodos with s id: -->> "+ td.id);
  console.log( td);
   return state.todos.map(todo=>{
if(todo.id===td.id)
    return td;
    else
    return todo;
  });
}

const loadTodo=(todos)=>({type:LOAD_TODOS,payload:todos});
export const formInputChanged=(text)=>({type:'CURRENT_TODO_CHANGED',payload:text});
 export const addTodo=(todo)=>({type:ADD_TODO,payload:todo});
export const handleAddTodo=(currentTodo)=>({type:'ADD_TODO',payload:currentTodo});
export const replaceTodo=(todo)=>({type:TOGGLE_TODO,payload:todo})
export const removeTodo=(id)=>({type:DELETE_TODO,id});
// export const handleToggle=(id)=>({type:TOGGLE_TODO,id});

export const getVisibleTodos=(todos,filter)=>{
   return todos.filter(todo=>{
  if(filter==='active')
    return !todo.isComplete?true:false;
  if(filter==='completed')
    return todo.isComplete?true:false;
  else
     return true;
  });}
export default (state=initial,action)=>{
  switch (action.type) {
    case ADD_TODO:
       return Object.assign({},state,{currentTodo:"",todos:[...state.todos,action.payload]});
    case TOGGLE_TODO:
       return Object.assign({},state,{todos:replaceTodosWithTodo(state,action.payload)});
       case LOAD_TODOS:
          return Object.assign({},state,{todos:action.payload});
       case DELETE_TODO:
           return Object.assign({},state,{todos:state.todos.filter(td=>td.id!==action.id)})
       case CURRENT_TODO_CHANGED:
          return Object.assign({},state,
            {currentTodo:action.payload});
    default:
      return state;

  }
}
