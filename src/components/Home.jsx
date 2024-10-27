import './Home.css';
import { useState, useEffect } from 'react';
import vernon from '../assets/homePageVideo.mp4';

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
				<div className="buttonContainer">
					<button className="contactButton homeButton">
						LEARN MORE | GET STARTED
					</button>
				</div>
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
