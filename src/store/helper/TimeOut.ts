// // Helpers
// const timeoutPromise = ( ms: number ) => {
//     let ctr: number | NodeJS.Timeout, rej: ( reason?: any ) => void
//     const promise = new Promise( function ( resolve, reject ) {
//         ctr = setTimeout( resolve, ms )
//         rej = reject
//     } )
//     promise.cancel = () => {
//         clearTimeout( ctr )
//         rej( Error( "Cancelled" ) )
//     }
//     return promise
// }
// export default timeoutPromise


interface CancellablePromise<T> extends Promise<T> {
    cancel: () => void
}

type QueryPromise = CancellablePromise<string | boolean>

function timeoutPromise ( ms: number ): QueryPromise {
    let ctr: any, rej: ( reason?: any ) => void
    let p: Partial<QueryPromise> = new Promise<string | boolean>( ( resolve, reject ) => {
        ctr = setTimeout( resolve, ms )
        rej = reject
    } )
    p.cancel = () => {
        clearTimeout( ctr )
        rej( Error( "Cancelled" ) )
    }
    return p as QueryPromise
}
export default timeoutPromise