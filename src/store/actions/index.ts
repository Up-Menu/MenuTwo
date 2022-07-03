import { SignInReq, LoginReq } from './../../connections/Req'
import { nanoid } from '@reduxjs/toolkit'
import timeoutPromise from '../helper/TimeOut'
import toast from 'react-hot-toast'
import { NavigateFunction } from 'react-router'








//  Login Actions
export const userLogin = ( payload: any, fn: ( arg0: any ) => void ) => async ( dispatch: ( arg0: { type: string; payload: any } ) => any ) => {
    const payloadWithOutRememberKey = {
        email: payload.email,
        password: payload.password,
    }


    LoginReq( payloadWithOutRememberKey, ( server_response ) => {
        if ( server_response[ 0 ] == "NotFound" ) {
            fn( toast.error( server_response[ 1 ] ) )
            return
        }
        else if ( server_response[ 0 ] == "Error" ) {
            fn( toast.error( server_response[ 1 ] ) )
            return
        }
        else if ( server_response[ 0 ] == "InActive" ) {
            fn( toast.error( server_response[ 1 ] ) )
            return
        }
        else {
            const data = (
                dispatch( {
                    type: "USER_LOGIN",
                    payload: {
                        userId: nanoid(),
                        ...payload
                    }
                } ) )
            fn( toast.success( "!خوش آمدید" ) )
            if ( payload.remember ) localStorage.setItem( "user", JSON.stringify( data ) )
            else return
        }
    } )
}

// Logout Action
export const userLogout = () => ( dispatch: ( arg0: { type: string } ) => any ) => {
    return timeoutPromise( 500 )
        .then( () => (
            dispatch( {
                type: "USER_LOGOUT",
            } ) )
        )
        .then( () => {
            localStorage.removeItem( "user" )
        } )
}




// SignIn Actions
export const userSignIn = ( payload: any, fn: ( arg0: any ) => void, nav: NavigateFunction ) => async ( dispatch: ( arg0: { type: string; payload: any } ) => any ) => {
    const payloadWithOutRememberKey = {
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        firstName: payload.firstName,
        lastName: payload.lastName,
        address: payload.address,
        cellPhone: payload.cellPhone
    }

    SignInReq( payloadWithOutRememberKey, ( server_response ) => {
        if ( server_response[ 0 ] == 'Success' ) {
            dispatch( {
                type: "USER_SIGNIN",
                payload: {
                    ...payload
                }
            } )
            fn( toast.success( server_response[ 1 ] ) )
            nav( "/dashboards/tasks" )
        } else fn( toast.error( server_response[ 1 ] ) )
    } )
}


// Google SSO Actions
export const userGoogleLogIn = (
    payload: any,
    fn: ( arg0: any ) => void,
    nav: NavigateFunction
) => async ( dispatch: ( arg0: { type: string; payload: any } ) => any ) => {
    const payloadWithOutRememberKey = {
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        firstName: payload.firstName,
        lastName: payload.lastName,
        address: payload.address,
        cellPhone: payload.cellPhone
    }
    const data = (
        dispatch( {
            type: "GOOGLE_SSO",
            payload: {
                userId: nanoid(),
                ...payload
            }
        } ) )
    localStorage.setItem( "googleSSO", JSON.stringify( data ) )

    SignInReq( payloadWithOutRememberKey, ( server_response ) => {
        if ( server_response[ 0 ] == 'Success' ) {
            LoginReq( { email: payload.email, password: payload.password, }, ( server_response_log ) => {
                if ( server_response_log[ 0 ] == "NotFound" ) {
                    fn( toast.error( server_response_log[ 1 ] ) )
                    return
                }
                else if ( server_response_log[ 0 ] == "Error" ) {
                    fn( toast.error( server_response_log[ 1 ] ) )
                    return
                }
                else if ( server_response_log[ 0 ] == "InActive" ) {
                    fn( toast.error( server_response_log[ 1 ] ) )
                    return
                }
                else {
                    // const data = (
                    //     dispatch( {
                    //         type: "GOOGLE_SSO",
                    //         payload: {
                    //             userId: nanoid(),
                    //             ...payload
                    //         }
                    //     } ) )
                    // localStorage.setItem( "googleSSO", JSON.stringify( data ) )
                    fn( toast.success( "!خوش آمدید" ) )
                }
            } )
            nav( "/dashboards/tasks" )
        } else fn( toast.error( server_response[ 1 ] ) )
    } )
}
