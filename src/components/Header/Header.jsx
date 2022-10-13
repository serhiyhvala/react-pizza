import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../assets/img/pizza-logo.svg'
import { ReactComponent as Cart } from '../../assets/img/cart.svg'
import Search from '../Search/Search'

const Header = ({ searchValue, setSearchValue }) => {
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
				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className='header__cart'>
					<Link to='/cart' className='button button--cart'>
						<span>8 $</span>
						<div className='button__delimiter'></div>
						<Cart />
						<span>3</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
