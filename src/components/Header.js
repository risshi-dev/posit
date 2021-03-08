
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import '../css/header.css'
import img from '../icon-192.png'
function Header() {

    return (
					<div>
						<header>
							<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
								<Navbar.Brand>
									<img src={img} alt='unsplash' style={{width:'50px'}} />
								</Navbar.Brand>
								<Navbar.Brand>Unsplash</Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto">
										
											<input className='searchBar' placeholder='Search free High Res Photos' type="text" />
										
									</Nav>
									<Nav>
										<Nav.Link>Home</Nav.Link>
										<Nav.Link>Brands</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</header>
					</div>
				);
}

export default Header
