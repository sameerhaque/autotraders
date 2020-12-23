import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img from 'gatsby-image/withIEPolyfill'

import landing_cta from './css/landing_cta.module.css'

import stringMaxWord from '../../components/functions/stringMaxWord'
import Hash from '../../components/icons/hash'
import HashMd from '../../components/icons/hash-md'
import HashXl from '../../components/icons/hash-xl'
import Quote from '../../components/icons/quote'

SwiperCore.use([Pagination])
const LandingCTA = () => {
  const { slideImageMd, slideImage } = useStaticQuery(graphql`
      {
        slideImageMd: file(relativePath: { eq: "slide-4.jpg" }) {
          childImageSharp {
            fixed(width: 703, height: 385) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slideImage: file(relativePath: { eq: "slide-5.jpg" }) {
          childImageSharp {
            fixed(width: 335, height: 385) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    know_more_text =
      'Discover the reasons that make this people love their Sienna and why they are proud of owning one.'

  return (
    <section className={landing_cta.section}>
      <div className={landing_cta.wrapper}>
        <Hash className={landing_cta.hash} />
        <HashMd className={landing_cta.hash} />
        <HashXl className={landing_cta.hash} />
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
                <p>{stringMaxWord(know_more_text, 18)}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="container-xl">
          <Row>
            <Col xs={12}>
              <div className={landing_cta.all_reason}>
                <Swiper
                  className={landing_cta.slider_wrapper}
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{ clickable: false }}
                  loop={true}
                  onPaginationRender={(swiper, paginationEl) => {
                    paginationEl.classList.add(landing_cta.slider_pagination)
                  }}
                >
                  {Array.from({ length: 3 }, (_, i) => i + 1).map(val => {
                    return (
                      <SwiperSlide key={val}>
                        <div className={landing_cta.slide_holder}>
                          <Img
                            fixed={slideImageMd.childImageSharp.fixed}
                            alt="slideImageMd"
                            className={`d-none d-md-block ${landing_cta.slide_image}`}
                          />
                          <Img
                            fixed={slideImage.childImageSharp.fixed}
                            alt="slideImage"
                            className={`d-md-none ${landing_cta.slide_image}`}
                          />
                          <div className={landing_cta.slide_content}>
                            <div className={landing_cta.slide_content_inner}>
                              <Quote className={landing_cta.quote} />
                              <div className={landing_cta.slide_content_holder}>
                                <p className={landing_cta.quote_index}>
                                  Reason #1
                                </p>
                                <h4 className={landing_cta.quote_heading}>
                                  We can keep everyone warm and happy in our
                                  Sienna.
                                </h4>
                                <p className={landing_cta.location}>
                                  <strong>deborah</strong>, quebec city
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <Link
                  to="/20-reasons-to-believe/"
                  className={`btn btn-primary ${landing_cta.reasons_button}`}
                >
                  SEE ALL REASONS
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default LandingCTA
