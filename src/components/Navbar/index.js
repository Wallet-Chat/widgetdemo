import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/widget" activeStyle>
			Widget
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

