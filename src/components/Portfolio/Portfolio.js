import React from 'react';

const projects = [
	{
		name: 'Project 1',
		image: '/path/to/image1.jpg',
		deployedUrl: 'https://example.com/project1',
		repoUrl: 'https://github.com/username/project1',
	},
	{
		name: 'Project 2',
		image: '/path/to/image2.jpg',
		deployedUrl: 'https://example.com/project2',
		repoUrl: 'https://github.com/username/project2',
	},
	// add more projects here
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
						<a href={project.deployedUrl} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-800'>
							Deployed Application
						</a>
						<br />
						<a href={project.repoUrl} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-800'>
							GitHub Repository
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
