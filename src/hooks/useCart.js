import { useContext } from 'react'
import { CartContext } from '../context/contextCart'

export function useCart() {
  const context = useContext(CartContext)

  return context
}