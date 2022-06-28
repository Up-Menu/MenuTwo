import { nanoid } from '@reduxjs/toolkit'
import timeoutPromise from '../helper/TimeOut'

// Actions
export const userLogin = ( payload: any ) => async ( dispatch: ( arg0: { type: string; payload: any } ) => any ) => {
    await timeoutPromise( 1000 )
    const data = (
        dispatch( {
            type: "USER_LOGIN",
            payload: {
                userId: nanoid(),
                ...payload
            }
        } ) )
    console.log( "THEN: ", data )
    localStorage.setItem( "user", JSON.stringify( data ) )
}

export const userLogout = () => ( dispatch: ( arg0: { type: string } ) => any ) => {
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
export const userSignIn = ( payload: any ) => async ( dispatch: ( arg0: { type: string; payload: any } ) => any ) => {
    await timeoutPromise( 1000 )
    const data = (
        dispatch( {
            type: "USER_SIGNIN",
            payload: {
                userId: nanoid(),
                ...payload
            }
        } ) )
    console.log( "THEN: ", data )
    // localStorage.setItem( "user", JSON.stringify( data ) )
}