import { Link } from 'react-router-dom'
import { useCart } from 'src/hooks/useCart'
import { formatNumber } from 'src/helpers/utils'
import { Button } from '@mui/material'

const ProductItem = ( { product } ) => {
  const { addProduct, cartItems, increase } = useCart()

  const isInCart = ( product: { id: any } ) => {
    return !!cartItems.find( ( item: { id: any } ) => item.id === product.id )
  }

  return (
    <div className="card card-body">
      <img
        style={ { borderRadius: '10px', display: 'block', margin: '0 auto 10px', width: '250px', height: "150px" } }
        className="img-fluid"
        src={ product.photo + '?v=' + product.id }
        alt=""
      />
      <p>{ product.name }</p>
      <h3 className="text-left">{ formatNumber( product.price ) }</h3>
      <div className="text-right">
        <Button component={ Link } to={ '/foodDetails' } sx={ { margin: 1 } } href="#text-buttons" color="primary">
          Details
        </Button>

        { isInCart( product ) && (
          <Button onClick={ () => increase( product ) } sx={ { margin: 1 } } color="primary">
            Add more
          </Button>
        ) }

        { !isInCart( product ) && (
          <Button onClick={ () => addProduct( product ) } variant="outlined" sx={ { margin: 1 } } color="primary">
            Add to cart
          </Button>
        ) }
      </div>
    </div>
  )
}

export default ProductItem
