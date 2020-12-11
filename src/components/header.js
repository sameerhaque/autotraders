import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"
import $ from "jquery"

import header from "../css/header.module.css"
import Logo from "../images/logo.png"
import logoMobile from "../images/logo-m.png"
import toyotaLogo from "../images/toyota-logo.png"

const Header = () => {
  const {
      at_header,
      at_navbar_top,
      at_navbar_brand,
      at_navbar_brand_right,
      at_navbar_bottom,
      at_navbar,
      at_navbar_toggle,
      at_navbar_toggle_stripes,
      at_navbar_collapse,
      at_navbar_nav,
      at_nav_container,
      at_nav_item,
      at_nav_item_link,
      at_nav_item_link_desc,
    } = header,
    openNavigation = () => {
      $(`body`).toggleClass("overflow-hidden")
    }
  useEffect(() => {
    $(`.${at_nav_item_link}`).click(function () {
      $(`body`).removeClass("overflow-hidden")
    })
  }, [at_nav_item_link])
  return (
    <header className={at_header}>
      <div className={at_navbar_top}>
        <a className={at_navbar_brand} href="//autotrader.ca">
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
        </a>
        <a href="//toyota.ca" className={at_navbar_brand_right}>
          <img className="" src={toyotaLogo} alt="Toyota" />
        </a>
      </div>
      <div className={at_navbar_bottom}>
        <Container fluid>
          <Row noGutters={true} className="justify-content-center">
            <Col lg={10} md={9} className="position-initial">
              <Navbar
                variant="dark"
                expand={false}
                collapseOnSelect
                onToggle={openNavigation}
                className={at_navbar}
              >
                <Navbar.Toggle
                  className={at_navbar_toggle}
                  aria-controls="responsive-navbar-nav"
                >
                  <span className={at_navbar_toggle_stripes} />
                  <span className={at_navbar_toggle_stripes} />
                  <span className={at_navbar_toggle_stripes} />
                </Navbar.Toggle>
                <Navbar.Collapse className={at_navbar_collapse}>
                  <Nav className={at_navbar_nav}>
                    <div className={at_nav_container}>
                      <div className={at_nav_item}>
                        <Link to="/" className={at_nav_item_link}>
                          HOME
                        </Link>
                        <div className={at_nav_item_link_desc}>
                          Sienna #VanProud
                        </div>
                      </div>
                      <div className={at_nav_item}>
                        <Link to="#link" className={at_nav_item_link}>
                          INTERACTIVE CONTENT
                        </Link>
                        <div className={at_nav_item_link_desc}>
                          20 Reasons to Believe
                        </div>
                      </div>
                      <div className={at_nav_item}>
                        <Link
                          to="/the-hardest-working-family-member/"
                          className={at_nav_item_link}
                        >
                          ARTICLE
                        </Link>
                        <div className={at_nav_item_link_desc}>
                          The hardest working family member
                        </div>
                      </div>
                      <div className={at_nav_item}>
                        <Link
                          to="/the-sienna-described-from-every-seat/"
                          className={at_nav_item_link}
                        >
                          ARTICLE
                        </Link>
                        <div className={at_nav_item_link_desc}>
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
