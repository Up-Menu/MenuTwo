
import { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useTypedDispatch } from 'src/store'
import { userLogin } from "src/store/actions"
import { Button } from "antd"


declare let google: { accounts: { id: { initialize: ( arg0: { client_id: string; callback: ( response: any ) => void } ) => void; renderButton: ( arg0: HTMLElement, arg1: { theme: string; size: string } ) => void } } }

export const Google = () => {
    const dispatch = useTypedDispatch()

    function handleCallbackResponse ( response: any ) {
        let userObj: any = jwt_decode( response.credential )
        const userData: object = {
            role: userObj.email,
            password: '',
            remember: true
        }
        dispatch( userLogin( userData, notification => notification ) )
    }

    useEffect( () => {
        google.accounts.id.initialize( {
            client_id: '901720212338-h3afddsalov3ujsieft24k7148jes3dd.apps.googleusercontent.com',
            callback: handleCallbackResponse
        } )
        google.accounts.id.renderButton( document.getElementById( "singInDiv" ), {
            theme: "outline",
            size: "large",
        } )
    }, [] )
    return (
        <>
            <Button id='singInDiv' />
        </>
    )
}