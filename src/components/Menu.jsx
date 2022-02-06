import React from 'react';
import '../styles/Menu.scss';
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<Link to="/signup">Sign up</Link>
				</li>
				<li>
					<Link to="/login">Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
