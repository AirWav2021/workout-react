import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import hamburgerImage from '../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../images/header/hamburger-close.svg'
import styles from './Hamburger.module.scss'
import { menu } from './menuBase'

export const Hamburger = () => {
	const [show, setShow] = useState(false)
	console.log(show)

	const handleLogout = () => {
		console.log('logout')
	}

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				type='button'
				onClick={() => setShow(!show)}
			>
				<img src={show ? hamburgerCloseImage : hamburgerImage} alt='Menu' />
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
				<ul>
					{menu.map((item, idx) => (
						<li key={`'menu'${idx}`}>
							<NavLink to={item.link}>{item.title}</NavLink>
						</li>
					))}
					<li>
						<button onClick={handleLogout}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
