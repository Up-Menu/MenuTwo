
import { useContext } from 'react'
import { ProductsContext } from 'src/contexts/Shop/ProductsContext'

export const useProducts = () => {

    const ctx = useContext( ProductsContext )

    return {
        ...ctx
    }
}