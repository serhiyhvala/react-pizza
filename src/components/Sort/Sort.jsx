import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSort } from '../../redux/slices/fliterSlice'

import sortLabel from '../../assets/img/sortLabel.svg'

const sortList = [
  {
    name: 'popularity (DESC)',
    sortType: 'rating'
  },
  {
    name: 'popularity (ASC)',
    sortType: '-rating'
  },
  {
    name: 'price (DESC)',
    sortType: 'price'
  },
  {
    name: 'price (ASC)',
    sortType: '-price'
  },
  {
    name: 'alphabet (DESC)',
    sortType: 'title'
  },
  {
    name: 'alphabet (ASC)',
    sortType: '-title'
  }
]

const Sort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const sort = useSelector(state => state.filter.sort)
  const dispatch = useDispatch()

  const onClickSetItem = obj => {
    dispatch(setSort(obj))
    setVisiblePopup(false)
  }

  const togglePopupVisibility = () => setVisiblePopup(!visiblePopup)

  return (
    <div className="sort" onClick={togglePopupVisibility}>
      <div className="sort__label">
        <img src={sortLabel} alt="" />
        <b>Sort by:</b>
        <span onClick={togglePopupVisibility}>{sort.name}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
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
