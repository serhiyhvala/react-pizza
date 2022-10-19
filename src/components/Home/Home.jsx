import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId, setCurrentPage } from '../../redux/slices/fliterSlice'
import { fetchPizzas } from '../../redux/slices/pizzaSlice'
import Categories from '../Categories/Categories'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Sort from '../Sort/Sort'

const Home = () => {
	const { categoryId, sort, currentPage, searchValue } = useSelector(
		state => state.filter
	)
	const { items, status } = useSelector(state => state.pizza)
	const { sortType } = sort
	const dispatch = useDispatch()
	const loadingPizza = 4

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const fetchItems = async () => {
			const sortBy = sortType.replace('-', '')
			const order = sortType.includes('-') ? 'asc' : 'desc'
			const category = categoryId > 0 ? `category=${categoryId}` : ''
			const search = searchValue ? `&search=${searchValue}` : ''

			dispatch(
				fetchPizzas({
					sortBy,
					order,
					category,
					search,
					currentPage
				})
			)
		}

		fetchItems()
	}, [categoryId, sortType, searchValue, currentPage])

	const onClickCategory = id => {
		dispatch(setCategoryId(id))
	}

	const onChangePage = number => {
		dispatch(setCurrentPage(number))
	}

	const loader = [...new Array(loadingPizza)].map((_, index) => (
		<Loader key={index} />
	))

	const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)

	return (
		<>
			{status === 'error' ? (
				<Error />
			) : (
				<div className='container'>
					<div className='content__top'>
						<Categories value={categoryId} onClickCategory={onClickCategory} />
						<Sort />
					</div>
					<h2 className='content__title'>All Pizzas</h2>
					<div className='content__items'>
						{status === 'loading' ? loader : pizzas}
					</div>
					{categoryId === 0 && (
						<Pagination currentPage={currentPage} onChangePage={onChangePage} />
					)}
				</div>
			)}
		</>
	)
}

export default Home
