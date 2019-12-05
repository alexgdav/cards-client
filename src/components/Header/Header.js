import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedBrand = (
  <Fragment>
    <Navbar.Brand href='#decks'>
      <img src="https://i.imgur.com/JKshleO.png" width="45" alt="card stack logo" className="d-inline-block align-middle mr-2"/>
    DECKARD
    </Navbar.Brand>
  </Fragment>
)

const unauthenticatedBrand = (
  <Fragment>
    <Navbar.Brand href='#'>
      <img src="https://i.imgur.com/JKshleO.png" width="45" alt="card stack logo" className="d-inline-block align-middle mr-2"/>
  DECKARD
    </Navbar.Brand>
  </Fragment>
)

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#create-card">Create Card</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#decks">View All Study Subjects</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="nav" variant="dark" expand="md">
    { user ? authenticatedBrand : unauthenticatedBrand }
    { /* <Navbar.Brand href='/'>
      <img src="https://i.imgur.com/JKshleO.png" width="45" alt="card stack logo" className="d-inline-block align-middle mr-2"/>
      DECKARD
    </Navbar.Brand> */ }
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
