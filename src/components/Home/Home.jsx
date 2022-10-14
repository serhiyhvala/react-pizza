import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {MOCK_API_ENDPOINT} from "../../constants";
import {setCategoryId} from '../../redux/slices/fliterSlice'

import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Loader from '../Loader/Loader'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Pagination from '../Pagination/Pagination'
import {SearchContext} from '../../App'


const Home = () => {
  const {categoryId, sort} = useSelector(state => state.filter)
  const {sortType} = sort
  const dispatch = useDispatch()

  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)

      const sortBy = sortType.replace('-', '')
      const order = sortType.includes('-') ? 'asc' : 'desc'
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const search = searchValue ? `&search=${searchValue}` : ''

      await fetch(
          `${MOCK_API_ENDPOINT}/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
      )
          .then(res => res.json())
          .then(json => {
            setItems(json)
          })
          .finally(() => setIsLoading(false))
    }

    fetchItems();
  }, [categoryId, sortType, searchValue, currentPage])

  const onClickCategory = id => {
    dispatch(setCategoryId(id))
  }

  return (
      <div className='container'>
        <div className='content__top'>
          <Categories value={categoryId} onClickCategory={onClickCategory}/>
          <Sort/>
        </div>
        <h2 className='content__title'>All Pizzas</h2>
        <div className='content__items'>
          {isLoading
              ? [...new Array(6)].map((_, index) => <Loader key={index}/>)
              : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
        {categoryId === 0 && (
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        )}
      </div>
  )
}

export default Home
