import './assets/styles/app.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<>
			<div className='wrapper'>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home searchValue={searchValue} />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App
