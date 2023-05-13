import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
// import Contact from './components/Contact/Contact';
// import Resume from './components/Resume/Resume';
import './output.css';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* <Route path='/' element={<About />} /> */}
				<Route path='/portfolio' element={<Portfolio />} />
				{/* <Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
