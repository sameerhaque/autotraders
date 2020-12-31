import React, { useCallback, useEffect, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'
import SwiperCore, { EffectFlip, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Left from '../components/icons/left'
import Right from '../components/icons/right'
import Flip from '../components/icons/flip'
import Quote from '../components/icons/quote'
import Reasons from '../components/reasons'

import card from '../css/card.module.css'
import navigation from '../css/navigation.module.css'

SwiperCore.use([EffectFlip, EffectCoverflow, Pagination])
export default () => {
  const {
      breadcrumb_section,
      breadcrumb_back_button,
      breadcrumb_content,
      breadcrumb_button,
      reason_slider_section,
      reason_slider_bg,
      reason_slider_content_area,
      reason_slider_content_top,
      reason_slider_content_below,
      reason_content_wrapper,
      reason_content_holder,
      reason_content_quote,
      reason_navigation,
      reason_content_wrap,
      reason_content,
      reason_box_heading,
      reason_box_author,
      reason_flip_slider,
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
      desktop_flip_button,
      flip_button,
      flip_label,
      main_heading,
      reason_roundButton,
      prev,
      next,
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
    } = card,
    {
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
    } = navigation,
    {
      userAvatar,
      reason1Bg,
      reason1,
      // reasonImage1,
      reasonImage2,
      reasonImage3,
      reasonImage4,
      reasonFeatImage,
      userImage,
      prevImage,
      nextImage,
      reasonCar1,
      reasonCar2,
      reasonCar3,
      reasonCar4,
    } = useStaticQuery(graphql`
      {
        userAvatar: file(relativePath: { eq: "user-avatar.png" }) {
          childImageSharp {
            fixed(width: 190, height: 190) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason1Bg: file(relativePath: { eq: "reason-1-bg.jpg" }) {
          childImageSharp {
            fixed(width: 869, height: 740) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason1: file(relativePath: { eq: "reson-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage1: file(relativePath: { eq: "captura-de-pantalla-6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 434, maxHeight: 598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage2: file(relativePath: { eq: "captura-de-pantalla-7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage3: file(relativePath: { eq: "captura-de-pantalla-8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage4: file(relativePath: { eq: "captura-de-pantalla-9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonFeatImage: file(relativePath: { eq: "reason_featured.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        userImage: file(relativePath: { eq: "neilx90.png" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
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
    `),
    isBrowser = typeof window !== 'undefined',
    [mode, setMode] = useState('desktop'),
    // [show, setShow] = useState(false),
    [slider, setSlider] = useState(null),
    // [renderMobileSlider, setRenderMobileSlider] = useState(false),
    [reasonIndex, setReasonIndex] = useState(0),
    [swiperWidth, setSwiperWidth] = useState(0),
    [currentReason, setCurrentReason] = useState(null),
    // closeReason = () => {
    //   // setShow(false)
    //   // setRenderMobileSlider(false)
    // },
    previousReason = () => {
      // if (reasonIndex === 0) {
      //   // setReasonIndex(Reasons.length - 1)
      //   // setCurrentReason(Reasons[Reasons.length - 1])
      // } else {
      //   // setReasonIndex(reasonIndex - 1)
      //   // setCurrentReason(Reasons[reasonIndex - 1])
      // }
    },
    nextReason = () => {
      // if (reasonIndex === Reasons.length - 1) {
      //   // setReasonIndex(0)
      //   // setCurrentReason(Reasons[0])
      // } else {
      //   // setReasonIndex(reasonIndex + 1)
      //   // setCurrentReason(Reasons[reasonIndex + 1])
      // }
    },
    resetMode = useCallback(() => {
      if ($(window).outerWidth() >= 1200) {
        setMode('desktop')
      } else if ($(window).outerWidth() >= 768) {
        setMode('tablet')
      } else {
        setMode('mobile')
      }
    }, [])
  Reasons.forEach((_, index) => {
    let reasonImg
    if ([1, 8, 9, 15, 17].includes(index + 1)) {
      reasonImg = reason1
    } else if ([2, 5, 10, 16, 18].includes(index + 1)) {
      reasonImg = reasonImage2
    } else if ([3, 6, 11, 14, 19].includes(index + 1)) {
      reasonImg = reasonImage3
    } else {
      reasonImg = reasonImage4
    }
    Reasons[index].userAvatar = userAvatar
    Reasons[index].reasonImage = reasonImg
    Reasons[index].reasonFeatImage = reasonFeatImage
    Reasons[index].userImage = userImage
  })
  useEffect(() => {
    if (isBrowser) {
      resetMode()
      $(window).resize(() => {
        resetMode()
        $(`.${reason_slide_holder}:not(.master)`)
          .removeAttr('style')
          .height($(`.${reason_slide_holder}.master`).height())
      })
      if (currentReason === null) {
        setCurrentReason(Reasons[reasonIndex])
        setReasonIndex(0)
      }
      setSwiperWidth($(`.${reason_content_wrap}`).width() / 2)
    }
  }, [
    isBrowser,
    resetMode,
    reasonIndex,
    setReasonIndex,
    currentReason,
    reason_content_wrap,
    reason_slide_holder,
  ])
  console.log(currentReason)
  return (
    <Layout>
      <SEO title="20 Reasons to Believe" />
      {(mode === 'desktop' || mode === 'tablet') && (
        <section className={breadcrumb_section}>
          <Container fluid>
            <div className="d-flex">
              <div className="flex-grow-1 my-auto">
                <div className="d-flex">
                  <div className="flex-shrink-1">
                    <button
                      type="button"
                      className={`btn btn-primary ${breadcrumb_back_button}`}
                    >
                      <Left />
                    </button>
                  </div>
                  <div className={`flex-grow-1 my-auto ${breadcrumb_content}`}>
                    <Link to="/">toyota sienna</Link>
                    <span>20 reasons to believe</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-1">
                <button
                  type="button"
                  onClick={() => (window.location.href = `//toyota.ca`)}
                  className={`btn btn-primary ${breadcrumb_button}`}
                >
                  BUILD &amp; PRICE
                </button>
              </div>
            </div>
          </Container>
        </section>
      )}
      {(mode === 'desktop' || mode === 'tablet') && (
        <section className={reason_slider_section}>
          {currentReason !== null ? (
            <>
              <Img
                className={reason_slider_bg}
                fixed={reason1Bg.childImageSharp.fixed}
              />
              <div className={reason_slider_content_area}>
                <div className={reason_slider_content_top}>
                  <Container fluid>
                    <Row>
                      <Col xl={4}>
                        <h1 className={main_heading}>
                          <strong>20</strong>
                          <span> Reasons </span>
                          <strong className="d-xl-block">to believe</strong>
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className={reason_slider_content_below}>
                  <div className={`container-fluid ${reason_content_wrapper}`}>
                    <div className={`row no-gutters ${reason_content_holder}`}>
                      <Quote className={reason_content_quote} />
                      <div className={`col ${reason_navigation}`}>
                        <button
                          onClick={previousReason}
                          className={`${reason_roundButton} ${prev}`}
                        >
                          <Left />
                        </button>
                      </div>
                      <div className={`col-10 ${reason_content_wrap}`}>
                        <Row noGutters={true} className="h-100">
                          <Col xl={6}>
                            <div className={reason_content}>
                              <h3 className={reason_box_heading}>
                                {`#${('0' + currentReason.id).slice(-2)} ${
                                  currentReason.reasonBigHeading
                                }`}
                              </h3>
                              {ReactHtmlParser(currentReason.reasonDescription)}
                              <h5 className={reason_box_author}>
                                {currentReason.reasonBy}
                              </h5>
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className={reason_flip_slider}>
                              <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                effect="flip"
                                updateOnWindowResize={true}
                                loop={true}
                                simulateTouch={false}
                                allowTouchMove={false}
                                onSwiper={swiper => {
                                  setSlider(swiper)
                                }}
                                onSlideChange={() => {
                                  $(
                                    `.${reason_slide_holder}:not(.master)`
                                  ).height(
                                    $(`.${reason_slide_holder}.master`).height()
                                  )
                                }}
                                width={swiperWidth}
                                setWrapperSize={false}
                              >
                                <SwiperSlide>
                                  <div
                                    className={`${reason_slide_holder} master`}
                                    onClick={e => slider.slideNext()}
                                    onKeyPress={e => slider.slideNext()}
                                    role="button"
                                    tabIndex="0"
                                  >
                                    <Img
                                      fluid={
                                        currentReason.reasonImage
                                          .childImageSharp.fluid
                                      }
                                      alt="slide-1"
                                    />
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div
                                    className={`${reason_slide_holder}`}
                                    onClick={e => slider.slideNext()}
                                    onKeyPress={e => slider.slideNext()}
                                    role="button"
                                    tabIndex="0"
                                  >
                                    <div className={reason_slide_review}>
                                      <div className={reason_review_header}>
                                        <div className={reason_review_avatar}>
                                          <Img
                                            fixed={
                                              currentReason.userImage
                                                .childImageSharp.fixed
                                            }
                                            alt="slide-1"
                                            className={
                                              reason_review_avatar_image
                                            }
                                          />
                                        </div>
                                        <div className={reason_review_title}>
                                          <h3>Expert Review</h3>
                                          <p>
                                            {`BY ${currentReason.reviewBy}`}
                                          </p>
                                        </div>
                                      </div>
                                      <div className={reason_review_body}>
                                        <div className={reason_review_image}>
                                          <Img
                                            fluid={
                                              currentReason.reasonFeatImage
                                                .childImageSharp.fluid
                                            }
                                            alt="slide-1"
                                          />
                                        </div>
                                        <div className={reason_review_content}>
                                          {ReactHtmlParser(
                                            currentReason.reviewDescription
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div
                                onClick={e => {
                                  e.currentTarget.classList.toggle(button_dark)
                                  slider.slideNext()
                                }}
                                onKeyPress={e => {
                                  e.currentTarget.classList.toggle(button_dark)
                                  slider.slideNext()
                                }}
                                className={desktop_flip_button}
                                role="button"
                                tabIndex="0"
                              >
                                <button type="button" className={flip_button}>
                                  <Flip />
                                </button>
                                <p className={flip_label}>
                                  <span className="d-block">click</span> to flip
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className={`col ${reason_navigation}`}>
                        <button
                          onClick={nextReason}
                          className={`${reason_roundButton} ${next}`}
                        >
                          <Right />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </section>
      )}
      {mode === 'tablet' && (
        <>
          <p>tablet</p>
        </>
      )}
      {mode === 'mobile' && (
        <>
          <p>mobile</p>
        </>
      )}
      {(mode === 'desktop' || mode === 'tablet') && (
        <>
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
                            <span className="d-block">
                              The Sienna, described
                            </span>{' '}
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
        </>
      )}
      <section className={navigation_section}>
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <div className={`w-100 ${nav_wrapper}`}>
                <div className={`w-100 ${nav_holder}`}>
                  <Img
                    className="w-100"
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
            <Col md={6} className="text-center">
              <div className={`w-100 ${nav_wrapper}`}>
                <div className={`w-100 ${nav_holder}`}>
                  <Img
                    className="w-100"
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
