import logger from "redux-logger"
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk"
import { createStore, applyMiddleware, AnyAction } from 'redux'
import rootReducer from './reducers'
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"


const initialState = {
    user: readUserFromLocalStorage(),
    blog: readBlogFromLocalStorage()
}

// Read user from the localStorage
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

/* Types */
export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    AnyAction
>
export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector

export const store = createStore( rootReducer, initialState, applyMiddleware( thunk, logger ) )

