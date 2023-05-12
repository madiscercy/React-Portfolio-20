// Header.js

import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<header className='bg-gray-200 text-white py-5'>
			<div className='container mx-auto'>
				<h1 className='text-4xl'>John Doe's Portfolio</h1>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
