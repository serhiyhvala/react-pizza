import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Loader from '../Loader/Loader'
import PizzaBlock from '../PizzaBlock/PizzaBlock'

const Home = ({ searchValue }) => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [activeClass, setActiveClass] = useState(0)
	const [pizzaSort, setPizzaSort] = useState({
		name: 'popularity',
		sortType: 'rating'
	})
	useEffect(() => {
		setIsLoading(true)

		const sortBy = pizzaSort.sortType.replace('-', '')
		const order = pizzaSort.sortType.includes('-') ? 'asc' : 'desc'
		const category = activeClass > 0 ? `category=${activeClass}` : ''

		fetch(
			`https://63455cb939ca915a69fcd328.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
		)
			.then(res => res.json())
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [activeClass, pizzaSort])
	console.log(searchValue)
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={activeClass}
					onClickCategory={i => setActiveClass(i)}
				/>
				<Sort value={pizzaSort} setSort={i => setPizzaSort(i)} />
			</div>
			<h2 className='content__title'>All Pizzas</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Loader key={index} />)
					: items
							.filter(obj =>
								obj.title
									.toLocaleLowerCase()
									.includes(searchValue.toLocaleLowerCase())
							)
							.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	)
}

export default Home
