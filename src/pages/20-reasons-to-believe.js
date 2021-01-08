import React, { useCallback, useEffect, useState } from 'react'
import { navigate, Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'
import SwiperCore, { EffectFlip, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Close from '../components/icons/close'
import Left from '../components/icons/left'
import Right from '../components/icons/right'
import Flip from '../components/icons/flip'
import Open from '../components/icons/open'
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
      reason_slider_tablet,
      reason_slider_mobile,
      reason_slider,
      reason_slider_pagination,
      reason_slider_pagination_bullet,
      reason_slider_pagination_active_bullet,
      reason_card_holder,
      reason_card_image,
      reason_card_inner,
      reason_card_inner_content_area,
      reason_slider_modal_open,
      reason_modal_area,
      reason_modal_wrapper,
      reason_modal_dismiss,
      reason_modal_slider,
      reason_modal_pagination,
      reason_modal_pagination_bullet,
      reason_modal_pagination_active_bullet,
      reason_modal_title,
      reason_modal_author,
      reason_modal_feat_image,
      reason_modal_content,
      reason_card_button,
      reason_card_button_label,
      reason_card_button_element,
      reason_card_button_icon,
      reason_card_inner_content,
      reason_card_inner_content_label,
      reason_card_inner_content_title,
      reason_content_wrapper,
      reason_content_holder,
      reason_content_quote,
      reason_navigation,
      reason_content_wrap,
      reason_content,
      reason_box_heading,
      reason_box_author,
      reason_flip_slider_col,
      reason_flip_slider,
      reason_slide_holder,
      reason_slide_master,
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
      reason_card,
      reason_card_img,
      reason_card1,
      reason_card2,
      reason_card3,
      reason_card4,
      reason_card_content,
      reason_card_label_index,
      reason_card_title,
      reason_card_title_width,
      reason_card_city,
      reason_card_city2,
    } = card,
    {
      userAvatar,
      reason1BgXl,
      reason1BgMd,
      reason1Bg,
      reason1,
      reasonImage1,
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
        reason1BgXl: file(relativePath: { eq: "reason-1-bg.jpg" }) {
          childImageSharp {
            fixed(width: 869, height: 740) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason1BgMd: file(relativePath: { eq: "reason-1-bg-md.jpg" }) {
          childImageSharp {
            fixed(width: 1024, height: 433) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason1Bg: file(relativePath: { eq: "reason-1-bg-xs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 750, maxHeight: 903) {
              ...GatsbyImageSharpFluid
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
    isBrowser = typeof window !== undefined,
    [mode, setMode] = useState('desktop'),
    [sliderSize, setSetSliderSize] = useState(null),
    [activeSlide, setActiveSlide] = useState(null),
    [slider, setSlider] = useState(null),
    [tabletModal, setTabletModal] = useState(false),
    [reasonIndex, setReasonIndex] = useState(0),
    [currentReason, setCurrentReason] = useState(null),
    openTabletModal = (_, index) => {
      setReasonIndex(index)
      setCurrentReason(Reasons[index])
      setTabletModal(true)
    },
    closeTabletModal = () => {
      setTabletModal(false)
    },
    previousReason = () => {
      if (reasonIndex === 0) {
        setReasonIndex(Reasons.length - 1)
        setCurrentReason(Reasons[Reasons.length - 1])
      } else {
        setReasonIndex(reasonIndex - 1)
        setCurrentReason(Reasons[reasonIndex - 1])
      }
    },
    nextReason = () => {
      if (reasonIndex === Reasons.length - 1) {
        setReasonIndex(0)
        setCurrentReason(Reasons[0])
      } else {
        setReasonIndex(reasonIndex + 1)
        setCurrentReason(Reasons[reasonIndex + 1])
      }
    },
    resetMode = useCallback(() => {
      if ($(window).outerWidth() >= 1200) {
        setMode('desktop')
      } else if ($(window).outerWidth() >= 768) {
        setMode('tablet')
      } else {
        setMode('mobile')
      }
    }, []),
    setSliderWidth = useCallback(() => {
      if ($(window).width() >= 1363) {
        setSetSliderSize($(`.${reason_content_wrap}`).width() / 2 - 30)
      } else if ($(window).width() >= 1200) {
        setSetSliderSize($(`.${reason_content_wrap}`).width() / 2 - 30)
      }
    }, [reason_content_wrap])
  Reasons.forEach((_, index) => {
    Reasons[index].userAvatar = userAvatar
    if ([1, 8, 9, 15, 17].includes(index + 1)) {
      Reasons[index].reasonImage = reason1
      Reasons[index].reasonImageMd = reasonImage1
    } else if ([2, 5, 10, 16, 18].includes(index + 1)) {
      Reasons[index].reasonImage = reasonImage2
      Reasons[index].reasonImageMd = reasonImage2
    } else if ([3, 6, 11, 14, 19].includes(index + 1)) {
      Reasons[index].reasonImage = reasonImage3
      Reasons[index].reasonImageMd = reasonImage3
    } else {
      Reasons[index].reasonImage = reasonImage4
      Reasons[index].reasonImageMd = reasonImage4
    }
    Reasons[index].reasonFeatImage = reasonFeatImage
    Reasons[index].userImage = userImage
  })
  useEffect(() => {
    if (isBrowser) {
      resetMode()
      setTimeout(() => {
        setSliderWidth()
      }, 1000)
      $(window).resize(() => {
        const masters = `.${reason_slide_holder}.master`,
          others = `.${reason_slide_holder}:not(.master)`,
          mastersHeight = $(masters).height(),
          othersHeight = $(others).height()
        resetMode()
        setSliderWidth()
        if (mastersHeight > othersHeight) {
          $(others).height($(masters).height())
        } else {
          $(masters).height($(others).height())
        }
      })
      if (currentReason === null) {
        setCurrentReason(Reasons[reasonIndex])
        setReasonIndex(0)
      }
    }
  }, [
    isBrowser,
    resetMode,
    reasonIndex,
    setReasonIndex,
    currentReason,
    reason_content_wrap,
    reason_slide_holder,
    setSliderWidth,
  ])
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
                      onClick={() => {
                        navigate('/')
                      }}
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
        <section
          className={
            tabletModal
              ? `${reason_slider_section} ${reason_slider_modal_open}`
              : reason_slider_section
          }
        >
          {currentReason !== null ? (
            <>
              <Img
                className={`d-none d-xl-block ${reason_slider_bg}`}
                fixed={reason1BgXl.childImageSharp.fixed}
              />
              <Img
                className={`d-none d-md-block d-xl-none ${reason_slider_bg}`}
                fixed={reason1BgMd.childImageSharp.fixed}
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
                {mode === 'desktop' && (
                  <div className={reason_slider_content_below}>
                    <div
                      className={`container-fluid ${reason_content_wrapper}`}
                    >
                      <div
                        className={`row no-gutters ${reason_content_holder}`}
                      >
                        <div className={`col ${reason_navigation}`}>
                          <button
                            onClick={previousReason}
                            className={`${reason_roundButton} ${prev}`}
                          >
                            <Left />
                          </button>
                        </div>
                        <div className={`col-10 ${reason_content_wrap}`}>
                          <Quote className={reason_content_quote} />
                          <Row noGutters={true} className="h-100">
                            <Col xl={6}>
                              <div className={reason_content}>
                                <h3 className={reason_box_heading}>
                                  {`#${('0' + currentReason.id).slice(-2)} ${
                                    currentReason.reasonBigHeading
                                  }`}
                                </h3>
                                {ReactHtmlParser(
                                  currentReason.reasonDescription
                                )}
                                <h5 className={reason_box_author}>
                                  {currentReason.reasonBy}
                                </h5>
                              </div>
                            </Col>
                            <Col xl={6} className={reason_flip_slider_col}>
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
                                  onSlideNextTransitionStart={() => {
                                    const masters = `.${reason_slide_holder}.master`,
                                      others = `.${reason_slide_holder}:not(.master)`
                                    setTimeout(() => {
                                      const mastersHeight = $(masters).height(),
                                        othersHeight = $(others).height()
                                      if (mastersHeight > othersHeight) {
                                        $(others).height($(masters).height())
                                      } else {
                                        $(masters).height($(others).height())
                                      }
                                    }, 1100)
                                  }}
                                  width={sliderSize}
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
                                        className={`${reason_slide_master} h-100`}
                                        imgStyle={{ maxWidth: sliderSize }}
                                        style={{ maxWidth: sliderSize }}
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
                                          <div
                                            className={reason_review_content}
                                          >
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
                                    e.currentTarget.classList.toggle(
                                      button_dark
                                    )
                                    slider.slideNext()
                                  }}
                                  onKeyPress={e => {
                                    e.currentTarget.classList.toggle(
                                      button_dark
                                    )
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
                                    <span className="d-block">click</span> to
                                    flip
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className={`col text-right ${reason_navigation}`}>
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
                )}
                {mode === 'tablet' && (
                  <div className={reason_slider_content_below}>
                    <div className={reason_slider_tablet}>
                      <Swiper
                        className={reason_slider}
                        slidesPerView={1}
                        spaceBetween={70}
                        centeredSlides={true}
                        effect="coverflow"
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 110,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        updateOnWindowResize={true}
                        keyboard={{ enabled: true }}
                        pagination={{
                          clickable: false,
                          bulletClass: reason_slider_pagination_bullet,
                          bulletActiveClass: reason_slider_pagination_active_bullet,
                        }}
                        loop={true}
                        simulateTouch={true}
                        slideToClickedSlide={true}
                        onPaginationRender={(_, paginationEl) => {
                          paginationEl.classList.add(reason_slider_pagination)
                        }}
                        onSlideChange={swiper => {
                          setActiveSlide(swiper.realIndex)
                        }}
                        onSwiper={swiper => {
                          setActiveSlide(swiper.realIndex)
                        }}
                      >
                        {Reasons.map(
                          ({ id, reasonImageMd, reasonGridTitle }, index) => {
                            return (
                              <SwiperSlide key={id}>
                                <div className={reason_card_holder}>
                                  <Img
                                    fluid={reasonImageMd.childImageSharp.fluid}
                                    alt={`reason-${id}`}
                                  />
                                  {activeSlide === index && (
                                    <div className={reason_card_inner}>
                                      <div
                                        className={
                                          reason_card_inner_content_area
                                        }
                                      >
                                        <div className={reason_card_button}>
                                          <p
                                            className={reason_card_button_label}
                                          >
                                            TAP{' '}
                                            <span className="d-block">
                                              TO OPEN
                                            </span>
                                          </p>
                                          <button
                                            className={
                                              reason_card_button_element
                                            }
                                            onClick={e => {
                                              openTabletModal(e, index)
                                            }}
                                          >
                                            <Open
                                              className={
                                                reason_card_button_icon
                                              }
                                            />
                                          </button>
                                        </div>
                                        <div
                                          className={reason_card_inner_content}
                                        >
                                          <p
                                            className={
                                              reason_card_inner_content_label
                                            }
                                          >{`REASON #${('0' + id).slice(
                                            -2
                                          )}`}</p>
                                          <h4
                                            className={
                                              reason_card_inner_content_title
                                            }
                                          >
                                            {reasonGridTitle}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </SwiperSlide>
                            )
                          }
                        )}
                      </Swiper>
                    </div>
                  </div>
                )}
              </div>
              {mode === 'tablet' && (
                <div className={reason_modal_area}>
                  <div className={reason_modal_wrapper}>
                    <button
                      onClick={closeTabletModal}
                      className={reason_modal_dismiss}
                    >
                      <Close />
                    </button>
                    <Swiper
                      className={reason_modal_slider}
                      pagination={{
                        clickable: false,
                        bulletClass: reason_modal_pagination_bullet,
                        bulletActiveClass: reason_modal_pagination_active_bullet,
                      }}
                      onPaginationRender={(_, paginationEl) => {
                        paginationEl.classList.add(reason_modal_pagination)
                      }}
                      width={718}
                    >
                      <SwiperSlide>
                        <Row className="m-0">
                          <Col md={7}>
                            <h3 className={reason_modal_title}>
                              <strong>{`#${('0' + currentReason.id).slice(
                                -2
                              )}`}</strong>
                              {` ${currentReason.reasonBigHeading}`}
                            </h3>
                            <h5 className={reason_modal_author}>
                              {currentReason.reasonBy}
                            </h5>
                          </Col>
                          <Col md={12}>
                            <div className={reason_modal_content}>
                              {ReactHtmlParser(
                                currentReason.reasonDescriptionTablet
                              )}
                            </div>
                          </Col>
                        </Row>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Row className="m-0">
                          <Col md={7}>
                            <div className={reason_review_header}>
                              <div className={reason_review_avatar}>
                                <Img
                                  fixed={
                                    currentReason.userImage.childImageSharp
                                      .fixed
                                  }
                                  alt="slide-1"
                                  className={reason_review_avatar_image}
                                />
                              </div>
                              <div className={reason_review_title}>
                                <h3 className={reason_modal_title}>
                                  Expert Review
                                </h3>
                                <h5
                                  className={reason_modal_author}
                                >{`BY ${currentReason.reviewBy}`}</h5>
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <Img
                              fluid={
                                currentReason.reasonFeatImage.childImageSharp
                                  .fluid
                              }
                              className={reason_modal_feat_image}
                              alt="slide-1"
                            />
                          </Col>
                          <Col md={6}>
                            <div className={reason_review_content}>
                              {ReactHtmlParser(currentReason.reviewDescription)}
                            </div>
                          </Col>
                        </Row>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </section>
      )}
      {mode === 'mobile' && (
        <>
          {currentReason !== null ? (
            <section
              className={
                tabletModal
                  ? `${reason_slider_section} ${reason_slider_modal_open}`
                  : reason_slider_section
              }
            >
              <Img
                className={reason_slider_bg}
                fluid={reason1Bg.childImageSharp.fluid}
              />
              <div className={reason_slider_content_area}>
                <div className={reason_slider_content_top}>
                  <button
                    type="button"
                    onClick={() => (window.location.href = `//toyota.ca`)}
                    className={`btn btn-primary ${breadcrumb_button}`}
                  >
                    BUILD &amp; PRICE
                  </button>
                  <h1 className={main_heading}>
                    <strong>20</strong>
                    <span> Reasons </span>
                    <strong className="d-block">to believe</strong>
                  </h1>
                </div>
                <div className={reason_slider_content_below}>
                  <div className={reason_slider_mobile}>
                    <Swiper
                      className={reason_slider}
                      slidesPerView={1}
                      spaceBetween={40}
                      centeredSlides={true}
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 110,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      updateOnWindowResize={true}
                      keyboard={{ enabled: true }}
                      pagination={{
                        clickable: false,
                        bulletClass: reason_slider_pagination_bullet,
                        bulletActiveClass: reason_slider_pagination_active_bullet,
                      }}
                      loop={true}
                      simulateTouch={true}
                      slideToClickedSlide={true}
                      onPaginationRender={(_, paginationEl) => {
                        paginationEl.classList.add(reason_slider_pagination)
                      }}
                      onSlideChange={swiper => {
                        setActiveSlide(swiper.realIndex)
                      }}
                      onSwiper={swiper => {
                        setActiveSlide(swiper.realIndex)
                      }}
                    >
                      {Reasons.map(
                        ({ id, reasonImageMd, reasonGridTitle }, index) => {
                          return (
                            <SwiperSlide key={id}>
                              <div className={reason_card_holder}>
                                <Img
                                  fluid={reasonImageMd.childImageSharp.fluid}
                                  alt={`reason-${id}`}
                                  className={reason_card_image}
                                />
                                {activeSlide === index && (
                                  <div className={reason_card_inner}>
                                    <div
                                      className={reason_card_inner_content_area}
                                    >
                                      <div className={reason_card_button}>
                                        <p className={reason_card_button_label}>
                                          TAP{' '}
                                          <span className="d-block">
                                            TO OPEN
                                          </span>
                                        </p>
                                        <button
                                          className={reason_card_button_element}
                                          onClick={e => {
                                            openTabletModal(e, index)
                                          }}
                                        >
                                          <Open
                                            className={reason_card_button_icon}
                                          />
                                        </button>
                                      </div>
                                      <div
                                        className={reason_card_inner_content}
                                      >
                                        <p
                                          className={
                                            reason_card_inner_content_label
                                          }
                                        >{`REASON #${('0' + id).slice(-2)}`}</p>
                                        <h4
                                          className={
                                            reason_card_inner_content_title
                                          }
                                        >
                                          {reasonGridTitle}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </SwiperSlide>
                          )
                        }
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className={reason_modal_area}>
                <div className={reason_modal_wrapper}>
                  <button
                    onClick={closeTabletModal}
                    className={reason_modal_dismiss}
                  >
                    <Close />
                  </button>
                  <Swiper
                    className={reason_modal_slider}
                    spaceBetween={20}
                    updateOnWindowResize={true}
                    pagination={{
                      clickable: false,
                      bulletClass: reason_modal_pagination_bullet,
                      bulletActiveClass: reason_modal_pagination_active_bullet,
                    }}
                    onPaginationRender={(_, paginationEl) => {
                      paginationEl.classList.add(reason_modal_pagination)
                    }}
                    width={$(`.${reason_modal_wrapper}`).width()}
                  >
                    <SwiperSlide>
                      <Row noGutters={true} className="justify-content-center">
                        <Col xs={12} sm={7}>
                          <button
                            type="button"
                            onClick={() =>
                              (window.location.href = `//toyota.ca`)
                            }
                            className={`btn btn-primary ${breadcrumb_button}`}
                          >
                            BUILD &amp; PRICE
                          </button>
                          <h3 className={reason_modal_title}>
                            <strong>{`#${('0' + currentReason.id).slice(
                              -2
                            )}`}</strong>
                            {` ${currentReason.reasonBigHeading}`}
                          </h3>
                          <h5 className={reason_modal_author}>
                            {currentReason.reasonBy}
                          </h5>
                        </Col>
                        <Col xs={12} sm={7}>
                          <div className={reason_modal_content}>
                            {ReactHtmlParser(currentReason.reasonDescription)}
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Row noGutters={true} className="justify-content-center">
                        <Col xs={12} sm={7}>
                          <div className={reason_review_header}>
                            <div className={reason_review_avatar}>
                              <Img
                                fixed={
                                  currentReason.userImage.childImageSharp.fixed
                                }
                                alt="slide-1"
                                className={reason_review_avatar_image}
                              />
                            </div>
                            <div className={reason_review_title}>
                              <h3 className={reason_modal_title}>
                                Expert Review
                              </h3>
                              <h5
                                className={reason_modal_author}
                              >{`BY ${currentReason.reviewBy}`}</h5>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} sm={7}>
                          <Img
                            fluid={
                              currentReason.reasonFeatImage.childImageSharp
                                .fluid
                            }
                            className={reason_modal_feat_image}
                            alt="slide-1"
                          />
                          <div className={reason_modal_content}>
                            {ReactHtmlParser(currentReason.reviewDescription)}
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
      {(mode === 'desktop' || mode === 'tablet') && (
        <section className={view_all_reasons}>
          <Container>
            <Row className="mb-3">
              <Col className="col-12">
                <p className={reason_section_title}>
                  <strong className={bold_title}>View</strong> all reasons
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card1}`}>
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card2}`}>
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card3}`}>
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card4}`}>
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card1}`}>
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card2}`}>
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card3}`}>
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card4}`}>
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card1}`}>
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card2}`}>
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card3}`}>
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card4}`}>
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card1}`}>
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card2}`}>
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card3}`}>
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card4}`}>
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card1}`}>
                  <Img
                    fixed={reasonCar1.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card2}`}>
                  <Img
                    fixed={reasonCar2.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mb-3">
                <div className={`${reason_card} ${reason_card3}`}>
                  <Img
                    fixed={reasonCar3.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
              <Col md={4} className="mb-3">
                <div className={`${reason_card} ${reason_card4}`}>
                  <Img
                    fixed={reasonCar4.childImageSharp.fixed}
                    alt="reason-1"
                    className={reason_card_img}
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
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <section className={navigation.navigation_section}>
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <div className={`w-100 ${navigation.nav_wrapper}`}>
                <div className={`w-100 ${navigation.nav_holder}`}>
                  <Img
                    className={`w-100 ${navigation.nav_image}`}
                    fixed={prevImage.childImageSharp.fixed}
                  />
                  <div className={navigation.nav_area}>
                    <p>Previous</p>
                    <Link
                      to="/the-hardest-working-family-member/"
                      className={navigation.navigate_previous}
                    >
                      <h4>
                        <span className="d-block">The hardest working</span>{' '}
                        family member
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div className={`w-100 ${navigation.nav_wrapper}`}>
                <div className={`w-100 ${navigation.nav_holder}`}>
                  <Img
                    className={`w-100 ${navigation.nav_image}`}
                    fixed={nextImage.childImageSharp.fixed}
                  />
                  <div className={navigation.nav_area}>
                    <p>Next</p>
                    <Link
                      to="/the-sienna-described-from-every-seat/"
                      className={navigation.navigate_next}
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
