import React from 'react';
import githubLogo from '../../images/github-logo.png';

const Footer = () => {
	return (
		<footer className='flex items-center justify-center h-16 bg-blue-500 text-white'>
			<a href='https://github.com/madiscercy' target='_blank' rel='noopener noreferrer'>
				<img src={githubLogo} alt='Github Logo' className='h-8 w-8' />
			</a>
		</footer>
	);
};

export default Footer;
