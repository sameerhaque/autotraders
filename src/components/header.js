import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"
import $ from "jquery"

import header from "../css/header.module.css"
import Logo from "../images/logo.png"
import logoMobile from "../images/logo-m.png"
import toyotaLogo from "../images/toyota-logo.png"

const Header = () => {
  const openNavigation = () => {
    $(`body`).toggleClass("overflow-hidden")
  }
  return (
    <header className={header.at_header}>
      <div className={header.at_navbar_top}>
        <Link className={header.at_navbar_brand} to="/">
          <img
            className="d-none d-sm-block"
            src={Logo}
            alt="logo"
            height={59}
            width={96}
          />
          <img
            className="d-sm-none"
            src={logoMobile}
            alt="logo"
            height={50}
            width={80}
          />
        </Link>
        <div className={header.at_navbar_brand_right}>
          <img className="" src={toyotaLogo} alt="Toyota" />
        </div>
      </div>
      <div className={header.at_navbar_bottom}>
        <Container fluid>
          <Row noGutters={true} className="justify-content-center">
            <Col lg={10} md={9} className="position-initial">
              <Navbar
                variant="dark"
                expand={false}
                collapseOnSelect
                onToggle={openNavigation}
                className={header.at_navbar}
              >
                <Navbar.Toggle
                  className={header.at_navbar_toggle}
                  aria-controls="responsive-navbar-nav"
                >
                  <span className={header.at_navbar_toggle_stripes} />
                  <span className={header.at_navbar_toggle_stripes} />
                  <span className={header.at_navbar_toggle_stripes} />
                </Navbar.Toggle>
                <Navbar.Collapse className={header.at_navbar_collapse}>
                  <Nav className={header.at_navbar_nav}>
                    <div className={header.at_nav_container}>
                      <div className={header.at_nav_item}>
                        <Link to="/" className={header.at_nav_item_link}>
                          HOME
                        </Link>
                        <div className={header.at_nav_item_link_desc}>
                          Sienna #VanProud
                        </div>
                      </div>
                      <div className={header.at_nav_item}>
                        <Link to="#link" className={header.at_nav_item_link}>
                          INTERACTIVE CONTENT
                        </Link>
                        <div className={header.at_nav_item_link_desc}>
                          20 Reasons to Believe
                        </div>
                      </div>
                      <div className={header.at_nav_item}>
                        <Link to="#link" className={header.at_nav_item_link}>
                          ARTICLE
                        </Link>
                        <div className={header.at_nav_item_link_desc}>
                          The hardest working family member
                        </div>
                      </div>
                      <div className={header.at_nav_item}>
                        <Link to="#link" className={header.at_nav_item_link}>
                          ARTICLE
                        </Link>
                        <div className={header.at_nav_item_link_desc}>
                          The Sienna, described from every seat
                        </div>
                      </div>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
