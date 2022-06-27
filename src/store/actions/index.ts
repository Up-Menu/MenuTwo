import { nanoid } from '@reduxjs/toolkit'
import timeoutPromise from '../helper/TimeOut'

// Actions
export const userLogin = ( payload ) => dispatch => {
    return timeoutPromise( 1000 )
        .then( () => (
            dispatch( {
                type: "USER_LOGIN",
                payload: {
                    userId: nanoid(),
                    ...payload
                }
            } ) )
        )
        .then( ( data ) => {
            console.log( "THEN: ", data )
            localStorage.setItem( "user", JSON.stringify( data ) )
        } )
}

export const userLogout = () => dispatch => {
    return timeoutPromise( 1000 )
        .then( () => (
            dispatch( {
                type: "USER_LOGOUT",
            } ) )
        )
        .then( () => {
            localStorage.removeItem( "user" )
        } )
}



// Actions
export const userAddBlog = ( payload ) => dispatch => {
    return timeoutPromise( 1000 )
        .then( () => (
            dispatch( {
                type: "USER_BLOG_ADD",
                payload: {
                    blogId: nanoid(),
                    ...payload
                }
            } ) )
        )
        .then( ( data ) => {
            console.log( "THEN: ", data )
            localStorage.setItem( "blog", JSON.stringify( data ) )
        } )
}

export const userRemoveBlog = () => dispatch => {
    localStorage.removeItem( "blog" )
    return dispatch( {
        type: "USER_BLOG_DELETE"
    } )
}