import React from 'react'

const categories = [
  {
    name: 'All',
    id: 0
  },
  {
    name: 'Meat',
    id: 1
  },
  {
    name: 'Vegetarian',
    id: 2
  },
  {
    name: 'Grill',
    id: 3
  },
  {
    name: 'Spicy',
    id: 4
  },
  {
    name: 'Closed',
    id: 5
  },
]

const Categories = ({ value, onClickCategory }) => (
    <div className='categories'>
      <ul>
        {categories.map((category, i) => (
            <li
                onClick={() => onClickCategory(i)}
                className={value === i ? 'active' : ''}
                key={category.id}
            >
              {category.name}
            </li>
        ))}
      </ul>
    </div>
)

export default Categories
