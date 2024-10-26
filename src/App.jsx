import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
			</Routes>
		</Router>
	);
}

export default App;
