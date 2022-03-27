import React, { useState } from 'react'
import { Layout } from '../../common/Layout'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../../images/auth-bg.png'
import { Field } from '../../ui/Field/Field'
import { Button } from '../../ui/Button/Button'

import styles from './Auth.module.scss'
import { Alert } from '../../ui/Alert/Alert'

export const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [type, setType] = useState('auth')

	const handleSubmit = e => {
		e.preventDefault()
		if (type === 'auth') {
			console.log('Auth')
		} else {
			console.log('Reg')
		}
	}

	const navigate = useNavigate()

	return (
		<>
			<Layout bgImage={bgImage} heading='Auth || Register' />
			<div className='wrapper-inner-page'>
				{true && <Alert type='error' text='You have been successfuly' />}
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Enter email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Field
						placeholder='Enter password'
						value={password}
						onChange={({ target: { value } }) => setPassword(value)}
						required
					/>
					<div className={styles.wrapperButtons}>
						<Button text='Sign in' callback={() => setType('auth')} />
						<Button text='Sign up' callback={() => setType('reg')} />
					</div>
				</form>
			</div>
			<button onClick={() => navigate(-2)}>Go 2 pages back</button>
			<button onClick={() => navigate(-1)}>Go back</button>
			<button onClick={() => navigate(1)}>Go forward</button>
			<button onClick={() => navigate(2)}>Go 2 pages forward</button>
		</>
	)
}
