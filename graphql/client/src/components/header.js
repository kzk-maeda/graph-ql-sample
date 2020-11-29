import React from 'react';
import { Navbar, NavbarBrand, NuvbarBrand } from 'reactstrap';

function Header() {
    return (
        <Navbar color="primary" dark className="mb-4">
            <NavbarBrand href="/">
                Movie list
            </NavbarBrand>
        </Navbar>
    )
}

export default Header