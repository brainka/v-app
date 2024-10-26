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
				{/* <img
					src="https://static.wixstatic.com/media/f6010e_ec6639c6cacf407d94a9a388870517cf~mv2.jpg/v1/fit/w_716,h_888,q_90/f6010e_ec6639c6cacf407d94a9a388870517cf~mv2.jpg"
					alt=""
				/> */}
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
