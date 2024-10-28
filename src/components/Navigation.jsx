import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import bicepLogo from '../assets/flexed-biceps-svgrepo-com.svg';

const Navigation = ({ onLogoClick, isMenuOpen, setIsMenuOpen }) => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	// console.log(handleCloseMenu);

	function toggleMenu() {
		// handleCloseMenu && setIsMenuOpen(false);

		setIsMenuOpen(!isMenuOpen);
	}

	function handleMenuSelection(e) {
		const pageSelection = e.currentTarget.innerText;

		navigate(pageSelection.replace(' ', '').toLowerCase());
		setIsMenuOpen(false);
	}

	return (
		<div className="nav-container">
			<div className="nav-menu-mobile">
				<Link to="/" id="logo" onClick={onLogoClick}>
					<img src={bicepLogo} alt="" />
				</Link>
				<div className="nav-menu">
					<button
						onClick={toggleMenu}
						id="menu-button"
						aria-haspopup="true"
						aria-controls="menu"
						aria-expanded={isMenuOpen ? 'true' : 'false'}
					>
						{!isMenuOpen ? (
							<RxHamburgerMenu size={32} />
						) : (
							<IoCloseOutline size={32} />
						)}
					</button>

					<ul
						id="menu"
						role="menu"
						aria-labelledby="menubutton"
						className={`${isMenuOpen ? 'active' : ''}`}
					>
						<li
							role="presentation"
							tabIndex={0}
							aria-label="about me"
							onClick={handleMenuSelection}
						>
							<a role="menuitem">About Me</a>
						</li>
						<li role="presentation" tabIndex={0} onClick={handleMenuSelection}>
							<a role="menuitem">Services</a>
						</li>
						<li role="presentation" tabIndex={0} onClick={handleMenuSelection}>
							<a role="menuitem">Pricing</a>
						</li>
						<li role="presentation" tabIndex={0} onClick={handleMenuSelection}>
							<a role="menuitem">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
