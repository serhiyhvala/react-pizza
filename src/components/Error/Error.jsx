import React from 'react'

import styles from '../NotFound/NotFound.module.scss'

const Error = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				404
			</h1>
			<p className={styles.description}>
				Unfortunately, this page is not available in our online store
			</p>
		</div>
	)
}

export default Error
