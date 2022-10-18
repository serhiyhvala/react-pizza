import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchContext } from '../../App'
import { MOCK_API_ENDPOINT } from '../../constants'
import { setCategoryId, setCurrentPage } from '../../redux/slices/fliterSlice'
import Categories from '../Categories/Categories'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Sort from '../Sort/Sort'

const Home = () => {
	const { categoryId, sort, currentPage } = useSelector(state => state.filter)
	const { sortType } = sort
	const dispatch = useDispatch()
	const loadingPizza = 4

	const { searchValue } = useContext(SearchContext)
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const fetchItems = async () => {
			setIsLoading(true)

			const sortBy = sortType.replace('-', '')
			const order = sortType.includes('-') ? 'asc' : 'desc'
			const category = categoryId > 0 ? `category=${categoryId}` : ''
			const search = searchValue ? `&search=${searchValue}` : ''

			try {
				const res = await axios.get(
					`${MOCK_API_ENDPOINT}/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
				)
				setItems(res.data)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchItems()
	}, [categoryId, sortType, searchValue, currentPage])

	const onClickCategory = id => {
		dispatch(setCategoryId(id))
	}

	const onChangePage = number => {
		dispatch(setCurrentPage(number))
	}

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onClickCategory={onClickCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>All Pizzas</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(loadingPizza)].map((_, index) => (
							<Loader key={index} />
					  ))
					: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
			{categoryId === 0 && (
				<Pagination currentPage={currentPage} onChangePage={onChangePage} />
			)}
		</div>
	)
}

export default Home
