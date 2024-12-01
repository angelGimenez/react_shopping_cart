import { products } from '../mocks/products.json'
import { useContext } from 'react'
import { FiltersContext } from '../context/contextFilters.jsx'

export function useFilters() {

  const { filters } = useContext(FiltersContext)

  function filterProducts(products) {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return { filteredProducts }
}