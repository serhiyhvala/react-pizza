import './assets/styles/app.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
