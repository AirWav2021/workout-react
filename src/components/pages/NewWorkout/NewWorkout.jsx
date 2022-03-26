import React, { useState } from 'react'
import { Layout } from '../../common/Layout'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../../images/new-workout-bg.jpg'
import { Field } from '../../ui/Field/Field'
import { Button } from '../../ui/Button/Button'
import styles from './NewWorkout.module.scss'

export const NewWorkout = () => {
	const [name, setName] = useState('')

	const handleSubmit = () => {
		console.log('Submit')
	}
	const navigate = useNavigate()

	return (
		<>
			<Layout bgImage={bgImage} />
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Enter name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Button text='Create' callback={() => {}}></Button>
				</form>
			</div>
			<button onClick={() => navigate(-2)}>Go 2 pages back</button>
			<button onClick={() => navigate(-1)}>Go back</button>
			<button onClick={() => navigate(1)}>Go forward</button>
			<button onClick={() => navigate(2)}>Go 2 pages forward</button>
		</>
	)
}
