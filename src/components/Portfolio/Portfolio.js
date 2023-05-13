import React from 'react';

const projects = [
	{
		name: 'Bits and Bytes',
		image: require('../../images/bits-and-bytes.png'),
		deployedUrl: 'https://bits-and-bytes.herokuapp.com/',
		repoUrl: 'https://github.com/IsaiahGz/bits-and-bytes',
	},
	{
		name: 'Simultaneous Searches',
		image: require('../../images/simultaneous-searches.png'),
		deployedUrl: 'https://csnyder94.github.io/simultaneous-searches/',
		repoUrl: 'https://github.com/csnyder94/simultaneous-searches',
	},
	{
		name: 'Note Taker',
		image: require('../../images/note-taker.png'),
		deployedUrl: 'https://module-11-note-taker.herokuapp.com/',
		repoUrl: 'https://github.com/madiscercy/Note-Taker-11',
	},
	{
		name: 'Weather Dashboard',
		image: require('../../images/weather-dashboard.png'),
		deployedUrl: 'https://madiscercy.github.io/Weather-Dashboard06/',
		repoUrl: 'https://github.com/madiscercy/Weather-Dashboard06',
	},
	{
		name: 'E-commerce',
		image: require('../../images/e-commerce.png'),
		deployedUrl: 'https://drive.google.com/file/d/1m3FZ3JD9BR4C4dxjSomOx3iI8lE1kWs3/view',
		repoUrl: 'https://github.com/madiscercy/E-Commerce-Back-End-13',
	},
	{
		name: 'Code Quiz',
		image: require('../../images/code-quiz.png'),
		deployedUrl: 'https://madiscercy.github.io/Code-Quiz-Challenge04/',
		repoUrl: 'https://github.com/madiscercy/Code-Quiz-Challenge04',
	},
];

const Portfolio = () => {
	return (
		<div className='p-5'>
			<h2 className='text-2xl font-bold mb-5'>Portfolio</h2>
			<div className='grid grid-cols-3 gap-4'>
				{projects.map((project, index) => (
					<div key={index} className='border p-2'>
						<img src={project.image} alt={project.name} className='w-full' />
						<h3 className='font-bold mt-2'>{project.name}</h3>
						<a href={project.deployedUrl} target='_blank' rel='noreferrer' className='text-gray-500 hover:text-gray-800'>
							Deployed Application
						</a>
						<br />
						<a href={project.repoUrl} target='_blank' rel='noreferrer' className='text-gray-500 hover:text-gray-800'>
							GitHub Repository
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
