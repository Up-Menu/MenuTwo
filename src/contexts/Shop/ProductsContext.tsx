import React, { createContext, useState } from 'react'
import { dummyProducts } from 'src/theme/Layout/services/dummy'
export const ProductsContext = createContext( null )

const ProductsContextProvider = ( { children } ) => {
  const [ products ] = useState( dummyProducts )
  return (
    <ProductsContext.Provider value={ { products } }>
      { children }
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
ProductsContext