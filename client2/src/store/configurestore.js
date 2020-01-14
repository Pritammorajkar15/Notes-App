import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {notesReducer} from '../reducers/notes'
import categoriesReducer from '../reducers/categories'
import usersReducer from '../reducers/users'
const configureStore=()=>{
    const store=createStore(combineReducers({
        notes:notesReducer,
        categories:categoriesReducer,
        users:usersReducer

    }),applyMiddleware(thunk))
    
    return store
}
export default configureStore