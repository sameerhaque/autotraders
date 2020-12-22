import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import landing_cta from "./css/landing_cta.module.css"

import Hash from "../../components/icons/hash"
import Quote from "../../components/icons/quote"

const LandingCTA = () => {
  const { slideImage } = useStaticQuery(graphql`
    {
      slideImage: file(relativePath: { eq: "slide-4.jpg" }) {
        childImageSharp {
          fixed(width: 703, height: 385) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(slideImage)
  return (
    <section className={landing_cta.section}>
      <div className={landing_cta.wrapper}>
        <Hash className={landing_cta.hash} />
        <Container>
          <Row className="justify-content-between align-items-end">
            <Col md={6}>
              <div className={landing_cta.tag}>
                <p>
                  TOYOTA <strong>SIENNA</strong>
                </p>
                <h2 className={landing_cta.heading_light}>Makes Us</h2>
                <h2 className={landing_cta.heading_bold}>VanProud</h2>
              </div>
            </Col>
            <Col md={6}>
              <div className={landing_cta.know_more}>
                <p>
                  Discover the reasons that make this people love their Sienna
                  and why they are proud of owning one.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={landing_cta.slider_wrapper}>
                <div className={landing_cta.slide_holder}>
                  <Img
                    fixed={slideImage.childImageSharp.fixed}
                    alt="slideImage"
                    className={landing_cta.slide_image}
                  />
                  <div className={landing_cta.slide_content}>
                    <div className={landing_cta.slide_content_inner}>
                      <Quote className={landing_cta.quote} />
                      <div className={landing_cta.slide_content_holder}>
                        <p className={landing_cta.quote_index}>Reason #1</p>
                        <h4 className={landing_cta.quote_heading}>
                          We can keep everyone warm and happy in our Sienna.
                        </h4>
                        <p className={landing_cta.location}>
                          <strong>deborah</strong>, quebec city
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default LandingCTA
