import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Search from '../Search/Search'

import logo from '../../assets/img/pizza-logo.svg'
import { ReactComponent as Cart } from '../../assets/img/cart.svg'

const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>The most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} $</span>
            <div className="button__delimiter"></div>
            <Cart />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
