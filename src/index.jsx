import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { FiltersProvider } from './context/contextFilters.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)