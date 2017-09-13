import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

// import {createStore} from 'redux';
// import reducer from './reducers/todo';
//
// const store =createStore(reducer);

// const render=()=>{
// ReactDOM.render(<App  />, document.getElementById('root'));
// }
// store.subscribe(render);
// render();
ReactDOM.render(
  <Provider store={store}><App  /></Provider>,
     document.getElementById('root'));
registerServiceWorker();
