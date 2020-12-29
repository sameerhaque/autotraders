import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from '../components/layout'
import SEO from '../components/seo'

import InterActive from '../css/newinteractive.module.css'

export default () => {
  const {
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
      view_all_reasons,
      reason_section_title,
      bold_title,
      reason_card1,
      card_layer1,
      reason_card2,
      card_layer2,
      reason_card3,
      card_layer3,
      reason_card4,
      card_layer4,
      reason_card_content,
      reason_card_label_index,
      reason_card_title,
      reason_card_title_width,
      reason_card_city,
      reason_card_city2,
    } = InterActive,
    {
      prevImage,
      nextImage,
      reasonCar1,
      reasonCar2,
      reasonCar3,
      reasonCar4,
    } = useStaticQuery(graphql`
      {
        prevImage: file(relativePath: { eq: "captura-de-pantalla-4.jpg" }) {
          childImageSharp {
            fixed(width: 335, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nextImage: file(relativePath: { eq: "captura-de-pantalla-5.jpg" }) {
          childImageSharp {
            fixed(width: 335, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonCar1: file(relativePath: { eq: "car-backside.jpg" }) {
          childImageSharp {
            fixed(width: 306, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonCar2: file(relativePath: { eq: "car-inside-river.jpg" }) {
          childImageSharp {
            fixed(width: 490, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonCar3: file(relativePath: { eq: "car-inner-part.jpg" }) {
          childImageSharp {
            fixed(width: 540, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonCar4: file(relativePath: { eq: "cartoon-car.jpg" }) {
          childImageSharp {
            fixed(width: 306, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
  console.log(InterActive)
  return (
    <Layout>
      <SEO title="20 Reasons to Believe" />
      <section className={view_all_reasons}>
        <Container>
          <Row className="mb-3">
            <Col className="col-12">
              <p className={reason_section_title}>
                <strong className={bold_title}>View</strong>
                <br /> all reasons
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <div className={reason_card1}>
                <div className={card_layer1}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="mb-3">
              <div className={reason_card2}>
                <div className={card_layer2}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <div className={reason_card3}>
                <div className={card_layer3}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className={reason_card4}>
                <div className={card_layer4}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <div className={reason_card1}>
                <div className={card_layer1}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="mb-3">
              <div className={reason_card2}>
                <div className={card_layer2}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <div className={reason_card3}>
                <div className={card_layer3}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className={reason_card4}>
                <div className={card_layer4}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <div className={reason_card1}>
                <div className={card_layer1}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="mb-3">
              <div className={reason_card2}>
                <div className={card_layer2}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <div className={reason_card3}>
                <div className={card_layer3}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className={reason_card4}>
                <div className={card_layer4}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <div className={reason_card1}>
                <div className={card_layer1}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="mb-3">
              <div className={reason_card2}>
                <div className={card_layer2}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <div className={reason_card3}>
                <div className={card_layer3}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className={reason_card4}>
                <div className={card_layer4}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <div className={reason_card1}>
                <div className={card_layer1}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="mb-3">
              <div className={reason_card2}>
                <div className={card_layer2}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <div className={reason_card3}>
                <div className={card_layer3}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title_width}>
                      We can keep everyone warm and happy in our Sienna.
                    </h4>
                    <span className={reason_card_city2}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className={reason_card4}>
                <div className={card_layer4}></div>
                <div className="position-relative text-right">
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                  />
                  <div className={reason_card_content}>
                    <p className={reason_card_label_index}>01</p>
                    <h4 className={reason_card_title}>
                      I can do so many things
                    </h4>
                    <span className={reason_card_city}>
                      deborah, quebec city
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={navigation_section}>
        <Container>
          <Row className="justify-content-between">
            <Col lg={3} md={5} className="text-center text-md-left">
              <div className={nav_wrapper}>
                <div className={nav_holder}>
                  <Img
                    className="d-md-none"
                    fixed={prevImage.childImageSharp.fixed}
                  />
                  <div className={nav_area}>
                    <p>Previous</p>
                    <Link
                      to="/the-hardest-working-family-member/"
                      className={navigate_previous}
                    >
                      <h4>The hardest working family member</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={5} className="text-center text-md-right">
              <div className={nav_wrapper}>
                <div className={nav_holder}>
                  <Img
                    className="d-md-none"
                    fixed={nextImage.childImageSharp.fixed}
                  />
                  <div className={nav_area}>
                    <p>Next</p>
                    <Link
                      to="/the-sienna-described-from-every-seat/"
                      className={navigate_next}
                    >
                      <h4>
                        <span className="d-block">The Sienna, described</span>{' '}
                        from every seat
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
