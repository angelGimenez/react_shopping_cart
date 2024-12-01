import './styles.css'
import { useFilters } from './hooks/useFilters.js'
import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart.jsx'
import { Products } from './components/Products.jsx'
import { CartProvider } from './context/contextCart.jsx'

export function App() {

  const { filteredProducts } = useFilters()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}
