import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from 'src/contexts/Shop/CartContext'
import { CartIcon } from '../icons'
import styles from 'src/assets/styles/scss/header.module.scss'
import { Box, Button } from '@mui/material'

const Header = () => {
  const { itemCount } = useContext( CartContext )

  return (
    <header className={ styles.header }>
      <Button component={ Link } to={ '/theme/cart' } sx={ { margin: 1 } } href="#text-buttons" color="primary">
        <Box display="flex" justifyContent="center">
          <CartIcon width={ '' } />

          Cart ({ itemCount })
        </Box>
      </Button>
      <Button variant="outlined" component={ Link } to={ '/theme/store' } sx={ { margin: 1 } } href="#text-buttons" color="primary">
        Store
      </Button>
    </header>
  )
}

export default Header
