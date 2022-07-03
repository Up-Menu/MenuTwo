import { combineReducers } from "redux"

// write authReducer to login user and logout user
const authReducer = ( state = false, action: { type: any; payload: any } ) => {
    switch ( action.type ) {
        case "USER_LOGIN":
            return {
                user: action.payload
            }
        case "USER_LOGOUT":
            return false
        default:
            return state
    }
}

// write googleReducer to login user and logout user
const googleReducer = ( state = false, action: { type: any; payload: any } ) => {
    switch ( action.type ) {
        case "GOOGLE_SSO":
            return {
                user: action.payload
            }
        default:
            return state
    }
}




const rootReducer = combineReducers( {
    user: authReducer,
    googleData: googleReducer
} )

export default rootReducer
