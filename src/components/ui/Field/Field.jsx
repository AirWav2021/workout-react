import React from 'react'
import styles from './Field.module.scss'

export const Field = ({ placeholder, value, onChange, type = 'text' }) => {
	return (
		<div>
			<input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className={styles.input}
			/>
		</div>
	)
}
