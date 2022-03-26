import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Home } from '../components/pages/Home/Home'
import { NewWorkout } from '../components/pages/NewWorkout/NewWorkout'

export const Router = () => {
	return (
		<>
			<div className='App_wrapper'>
				<div className='Navigate'>
					<NavLink to='/' className='link'>
						Home
					</NavLink>
					<NavLink to='/new-workout' className='link'>
						<NewWorkout />
					</NavLink>
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/new-workout' element={<NewWorkout />} />
				</Routes>
			</div>
		</>
	)
}