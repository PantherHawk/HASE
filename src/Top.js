import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const Top = (props) => {
  return (
    <Navbar fluid={true} className="sticky-nav" style={{color: "#4c66b2", margin: "10px 10px"}}>
      <Navbar.Header>
        <Navbar.Brand style={{color: "white"}}>
          <a className="navItem" href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem className="navItem" eventKey={1} href="#" style={{color: "white"}}>
          Link
        </NavItem>
        <NavItem className="navItem" eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" style={{color: "white"}}>
          <MenuItem className="navItem" eventKey={3.1}>Action</MenuItem>
          <MenuItem className="navItem" eventKey={3.2}>Another action</MenuItem>
          <MenuItem className="navItem" eventKey={3.3}>Something else here</MenuItem>
          <MenuItem className="navItem" divider="divider"/>
          <MenuItem className="navItem" eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
  </Navbar>
  )
}

export default Top;
