import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router'

import './assets/styles/app.scss'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
