import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk  from 'redux-thunk';
import todo from './reducers/todo';
import message from './reducers/message';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer=combineReducers({todo,message});

export default createStore(reducer,
composeWithDevTools(applyMiddleware(thunk))
)
