import React from "react"
import { Link } from "gatsby"
import {Container, Row, Col, CardDeck, Card, Button} from "react-bootstrap"
import custom from "../pages/custom.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={custom.hero_image}>
    </div>

    <section className={custom.hero_cta_section}>
        <Container>
          <Row>
            <Col sm={8}>
              <div className="col-xs-12 col-md-8 flex-fill align-self-center">
                <div className="py-4 px-4">
                  <div className={custom.hero_cta_tag}>TOYOTA <span class="font-weight-bold">SIENNA</span></div>
                  <h2 className="display-4">Makes Us <span className={custom.at_text_secondary} >VanProud</span></h2>
                </div>
              </div>

            </Col>
            <Col sm={4}>
              <div className="py-4 px-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="font-weight-bold text-right border-bottom">Know More</div>
              </div>
            </Col>
          </Row>
        </Container>
    </section>

    <section className={custom.hero_card_section}>
        <Container>
            <CardDeck className="py-5 ">
              <Card>
                <Card.Img src="holder.js/100px160" />
                <Card.Body>
                  <Card.Text>
                    INTERACTIVE CONTENT
                  </Card.Text>
                  <Card.Title>20 Reasons To Believe
</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img src="holder.js/100px160" />
                <Card.Body>
                  <Card.Text>
                    ARTICLE
                  </Card.Text>
                  <Card.Title>The hardest working family member</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img src="holder.js/100px160" />
                <Card.Body>
                  <Card.Text>
                    ARTICLE
                  </Card.Text>
                  <Card.Title>The Sienna, described from every screen
</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
        </Container>
    </section>

    <section className={custom.hero_features_section}>
        <Container>
          <Row>
            <Col md={8}>
              <div className={custom.features_image}>Features Image </div>
            </Col>
            <Col md={4}>
              <div className="py-5 px-4">
                <h4 className="">Features you cannot live without</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </Col>
          </Row>
        </Container>
    </section>


  </Layout>
)

export default IndexPage
