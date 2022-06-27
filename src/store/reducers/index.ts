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
// write blogReducer to add and remove blog
const blogReducer = ( state = {}, action: { type: any; payload: any } ) => {
    switch ( action.type ) {
        case "USER_BLOG_ADD":
            return {
                blog: action.payload
            }
        case "USER_BLOG_DELETE":
            return {
                blog: null
            }
        default:
            return state
    }
}
const rootReducer = combineReducers( {
    user: authReducer,
    blog: blogReducer
} )

export default rootReducer
