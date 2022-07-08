export type CryptoOrderStatus = 'completed' | 'pending' | 'failed'

export interface CryptoOrder {
  id: string
  status: CryptoOrderStatus
  orderDate: number
  productName: string
  category: string
  price: string,
  foodImage: string
}
