import React from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as Minus } from '../../assets/img/cart-minus.svg'
import { ReactComponent as RemoveCart } from '../../assets/img/cart-remove.svg'
import { ReactComponent as Plus } from '../../assets/img/plus.svg'
import { addItems, minusItem, removeItems } from '../../redux/slices/cartSlice'

const CartItem = ({ id, title, price, count, imageUrl, type, size }) => {
	const dispatch = useDispatch()

	const onClickPlus = () => {
		dispatch(addItems({ id }))
	}

	const onClickMinus = () => {
		dispatch(minusItem(id))
	}

	const onClickRemove = () => {
		if (window.confirm('Are you sure you want to remove?')) {
			dispatch(removeItems(id))
		}
	}
	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>
					{type}, {size}
				</p>
			</div>
			<div className='cart__item-count'>
				<div
					onClick={onClickMinus}
					className='button button--outline button--circle cart__item-count-minus'
				>
					<Minus />
				</div>
				<b>{count}</b>
				<div
					onClick={onClickPlus}
					className='button button--outline button--circle cart__item-count-plus'
				>
					<Plus />
				</div>
			</div>
			<div className='cart__item-price'>
				<b>{price * count} $</b>
			</div>
			<div className='cart__item-remove'>
				<div
					onClick={onClickRemove}
					className='button button--outline button--circle'
				>
					<RemoveCart />
				</div>
			</div>
		</div>
	)
}

export default CartItem
