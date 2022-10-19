import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as Cart } from '../../assets/img/cart.svg'
import logo from '../../assets/img/pizza-logo.svg'
import { selectCart } from '../../redux/slices/cartSlice'
import Search from '../Search/Search'

const Header = () => {
	const { items, totalPrice } = useSelector(selectCart)
	const { pathname } = useLocation()
	const totalCount = items.reduce((sum, item) => sum + item.count, 0)
	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img width='38' src={logo} alt='Pizza logo' />
						<div>
							<h1>React Pizza</h1>
							<p>The most delicious pizza in the universe</p>
						</div>
					</div>
				</Link>
				<Search />
				<div className='header__cart'>
					{pathname !== '/cart' && (
						<Link to='/cart' className='button button--cart'>
							<span>{totalPrice} $</span>
							<div className='button__delimiter'></div>
							<Cart />
							<span>{totalCount}</span>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
