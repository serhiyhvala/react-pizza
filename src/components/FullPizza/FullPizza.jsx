import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { ReactComponent as ComeBack } from '../../assets/img/come-back.svg'
import { MOCK_API_ENDPOINT } from '../../constants'

const FullPizza = () => {
	const [pizza, setPizza] = useState()
	const navigate = useNavigate()
	const { id } = useParams()
	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(`${MOCK_API_ENDPOINT}/items/` + id)
				setPizza(data)
			} catch (error) {
				alert('ERROR')
				navigate('/')
			}
		}

		fetchPizza()
	}, [])

	if (!pizza) {
		return <div className='content__waiting'>Waiting...</div>
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} $</h4>
			<div className='cart__bottom-buttons'>
				<Link to='/' className='button button--outline button--add go-back-btn'>
					<ComeBack />
					<span>Come back</span>
				</Link>
			</div>
		</div>
	)
}

export default FullPizza
