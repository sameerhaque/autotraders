import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"
import footer from "../css/footer.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    {
      footerImgMd: file(relativePath: { eq: "ad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1340, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgSm: file(relativePath: { eq: "ad-fab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 670, maxHeight: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgXs: file(relativePath: { eq: "ad-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 335, maxHeight: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toyotaLogo: file(relativePath: { eq: "toyota-logo-footer.png" }) {
        childImageSharp {
          fixed(width: 75, height: 62) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className={footer.at_footer}>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className={footer.wrapper}>
              <Img
                fluid={data.footerImgMd.childImageSharp.fluid}
                alt="footerImgMd"
                className="d-none d-md-block"
              />
              <Img
                fluid={data.footerImgSm.childImageSharp.fluid}
                alt="footerImgSm"
                className="d-none d-sm-block d-md-none"
              />
              <Img
                fluid={data.footerImgXs.childImageSharp.fluid}
                alt="footerImgXs"
                className="d-sm-none"
              />
              <div className={footer.ad_box}>
                <Img
                  fixed={data.toyotaLogo.childImageSharp.fixed}
                  alt="toyota-logo"
                />
                <h5 className={footer.ad_heading_I}>Get to know the new</h5>
                <h5 className={footer.ad_heading_II}>
                  <strong>Toyota Sienna</strong> and feel
                  <strong>#vanproud</strong>
                </h5>
                <button
                  type="button"
                  className={`btn btn-primary ${footer.ad_button}`}
                >
                  GET YOURS TODAY
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
