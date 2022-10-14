import React, { useState } from 'react'
import sortLabel from '../../assets/img/sortLabel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { sortList } from '../../assets/data/sortList'
import { setSort } from '../../redux/slices/fliterSlice'

const Sort = () => {
	const dispatch = useDispatch()
	const sort = useSelector(state => state.filter.sort)
	const [visiblePopUp, setVisiblePopUp] = useState(false)

	const onClickSetItem = obj => {
		dispatch(setSort(obj))
		setVisiblePopUp(false)
	}
	return (
		<div className='sort' onClick={() => setVisiblePopUp(!visiblePopUp)}>
			<div className='sort__label'>
				<img src={sortLabel} alt='' />
				<b>Sort by:</b>
				<span onClick={() => setVisiblePopUp(!visiblePopUp)}>{sort.name}</span>
			</div>
			{visiblePopUp && (
				<div className='sort__popup'>
					<ul>
						{sortList.map((obj, i) => (
							<li
								onClick={() => onClickSetItem(obj)}
								className={sort.name === obj.name ? 'active' : ''}
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
