/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

//1. Crea el contexto (este es el que tengo que consumir)
export const FiltersContext = createContext()

//2. Crea el Provider, para proveer el contexto (este es el que provee de acceso al contexto)
export function FiltersProvider ({children}) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
       filters,
       setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}