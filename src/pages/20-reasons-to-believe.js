import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import SwiperCore, { EffectFlip, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image/withIEPolyfill"
import $ from "jquery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Left from "../components/icons/left"
import Right from "../components/icons/right"
import Flip from "../components/icons/flip"

import "swiper/swiper.scss"
import "swiper/components/effect-flip/effect-flip.scss"
import InterActive from "../css/interactive.module.css"

SwiperCore.use([EffectFlip, Pagination])
export default () => {
  const {
      interactive_section_I,
      main_heading,
      reason_box,
      reason_box_avatar_wrapper,
      box_avatar_image,
      reason_navigators,
      reason_roundButton,
      reason_box_content_wrapper,
      reason_box_content_area_outer,
      reason_box_content_area,
      reason_box_small_heading,
      reason_box_big_heading,
      box_action_button,
      reason_slide_holder,
      reason_slide_review,
      reason_review_header,
      reason_review_avatar,
      reason_review_avatar_image,
      reason_review_title,
      reason_review_body,
      reason_review_image,
      reason_review_content,
      button_dark,
      tablet_flip_button,
      flip_button,
      flip_label,
      interactive_section_II,
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
    } = InterActive,
    {
      userAvatar,
      reasonImage,
      reasonFeatImage,
      userImage,
      prevImage,
      nextImage,
    } = useStaticQuery(graphql`
      {
        userAvatar: file(relativePath: { eq: "user-avatar.png" }) {
          childImageSharp {
            fixed(width: 190, height: 190) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonImage: file(relativePath: { eq: "captura-de-pantalla-6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 434, maxHeight: 598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonFeatImage: file(relativePath: { eq: "reason_feature.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 434, maxHeight: 188) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        userImage: file(relativePath: { eq: "neilx70.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
      }
    `),
    isBrowser = typeof window !== "undefined",
    [isMobile, setMobile] = useState(false),
    [slider, setSlider] = useState(null)
  useEffect(() => {
    if (isBrowser) {
      setMobile($(window).outerWidth() <= 768 ? true : false)
      $(window).resize(() => {
        setMobile($(window).outerWidth() <= 768 ? true : false)
        $(`.${reason_slide_holder}`)
          .removeAttr("style")
          .height($(`.${reason_slide_holder}.master`).height())
      })
      $(`.${reason_slide_holder}`).height(
        $(`.${reason_slide_holder}.master`).height()
      )
    }
  }, [isBrowser, reason_slide_holder])
  console.log(isMobile)
  return (
    <Layout>
      <SEO title="20 Reasons to Believe" />
      <section className={interactive_section_I}>
        <Container fluid>
          <Row>
            <Col xl={7} className="d-xl-none">
              <h1 className={main_heading}>
                <strong>20 Reasons</strong> to believe
              </h1>
            </Col>
            <Col xl={7} md={6}>
              <h1 className={`d-none d-xl-block ${main_heading}`}>
                <strong>20 Reasons</strong> to believe
              </h1>
              <div className={reason_box}>
                <div className={reason_box_avatar_wrapper}>
                  <div className="d-xl-none">
                    <button className={`${reason_roundButton} mr-2`}>
                      <Left />
                    </button>
                  </div>
                  <Img
                    fixed={userAvatar.childImageSharp.fixed}
                    className={box_avatar_image}
                  />
                  <div className={reason_navigators}>
                    <button
                      className={`${reason_roundButton} d-none d-xl-inline-block mr-2`}
                    >
                      <Left />
                    </button>
                    <button className={`${reason_roundButton} ml-2`}>
                      <Right />
                    </button>
                  </div>
                </div>
                <div className={reason_box_content_wrapper}>
                  <div className={reason_box_content_area_outer}>
                    <div
                      reason-id={("0" + 2).slice(-2)}
                      className={reason_box_content_area}
                    >
                      <h6 className={reason_box_small_heading}>
                        <strong>REASON 02</strong> BY MIKE &amp; LISA MCCLAIR
                      </h6>
                      <h3 className={reason_box_big_heading}>
                        We can do so many different things now
                      </h3>
                      <p>
                        Discover what it is that makes this people love their
                        Sienna and why they are proud of owning one. Lorem ipsum
                        dolor sit amet nostrud. Sed ut perspiciatis unde omnis
                        iste natus error sit voluptatem accusantium doloremque
                        sintom laudantium, totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi volupta.
                      </p>
                    </div>
                  </div>
                  <button type="button" className={box_action_button}>
                    BUILD &amp; PRICE
                  </button>
                </div>
              </div>
            </Col>
            <Col xl={5} md={6}>
              <Row className="align-items-center">
                <Col xl={{ span: 9, offset: 1 }}>
                  <div className="position-relative">
                    <Swiper
                      slidesPerView={1}
                      centeredSlides={true}
                      effect="flip"
                      updateOnWindowResize={true}
                      pagination={{ clickable: false }}
                      loop={true}
                      simulateTouch={false}
                      allowTouchMove={false}
                      onSwiper={swiper => setSlider(swiper)}
                    >
                      <SwiperSlide>
                        <div className={`${reason_slide_holder} master`}>
                          <Img
                            fluid={reasonImage.childImageSharp.fluid}
                            alt="slide-1"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={reason_slide_holder}>
                          <div className={reason_slide_review}>
                            <div className={reason_review_header}>
                              <div className={reason_review_avatar}>
                                <Img
                                  fixed={userImage.childImageSharp.fixed}
                                  alt="slide-1"
                                  className={reason_review_avatar_image}
                                />
                              </div>
                              <div className={reason_review_title}>
                                <h3>The Sienna is so versatile!</h3>
                                <p>
                                  reviewed BY <strong>NEIL VORANO</strong>
                                </p>
                              </div>
                            </div>
                            <div className={reason_review_body}>
                              <div className={reason_review_image}>
                                <Img
                                  fluid={reasonFeatImage.childImageSharp.fluid}
                                  alt="slide-1"
                                />
                              </div>
                              <div className={reason_review_content}>
                                <p>
                                  Discover what it is that makes this people
                                  love their Sienna and why they are proud of
                                  owning one. Lorem ipsum dolor sit amet
                                  nostrud. Sed perspiciatis unde omnis iste
                                  natus error situm Sienna ipsum dolor sit amet
                                  nostrud.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div
                      onClick={e =>
                        e.currentTarget.classList.toggle(button_dark)
                      }
                      onKeyPress={e =>
                        e.currentTarget.classList.toggle(button_dark)
                      }
                      className={tablet_flip_button}
                      role="button"
                      tabIndex="0"
                    >
                      <button
                        type="button"
                        className={`d-xl-none ${flip_button}`}
                        onClick={() => slider.slideNext()}
                      >
                        <Flip />
                      </button>
                      <p className={flip_label}>
                        <span className="d-block">click</span> to flip
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={2}>
                  <div className="position-relative d-none d-xl-block">
                    <button
                      type="button"
                      className={flip_button}
                      onClick={() => slider.slideNext()}
                    >
                      <Flip />
                    </button>
                    <p className={flip_label}>
                      <span className="d-block">click</span> to flip
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={interactive_section_II}></section>
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
                    <Link to="#link" className={navigate_previous}>
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
                    <Link to="#link" className={navigate_next}>
                      <h4>
                        <span className="d-block">The Sienna, described</span>{" "}
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
