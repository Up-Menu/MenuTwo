
import { useContext } from 'react'
import { ProductsContext } from 'src/context/Shop/ProductsContext'

export const useProducts = () => {

    const ctx = useContext( ProductsContext )

    return {
        ...ctx
    }
}