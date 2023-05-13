import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<header className='p-5 bg-gray-300 text-white'>
			<h1 className='text-4xl'>Madison Scercy</h1>
			<Navigation></Navigation>
		</header>
	);
};

export default Header;
