export const formatNumber = ( number: number | bigint ) => {
  return new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
  } ).format( number )
}
