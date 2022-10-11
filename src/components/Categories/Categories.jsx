import React, {useState} from 'react';
import {categories} from "../../assets/data/categories";

const Categories = () => {
    const [activeClass, setActiveClass] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, i) => (
                        <li onClick={() => setActiveClass(i)}
                            className={activeClass === i ? 'active' : ''}
                            key={category.id}>
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;