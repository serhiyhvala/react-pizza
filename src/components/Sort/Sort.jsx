import React, { useState } from 'react'
import { sort } from '../../assets/data/sort'
import sortLabel from '../../assets/img/sortLabel.svg'

const Sort = ({ value, setSort }) => {
	const [visiblePopUp, setVisiblePopUp] = useState(false)

	const onClickSetItem = i => {
		setSort(i)
		setVisiblePopUp(false)
	}
	return (
		<div className='sort' onClick={() => setVisiblePopUp(!visiblePopUp)}>
			<div className='sort__label'>
				<img src={sortLabel} alt='' />
				<b>Sort by:</b>
				<span onClick={() => setVisiblePopUp(!visiblePopUp)}>{value.name}</span>
			</div>
			{visiblePopUp && (
				<div className='sort__popup'>
					<ul>
						{sort.map((obj, i) => (
							<li
								onClick={() => onClickSetItem(obj)}
								className={value.name === obj.name ? 'active' : ''}
								key={i}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
