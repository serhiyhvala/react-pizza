import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='138' cy='138' r='138' />
		<rect x='0' y='296' rx='10' ry='10' width='280' height='29' />
		<rect x='0' y='345' rx='10' ry='10' width='280' height='88' />
		<rect x='0' y='449' rx='10' ry='10' width='95' height='30' />
		<rect x='125' y='442' rx='25' ry='25' width='152' height='45' />
	</ContentLoader>
)

export default Loader
