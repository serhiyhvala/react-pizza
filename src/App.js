import './assets/styles/app.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'

function App() {
	return (
		<>
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
		</>
	)
}

export default App
