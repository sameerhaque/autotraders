import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap"
import { DefaultPlayer as Video } from "react-html5video"
import Img from "gatsby-image"
import $ from "jquery"

import landing from "../css/landing.module.css"
import videoSrc from "../videos/video.mp4"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const fullScreenToggle = () => {
      $(`.${landing.hero_video}`).toggleClass("fullscreen")
    },
    isBrowser = typeof window !== "undefined"
  useEffect(() => {
    $(".rh5v-Fullscreen_button").click(fullScreenToggle)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className={landing.hero_image}>
        <div className={landing.features_image}>
          {isBrowser && (
            <Video
              className={landing.hero_video}
              poster={data.hero.childImageSharp.fluid.src}
              width="1440"
              height="579"
              preload="metadata"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={["Fullscreen"]}
            >
              <source src={videoSrc} type="video/mp4" />
            </Video>
          )}
        </div>
      </div>
      <section className={landing.hero_cta_section}>
        <Container>
          <Row>
            <Col
              sm={12}
              className="text-center text-md-right position-relative"
            >
              <Img
                fixed={data.families.childImageSharp.fixed}
                alt="families"
                className={`img-fluid d-none d-sm-inline-block ${landing.families_image}`}
              />
              <Img
                fixed={data.familiesM.childImageSharp.fixed}
                alt="families-m"
                className={`img-fluid d-inline-block d-sm-none ${landing.families_image}`}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <div className={landing.hero_cta_tag}>
                TOYOTA <span className="font-weight-bold">SIENNA</span>
              </div>
              <h2 className="display-4">
                Makes Us <br />
                <span className={landing.at_van_proud}>VanProud</span>
              </h2>
            </Col>
            <Col md={6}>
              <div className={landing.hero_cta_know_more}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="font-weight-bold text-right border-bottom">
                  Know More
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={landing.hero_card_section}>
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
      <section className={landing.hero_features_section}>
        <Container>
          <Row>
            <Col md={8}>
              <div className={landing.features_image}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={landing.bottom_features_section}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={landing.features_image}>
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
}

export default IndexPage

export const query = graphql`
  {
    families: file(relativePath: { eq: "families.png" }) {
      childImageSharp {
        fixed(width: 433, height: 207) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    familiesM: file(relativePath: { eq: "families-m.png" }) {
      childImageSharp {
        fixed(width: 335, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

    hero: file(relativePath: { eq: "captura-de-pantalla.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 575) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
