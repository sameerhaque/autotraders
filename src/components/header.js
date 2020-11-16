import PropTypes from "prop-types"
import React from "react"
import custom from "../pages/custom.module.css"

import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <div className={custom.at_navbar_top}>
      <Container>
        <Navbar></Navbar>
      </Container>
    </div>
    <div className={custom.at_navbar_bottom}>
      <Container>
        <Navbar expand="xl">
          <Navbar.Brand href="#home">AutoTraders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
