import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Loader from '../Loader/Loader'
import PizzaBlock from '../PizzaBlock/PizzaBlock'

const Home = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		fetch('https://63455cb939ca915a69fcd328.mockapi.io/items')
			.then(res => res.json())
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>All Pizzas</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Loader key={index} />)
					: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	)
}

export default Home
