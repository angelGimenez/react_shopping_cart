import { useId, useContext } from 'react'
import { FiltersContext } from '../context/contextFilters.jsx'

export function Filters(){
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, setFilters } = useContext(FiltersContext)

  function handleChangeMinPrice(event) {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  function handleChangeCategory(event) {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>
    </section>
  )
}