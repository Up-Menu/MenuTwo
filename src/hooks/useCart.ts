import { useContext } from 'react'
import { CartContext } from 'src/contexts/Shop/CartContext'

export const useCart = () => {
  const ctx = useContext( CartContext )
  return {
    ...ctx,
  }
}
