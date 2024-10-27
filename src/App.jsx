import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home';
import About from './components/About';
import bicepLogo from './assets/flexed-biceps-svgrepo-com.svg';

function App() {
	const handleLogoClick = () => {
		const overlay = document.querySelector('.overlay');
		const text = document.querySelector('.logoName');
		overlay.classList.add('show');

		setTimeout(() => {
			text.classList.add('text-fade');
		}, 2000);

		setTimeout(() => {
			overlay.classList.add('fadeout');
		}, 3000); // Show the text for 2 seconds

		// setTimeout(() => {
		// 	overlay.classList.add('slide-up');
		// }, 3000); // Start sliding up after 3 seconds

		setTimeout(() => {
			overlay.classList.remove('show', 'fadeout', 'slide-up');
			text.classList.remove('text-fade');
		}, 5000); // Remove the overlay after 4 seconds
	};

	return (
		<Router>
			<Navigation onLogoClick={handleLogoClick} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/aboutme" element={<About />} />
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
