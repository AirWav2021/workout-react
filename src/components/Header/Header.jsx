import React from 'react'
import styles from './Header.module.scss'

import userImage from '../../images/header/user.svg'
import { Hamburger } from './Hamburger/Hamburger'
import arrowImage from '../../images/header/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = ({ backCallback }) => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button onClick={() => navigate(-1)} type='button'>
					<img src={arrowImage} alt='Auth' />
				</button>
			) : (
				<button type='button'>
					<img src={userImage} alt='Auth' />
				</button>
			)}

			<Hamburger />
		</header>
	)
}
