import './Home.css';
import { useState, useEffect } from 'react';
import vernon from '../assets/homePageVideo.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
	const [visible, setVisible] = useState(false);
	const [buttonVisible, setButtonVisible] = useState(false);

	useEffect(() => {
		const headingTimer = setTimeout(() => {
			setVisible(true);
		}, 500);

		const buttonTimer = setTimeout(() => {
			setButtonVisible(true);
		}, 500);

		return () => {
			clearTimeout(headingTimer);
			clearTimeout(buttonTimer);
		};
	}, []);

	return (
		<div className="home-container mt-64">
			<div className="home-wrapper">
				<h1>FOR THOSE COMMITTED TO SERIOUS TRAINING</h1>
				{/* <div className="buttonContainer">
					<button className="contactButton homeButton">GET STARTED</button>
				</div> */}
				<Link to="/contact" className="buttonGetStarted">
					<svg
						className="buttonArrow"
						width="64px"
						height="64px"
						viewBox="-6.48 -6.48 36.96 36.96"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{' '}
							<path
								d="M4 12H20M20 12L14 6M20 12L14 18"
								stroke="#ffffff"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>{' '}
						</g>
					</svg>

					<div>GET STARTED</div>
				</Link>
				<p>
					I work with individuals at every level who are committed to building
					strength, improving movement, and enhancing fitness—whether through
					strength and conditioning or focused strongman training. Let’s
					maximize your training together with my in-person and online coaching
					options.
				</p>
				<video src={vernon} autoPlay loop playsInline muted></video>
			</div>
			{/* <div className=""> */}
			{/* <div className="img-container"> */}
			{/* <div className="home-details"> */}
			{/* <div className={`name-details ${visible ? 'visible' : ''}`}> */}
			{/* <div>Hi, I am</div> */}
			{/* <div>
								<span>Vernon Van Schalkwyk</span>
							</div> */}
			{/* <div>Personal Trainer</div> */}
			{/* </div> */}
			{/* <button
							className={`home contactButton ${
								buttonVisible ? 'buttonVisible' : ''
							}`}
						>
							LEARN MORE | GET STARTED
						</button> */}
			{/* </div> */}
			{/* </div> */}
			{/* </div> */}
		</div>
	);
};

export default Home;
