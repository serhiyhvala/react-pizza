import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Plus } from '../../assets/img/plus.svg'
import { addItems } from '../../redux/slices/cartSlice'

const PizzaBlock = ({ id, title, price, imageUrl, sizes, types }) => {
	const [sizePizza, setSizePizza] = useState(0)
	const [typePizza, setTypePizza] = useState(0)
	const cartItem = useSelector(state =>
		state.cart.items.find(obj => obj.id === id)
	)
	const addedCount = cartItem ? cartItem.count : 0

	const dispatch = useDispatch()

	const typeNames = ['thin', 'traditional']

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			type: typeNames[typePizza],
			size: sizes[sizePizza]
		}
		dispatch(addItems(item))
	}

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
				<h4 className='pizza-block__title'>{title}</h4>
				<div className='pizza-block__selector'>
					<ul>
						{types.map(typeId => (
							<li
								onClick={() => setTypePizza(typeId)}
								className={typePizza === typeId ? 'active' : ''}
								key={typeId}
							>
								{typeNames[typeId]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, i) => (
							<li
								onClick={() => setSizePizza(i)}
								className={sizePizza === i ? 'active' : ''}
								key={i}
							>
								{size}
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>from {price} $</div>
					<button
						className='button button--outline button--add'
						onClick={onClickAdd}
					>
						<Plus />
						<span>Add</span>
						{addedCount > 0 && <i>{addedCount}</i>}
					</button>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
