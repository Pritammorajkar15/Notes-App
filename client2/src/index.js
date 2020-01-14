import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import {Provider} from 'react-redux'
import configureStore from './store/configurestore'
import {startSetNotes} from './actions/notes2'
import {startSetCategoryList} from './actions/categories'
// import {StartRegisterUser} from './actions/users'
// import {startLoginUser} from './actions/users'
import {startGetUser} from './actions/users'
import App from './App';

const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('token')){
    store.dispatch(startGetUser())
    store.dispatch(startSetNotes())
    store.dispatch(startSetCategoryList())
    //store.dispatch(StartRegisterUser())
   // store.dispatch(startLoginUser())
    
}

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));


