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