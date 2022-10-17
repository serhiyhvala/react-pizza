import React from 'react'
import { Link } from 'react-router-dom'

import cartEmpty from '../../assets/img/empty-cart.png'

const EmptyCart = () => {
	return (
		<div className='content'>
			<div className='container container--cart'>
				<div className='cart cart--empty'>
					<h2>
						Cart Empty
						<icon> 😕</icon>
					</h2>
					<p>
						You probably haven't ordered pizza yet..
						<br />
						To order pizza, go to the main page.
					</p>
					<img src={cartEmpty} alt='Empty Cart' />
					<Link to='/' className='button button--black'>
						<span>Go Back</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EmptyCart
