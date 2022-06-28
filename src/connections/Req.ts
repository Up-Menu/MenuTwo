
import Api from "src/api/Api"



export const SignUpReq = ( value: any ) => {
    Api
        .post( 'Account/Register', value, '' )
        .then( ( response ) => {
            const SERVER_ANSWER = response.data.status
            const SERVER_MESSAGE = response.data.data
            if ( SERVER_ANSWER === 'Success' ) {
                alert( SERVER_MESSAGE )
            }
            else alert( SERVER_MESSAGE )
        } )
        .catch( ( err ) => console.log( err ) )
}

export const LoginReq = ( value: any ) => {
    Api
        .post( 'Account/Login', value, '' )
        .then( ( response ) => {
            const SERVER_ANSWER = response.data.status
            const SERVER_MESSAGE = response.data.data.message
            if ( SERVER_ANSWER === 'NotFound' ) alert( SERVER_MESSAGE )
            else if ( SERVER_ANSWER === 'Error' ) alert( SERVER_MESSAGE )
            else if ( SERVER_ANSWER === 'InActive' ) alert( SERVER_MESSAGE )
            else {
                localStorage.setItem( 'isLoggedIn', '1' )
                setTimeout( () => window.location.replace( '/dashboard' ), 1500 )
            }
            console.log( response )
        } )
        .catch( ( err ) => console.log( err ) )
}

export const AddMenuReq = ( value: any ) => {
    Api
        .post( 'Menu/AddMenu', value, '' )
        .then( ( response ) => {
            console.log( response )
        } )
        .catch( ( err ) => console.log( err ) )
}

export const GUIDsReq = ( count: any ) => {
    Api
        .get( `Menu/GetGUIDs?count=${ count }`, '', '' )
        .then( ( response ) => {
            console.log( response )
        } )
        .catch( ( err ) => console.log( err ) )
}

export const GetAllUsers = ( fn: ( arg0: any ) => void ) => {
    Api
        .get( 'Account/GetAllUsers', '', '' )
        .then( ( response ) => {
            fn( response.data )
        } )
        .catch( ( err ) => console.log( err ) )
}