import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import custom from "../css/custom.module.css"
import Logo from "../images/logo.png"
import toyotaLogo from "../images/toyota-logo.png"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <header className={custom.at_header}>
      <div className={custom.at_navbar_top}>
        <Link className={custom.at_navbar_brand} to="/">
          <img src={Logo} alt="logo" height={59} width={96} />
        </Link>
        <div className={custom.at_navbar_brand_right}>
          <img className="" src={toyotaLogo} alt="Toyota" />
        </div>
      </div>
      <div className={custom.at_navbar_bottom}>
        <Container fluid>
          <Row noGutters={true} className="justify-content-center">
            <Col lg={10} md={9} className="position-initial">
              <Navbar
                variant="dark"
                expand={false}
                className={custom.at_navbar}
              >
                <Navbar.Toggle
                  className={custom.at_navbar_toggle}
                  aria-controls="responsive-navbar-nav"
                >
                  <span className={custom.at_navbar_toggle_stripes} />
                  <span className={custom.at_navbar_toggle_stripes} />
                  <span className={custom.at_navbar_toggle_stripes} />
                </Navbar.Toggle>
                <Navbar.Collapse className={custom.at_navbar_collapse}>
                  <Nav className={custom.at_navbar_nav}>
                    <div className={custom.at_nav_container}>
                      <div className={custom.at_nav_item}>
                        <Link to="/" className={custom.at_nav_item_link}>
                          HOME
                        </Link>
                        <div className={custom.at_nav_item_link_desc}>
                          Sienna #VanProud
                        </div>
                      </div>
                      <div className={custom.at_nav_item}>
                        <Link to="#link" className={custom.at_nav_item_link}>
                          INTERACTIVE CONTENT
                        </Link>
                        <div className={custom.at_nav_item_link_desc}>
                          20 Reasons to Believe
                        </div>
                      </div>
                      <div className={custom.at_nav_item}>
                        <Link to="#link" className={custom.at_nav_item_link}>
                          ARTICLE
                        </Link>
                        <div className={custom.at_nav_item_link_desc}>
                          The hardest working family member
                        </div>
                      </div>
                      <div className={custom.at_nav_item}>
                        <Link to="#link" className={custom.at_nav_item_link}>
                          ARTICLE
                        </Link>
                        <div className={custom.at_nav_item_link_desc}>
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
