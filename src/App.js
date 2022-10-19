import { Route, Routes } from 'react-router'

import './assets/styles/app.scss'
import Cart from './components/Cart/Cart'
import FullPizza from './components/FullPizza/FullPizza'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import MainLayout from './layouts/MainLayout'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='pizza/:id' element={<FullPizza />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
