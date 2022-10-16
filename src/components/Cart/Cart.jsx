import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ClearCart } from '../../assets/img/cart-clear.svg'
import { ReactComponent as Plus } from '../../assets/img/plus.svg'
import { ReactComponent as RemoveCart } from '../../assets/img/cart-remove.svg'
import { ReactComponent as Minus } from '../../assets/img/cart-minus.svg'
import { ReactComponent as CartLogo } from '../../assets/img/cart.svg'
import { ReactComponent as ComeBack } from '../../assets/img/come-back.svg'

const Cart = () => (
  <div className="container container--cart">
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <CartLogo />
          Cart
        </h2>
        <div className="cart__clear">
          <ClearCart />
          <span>Clear Cart</span>
        </div>
      </div>
      <div className="content__items">
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Cheese chicken</h3>
            <p>Thin dough, 26 cm.</p>
          </div>
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              <Minus />
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              <Plus />
            </div>
          </div>
          <div className="cart__item-price">
            <b>6 $</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              <RemoveCart />
            </div>
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Total pizzas: <b>4 pcs.</b>
          </span>{' '}
          <span>
            Order price: <b>24 $</b>{' '}
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

export default Cart
