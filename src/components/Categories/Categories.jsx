import React from 'react'
import { categories } from '../../assets/data/categories'

const Categories = ({ value, onClickCategory }) => {
	return (
		<div className='categories'>
			<ul>
				{categories.map((category, i) => (
					<li
						onClick={() => onClickCategory(i)}
						className={value === i ? 'active' : ''}
						key={category.id}
					>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
