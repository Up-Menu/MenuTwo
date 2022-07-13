

import toast from "react-hot-toast"
import { Renderable, ValueFunction, Toast } from "react-hot-toast/dist/core/types"


export const promiseNotify = ( callBackFn: any, message: { loading: any; success: any; error: any } ) => {
    const myPromise = callBackFn
    toast.promise( myPromise, {
        loading: message.loading,
        success: message.success,
        error: message.error,
    } )
}

export const simpleNotify = ( setting: { message: Renderable | ValueFunction<Renderable, Toast>; position: any; style: any; className: any; icon: any; iconTheme: any; ariaProps: any } ) => {
    toast( setting.message, {
        duration: 1000000,
        position: setting.position,
        // Styling
        style: setting.style,
        className: setting.className,
        // Custom Icon
        icon: setting.icon,
        // Change colors of success/error/loading icon
        iconTheme: setting.iconTheme,
        // Aria
        ariaProps: setting.ariaProps,
    } )
}