import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap"
import custom from "../pages/custom.module.css"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className={custom.hero_image}></div>

    <section className={custom.hero_cta_section}>
      <Container>
        <div className="row d-flex flex-md-row-reverse justify-content-between">
          <div className="col-xs-12 col-md-4 flex-fill">
            <div className={custom.hero_cta_bubble}>
              <Img
                fixed={data.bubble1.childImageSharp.fixed}
                alt="Bubble 1"
                className="rounded-circle img-responsive"
              />
              <Img
                fixed={data.bubble2.childImageSharp.fixed}
                alt="Bubble 2"
                className="rounded-circle img-responsive"
              />
              <Img
                fixed={data.bubble3.childImageSharp.fixed}
                alt="Bubble 3"
                className="rounded-circle img-responsive"
              />
            </div>
            <div className={custom.hero_cta_know_more}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="font-weight-bold text-right border-bottom">
                Know More
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-8 flex-fill align-self-center">
            <div className="py-4 px-4">
              <div className={custom.hero_cta_tag}>
                TOYOTA <span className="font-weight-bold">SIENNA</span>
              </div>
              <h2 className="display-4">
                Makes Us <br />
                <span className={custom.at_van_proud}>VanProud</span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className={custom.hero_card_section}>
      <Container>
        <CardDeck className="py-5 ">
          <Card border="0">
            <Img
              fluid={data.card1.childImageSharp.fluid}
              alt="card1"
              className="img-responsive"
            />
          </Card>
          <Card border="0">
            <Img
              fluid={data.card2.childImageSharp.fluid}
              alt="card2"
              className="img-responsive"
            />
          </Card>
          <Card border="0">
            <Img
              fluid={data.card3.childImageSharp.fluid}
              alt="card3"
              className="img-responsive"
            />
          </Card>
        </CardDeck>
      </Container>
    </section>

    <section className={custom.hero_features_section}>
      <Container>
        <Row>
          <Col md={8}>
            <div className={custom.features_image}>
              <Img
                fluid={data.feature_image.childImageSharp.fluid}
                alt="Feature Image"
                className="img-responsive"
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="py-5 px-4">
              <h4 className="">Features you cannot live without</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className={custom.bottom_features_section}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={custom.features_image}>
              <Img
                fluid={data.bottom.childImageSharp.fluid}
                alt="Bottom"
                className="img-responsive"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    bubble1: file(relativePath: { eq: "woman1.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    bubble2: file(relativePath: { eq: "man1.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    bubble3: file(relativePath: { eq: "child1.png" }) {
      childImageSharp {
        fixed(width: 55, height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    feature_image: file(relativePath: { eq: "sienna-side2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 976, maxHeight: 432) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    card1: file(relativePath: { eq: "CARD1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 592) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    card2: file(relativePath: { eq: "CARD2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 592) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    card3: file(relativePath: { eq: "CARD3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 592) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bottom: file(relativePath: { eq: "ad_grande.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1340, maxHeight: 601) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
