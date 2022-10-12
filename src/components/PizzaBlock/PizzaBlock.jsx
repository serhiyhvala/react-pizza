import React, { useState } from 'react'
import { ReactComponent as Plus } from '../../assets/img/plus.svg'

const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
	const [sizePizza, setSizePizza] = useState(0)
	const [pizzaValue, setPizzaValue] = useState(0)
	const [typePizza, setTypePizza] = useState(0)

	const typeNames = ['thin', 'traditional']

	const handleChangeValue = () => {
		setPizzaValue(pizzaValue + 1)
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
						onClick={handleChangeValue}
					>
						<Plus />
						<span>Add</span>
						<i>{pizzaValue}</i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
