import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ClearCart } from '../../assets/img/cart-clear.svg'
import { ReactComponent as CartLogo } from '../../assets/img/cart.svg'
import { ReactComponent as ComeBack } from '../../assets/img/come-back.svg'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { clearItems } from '../../redux/slices/cartSlice'
import EmptyCart from '../EmptyCart/EmptyCart'

const Cart = () => {
  const { totalPrice, items } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  const onClickClear = () => {
    if (window.confirm('Are you sure you want to clear all items?')) {
      dispatch(clearItems())
    }
  }

  if (!totalCount) {
    return <EmptyCart />
  }
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartLogo />
            Cart
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <ClearCart />
            <span>Clear Cart</span>
          </div>
        </div>
        <div className="content__items">
          {items.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total pizzas: <b>{totalCount} pcs.</b>
            </span>{' '}
            <span>
              Order price: <b>{totalPrice} $</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <ComeBack />
              <span>Come back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
