// Navigation.js

import React from 'react';
import './Navigation.css';

function Navigation() {
	return (
		<nav className='navigation'>
			<ul className='flex justify-around py-4'>
				<li className='nav-item'>
					<a href='#about' className='text-blue-500 hover:text-blue-800'>
						About Me
					</a>
				</li>
				<li className='nav-item'>
					<a href='#portfolio' className='text-blue-500 hover:text-blue-800'>
						Portfolio
					</a>
				</li>
				<li className='nav-item'>
					<a href='#contact' className='text-blue-500 hover:text-blue-800'>
						Contact
					</a>
				</li>
				<li className='nav-item'>
					<a href='#resume' className='text-blue-500 hover:text-blue-800'>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
