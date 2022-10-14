import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {setSort} from '../../redux/slices/fliterSlice'

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
          <img src={sortLabel} alt=''/>
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
