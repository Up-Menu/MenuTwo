function Importer ( r: __WebpackModuleApi.RequireContext ) {
    let images = {}
    r.keys().map( ( item: string ) => {
        return images[ item.replace( './', '' ) ] = r( item )
    } )
    return images
}

const images = Importer( require.context( './assets/images/', true, /\.(png|jpe?g|svg|jpg)$/ ) )
export default images