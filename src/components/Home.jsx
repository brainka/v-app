import './Home.css';
import { useState, useEffect } from 'react';

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
		<div className="home-container">
			<div className="img-container">
		
				<div className="home-details">
					<div className={`name-details ${visible ? 'visible' : ''}`}>
						{/* <div>Hi, I am</div> */}
						<div>
							<span>Vernon Van Schalkwyk</span>
						</div>
						<div>Personal Trainer</div>
					</div>

					<button
						className={`home contactButton ${
							buttonVisible ? 'buttonVisible' : ''
						}`}
					>
						LET'S TALK
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
