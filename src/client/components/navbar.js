import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return(
		<nav style={{ "width": "100%", "backgroundColor": 'grey' }}>
			<button><NavLink to="/">Go To Home Route</NavLink></button>
			<button><NavLink to="/test">Go To Test Route</NavLink></button>
			<span><strong>FEEL FREE TO CHANGE THIS NAVBAR WITH WATHEVER YOU LIKE FOR NAVIGATION</strong></span>
		</nav>
	)
}

export default Navbar
