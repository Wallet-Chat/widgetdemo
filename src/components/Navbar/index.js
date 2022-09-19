import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3047" activeStyle>
			BoredApeYC
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

