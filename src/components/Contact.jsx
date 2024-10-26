import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
	return (
		<form>
			{/* <h2>Reach Out</h2> */}
			<div>
				<label htmlFor="name">NAME</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Enter your name"
				/>
			</div>
			<div>
				<label htmlFor="email">EMAIL</label>
				<input
					type="text"
					id="email"
					name="email"
					required
					placeholder="Enter your email"
				/>
			</div>
			<div>
				<label htmlFor="phone">PHONE</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					required
					placeholder="Enter your phone number"
				/>
			</div>
			<div>
				<label htmlFor="preferredTime">PREFERRED TIME</label>
				<input
					type="text"
					id="preferredTime"
					name="preferredTime"
					placeholder="Enter your preferred training times"
				/>
			</div>
			<div>
				<label htmlFor="goals">GOALS</label>
				<textarea
					id="goals"
					name="goals"
					rows={4}
					cols="25"
					placeholder="Enter your training goals"
				></textarea>
			</div>
			<Link to="/contact" element={<Contact />}></Link>
			<button type="submit" className="contactButton">
				Let's Talk
			</button>
		</form>
	);
};

export default Contact;

