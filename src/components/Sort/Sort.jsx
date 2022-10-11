import React, {useState} from 'react';
import {sort} from '../../assets/data/sort'
import sortLabel from "../../assets/img/sortLabel.svg"

const Sort = () => {
    const [visiblePopUp, setVisiblePopUp] = useState(false)
    const [pizzaSort, setPizzaSort] = useState(0)

    const onClickSetItem = (i) => {
        setPizzaSort(i)
        setVisiblePopUp(false)
    }
    return (
        <div className="sort">
            <div className="sort__label">
                <img src={sortLabel} alt=""/>
                <b>Sort by:</b>
                <span onClick={() => setVisiblePopUp(!visiblePopUp)}>{sort[pizzaSort]}</span>
            </div>
            {
                visiblePopUp && (
                    <div className="sort__popup">
                        <ul>
                            {
                                sort.map((sort, i) => (
                                    <li
                                        onClick={() => onClickSetItem(i)}
                                        className={pizzaSort === i ? 'active' : ''}
                                        key={i}
                                    >
                                        {sort}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Sort;