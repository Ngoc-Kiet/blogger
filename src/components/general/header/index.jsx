import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
    const location = useLocation();
    const [pathname, setPathname] = useState()

    useEffect(() => {
        setPathname(location.pathname)
    }, [location.pathname])

    return (
        <header className="my-0">
            <Navbar collapseOnSelect expand="md" bg="light" className="">
                <Navbar.Brand href="#/">
                    <b>NORDIC ROSE</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className = "mr-4">
                    <Nav className="ml-auto" activeKey={ pathname }>
                        <Nav.Link eventKey={'/'} as={Link} to="/">
                            BLOG
                        </Nav.Link>
                        <Nav.Link eventKey={'/about'} as={Link} to="/about">
                            ABOUT
                        </Nav.Link>
                        <Nav.Link eventKey={'/link'} as={Link} to="/link">
                            LINKS
                        </Nav.Link>
                        <Nav.Link eventKey={'/project'} as={Link} to="/project">
                            PROJECTS
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header