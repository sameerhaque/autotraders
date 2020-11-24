import PropTypes from "prop-types"
import React from "react"
import custom from "../pages/custom.module.css"

import { Container, Navbar } from "react-bootstrap"

const Header = () => (
  <header>
    <div className={custom.at_navbar_bottom}>
      <Container>
        <Navbar expand="xl">
          <Navbar.Brand href="#home" style={{ color: `white` }}>
            AutoTraders
          </Navbar.Brand>
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
