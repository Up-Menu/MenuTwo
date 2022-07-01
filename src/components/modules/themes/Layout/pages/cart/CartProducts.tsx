import React from 'react'
import CartItem from './CartItem'
import { useCart } from 'src/components/modules/hooks/useCart'
import styles from 'src/assets/styles/scss/CartProducts.module.scss'

const CartProducts = () => {
  const { cartItems } = useCart()

  return (
    <div className={ styles.p__container }>
      <div className="card card-body border-0">
        { cartItems.map( ( product: { id: React.Key } ) => (
          <CartItem key={ product.id } product={ product } />
        ) ) }
      </div>
    </div>
  )
}

export default CartProducts
