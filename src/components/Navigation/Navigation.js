// Navigation.js

import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav className='navigation'>
			<ul className='flex justify-around py-4'>
				<li className='nav-item'>
					<NavLink to='/' className='text-white hover:text-gray-200' end>
						About Me
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/portfolio' className='text-white hover:text-gray-200'>
						Portfolio
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/contact' className='text-white hover:text-gray-200'>
						Contact
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/resume' className='text-white hover:text-gray-200'>
						Resume
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
