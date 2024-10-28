import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import bicepLogo from './assets/flexed-biceps-svgrepo-com.svg';
import { useState } from 'react';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLogoClick = () => {
		setIsMenuOpen(false);

		const overlay = document.querySelector('.overlay');
		const text = document.querySelector('.logoName');
		overlay.classList.add('show');

		setTimeout(() => {
			text.classList.add('text-fade');
		}, 1000);

		setTimeout(() => {
			overlay.classList.add('fadeout');
		}, 2000); // Show the text for 2 seconds

		// setTimeout(() => {
		// 	overlay.classList.add('slide-up');
		// }, 3000); // Start sliding up after 3 seconds

		setTimeout(() => {
			overlay.classList.remove('show', 'fadeout', 'slide-up');
			text.classList.remove('text-fade');
		}, 3000); // Remove the overlay after 4 seconds
	};

	return (
		<Router>
			<Navigation
				onLogoClick={handleLogoClick}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/aboutme" element={<About />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<div className="overlay">
				<div className="logoName">
					<img src={bicepLogo} alt="" width="200" height="200" />
				</div>
			</div>
		</Router>
	);
}

export default App;
