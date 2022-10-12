import './assets/styles/app.scss'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState([])
	useEffect(() => {
		fetch('https://63455cb939ca915a69fcd328.mockapi.io/items')
			.then(res => res.json())
			.then(json => setItems(json))
	}, [])
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>All Pizzas</h2>
						<div className='content__items'>
							{items.map(obj => (
								<PizzaBlock key={obj.id} {...obj} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
