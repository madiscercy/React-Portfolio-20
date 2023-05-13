import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<header className='p-5 bg-red-200 text-gray-700'>
			<h1 className='text-4xl'>Madison Scercy</h1>
			<Navigation></Navigation>
		</header>
	);
};

export default Header;
