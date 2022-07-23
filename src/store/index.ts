import logger from "redux-logger"
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk"
import { createStore, applyMiddleware, AnyAction } from 'redux'
import rootReducer from './reducers'
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"


const initialState = {
    user: readUser(),
    googleData: googleUser()
}



// Read user from the localStorage
function readUser() {
    try {
        const serialized = localStorage.getItem('user_data')
        if (serialized === null)
            return undefined
        return JSON.parse(serialized)
    }
    catch (err) {
        return undefined
    }
}

// Read google user sso from the localStorage
function googleUser() {
    try {
        const serialized = localStorage.getItem('googleSSO')
        if (serialized === null)
            return undefined
        return JSON.parse(serialized)
    }
    catch (err) {
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

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

