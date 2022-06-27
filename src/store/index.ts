import logger from "redux-logger"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'


const initialState = {
    user: readUserFromLocalStorage(),
    blog: readBlogFromLocalStorage()
}

// // Read user from the localStorage
function readUserFromLocalStorage () {
    try {
        const serialized = localStorage.getItem( 'user' )
        if ( serialized === null )
            return undefined
        return JSON.parse( serialized )
    }
    catch ( err ) {
        return undefined
    }
}

function readBlogFromLocalStorage () {
    try {
        const serialized = localStorage.getItem( 'blog' )
        if ( serialized === null )
            return undefined
        return JSON.parse( serialized )
    }
    catch ( err ) {
        return undefined
    }
}

export const store = createStore( rootReducer, initialState, applyMiddleware( thunk, logger ) )

