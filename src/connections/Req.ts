
import Api from "src/api/Api"

export const SignInReq = ( value: any, fn: ( arg0: any ) => void ) => {
    Api
        .post( 'Account/Register', value, '' )
        .then( response => {
            fn( [ response.data.status, response.data.data ] )
        } )
        .catch( err => console.log( err ) )
}

export const LoginReq = ( value: any, fn: ( arg0: any ) => void ) => {
    Api
        .post( 'Account/Login', value, '' )
        .then( response => {
            fn( [ response.data.status, response.data.data.message ] )
        } )
        .catch( err => console.log( err ) )
}

export const GoogleReq = ( value: any, fn: ( arg0: any ) => void ) => {
    Api
        .post( 'Account/SSO', value, '' )
        .then( response => {
            fn( [ response.data.status, response.data.data.message ] )
        } )
        .catch( err => console.log( err ) )
}

export const AddMenuReq = ( value: any ) => {
    Api
        .post( 'Menu/AddMenu', value, '' )
        .then( response => {
            console.log( response )
        } )
        .catch( err => console.log( err ) )
}

export const GUIDsReq = ( count: any ) => {
    Api
        .get( `Menu/GetGUIDs?count=${ count }`, '', '' )
        .then( response => {
            console.log( response )
        } )
        .catch( err => console.log( err ) )
}

export const GetAllUsers = ( fn: ( arg0: any ) => void ) => {
    Api
        .get( 'Account/GetAllUsers', '', '' )
        .then( response => {
            fn( response.data )
        } )
        .catch( err => console.log( err ) )
}