import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';

const NavTest = () => {

return (
<>
    <Nav tabs>
        <NavItem>
            <NavLink to="/.components/employee">Employee Dashboard</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/.components/Student">Student</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/.components/Parents">Parents</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/.components/Test">Test</NavLink>
        </NavItem>
    </Nav>
</>
)
}
export default NavTest;