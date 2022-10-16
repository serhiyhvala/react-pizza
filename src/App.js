import './assets/styles/app.scss'
import { createContext, useState } from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'

export const SearchContext = createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default App
