import { useContext } from 'react'
import { CartContext } from 'src/context/Shop/CartContext'

export const useCart = () => {
  const ctx = useContext( CartContext )
  return {
    ...ctx,
  }
}
