import React from 'react';
import madi from '../../images/madi.png';

const About = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='flex justify-center'>
				<img src={madi} alt='Madison' className='w-36 h-36 object-cover rounded-full' />
			</div>
			<h1 className='text-center text-4xl mt-4 font-semibold'>Madison</h1>
			<p className='mt-6 text-center text-xl'>
				I'm a web developer with a passion for creating dynamic and interactive web applications. I specialize in using JavaScript, React,
				and other modern web technologies to build scalable and user-friendly websites and applications.
			</p>
		</div>
	);
};

export default About;
