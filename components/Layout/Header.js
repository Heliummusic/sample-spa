import React, { useState } from 'react';
import { Button } from 'reactstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Link from "next/link";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">

                <Link href="/">
                    <NavbarBrand style={{cursor: 'pointer'}}>MyApp</NavbarBrand>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <Link href="/" passHref>
                                <NavLink>
                                    <a>Home</a>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/post" passHref>
                                <NavLink>
                                    <a>Posts</a>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/tasks" passHref>
                                <NavLink>
                                    <a>Tasks</a>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/about" passHref>
                                <NavLink>
                                    <a>About</a>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/graphics" passHref>
                                <NavLink>
                                    <a>Graphics</a>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/contact" passHref>
                                <NavLink>
                                    <a>Contact</a>
                                </NavLink>
                            </Link>
                        </NavItem>


                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Account
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link href="/profile" passHref>
                                        Profile
                                    </Link>
                                </DropdownItem>

                                <DropdownItem>
                                     settings
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    Logout
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
