import './About.css';
import vernon from '../assets/vernon.jpg';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="aboutme-container">
			<img className="aboutme-image" src={vernon} alt="" />
			<div className="aboutme">
				<h2>About Me</h2>
				<ul>
					<li> Bachelor of Exercise & Sport Science</li>
					<li>Strongman competitor background</li>
					<li>Personalized, strength-focused training</li>
				</ul>
				{/* <Link to="/contact" href="#contact" className="">
					Let’s Start
				</Link> */}
			</div>
		</div>
	);
};

export default About;
