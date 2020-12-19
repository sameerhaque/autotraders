import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Modal } from "react-bootstrap"
import SwiperCore, { EffectFlip, EffectCoverflow, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ReactHtmlParser from "react-html-parser"
import Img from "gatsby-image/withIEPolyfill"
import $ from "jquery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Close from "../components/icons/close"
import Left from "../components/icons/left"
import Right from "../components/icons/right"
import Flip from "../components/icons/flip"
import Filter from "../components/icons/filter"
import Reasons from "../components/reasons"

import InterActive from "../css/interactive.module.css"

SwiperCore.use([EffectFlip, EffectCoverflow, Pagination])
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
      interactive_slider_section,
      interactive_card_slider,
      interactive_card_slide_visible,
      interactive_card_slide_duplicate,
      interactive_card_slide_prev,
      interactive_card_slide_active,
      interactive_card_slide_next,
      interactive_section_II,
      filter_button,
      filter_label,
      filter_cards,
      reason_card,
      reason_card_body,
      reason_card_tap_button,
      reason_card_tap_holder,
      reason_card_tap_label,
      reason_card_content,
      reason_card_label,
      reason_card_title,
      reason_modal,
      reason_modal_content,
      reason_modal_dialog,
      reason_modal_dismiss,
      reason_dismiss_button,
      reason_modal_slider,
      reason_modal_body_inner,
      reason_modal_image_holder,
      reason_modal_block,
      reason_modal_block_2,
      reason_modal_block_header,
      reason_modal_header_upper,
      reason_modal_user_avatar_image,
      reason_by_section,
      reason_heading,
      reason_modal_block_body,
      reason_modal_body,
      swipe_holder,
      swipe_button,
      swipe_label,
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
    } = InterActive,
    {
      userAvatar,
      reasonImage1,
      reasonImage2,
      reasonImage3,
      reasonImage4,
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
    [show, setShow] = useState(false),
    [isMobile, setMobile] = useState(false),
    [slider, setSlider] = useState(null),
    [renderMobileSlider, setRenderMobileSlider] = useState(false),
    [reasonIndex, setReasonIndex] = useState(0),
    [currentReason, setCurrentReason] = useState(null),
    closeReason = () => {
      setShow(false)
      setRenderMobileSlider(false)
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
    }
  Reasons.forEach((_, index) => {
    let reasonImg
    if ([1, 8, 9, 15, 17].includes(index + 1)) {
      reasonImg = reasonImage1
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
      setMobile($(window).outerWidth() < 768 ? true : false)
      $(window).resize(() => {
        setMobile($(window).outerWidth() < 768 ? true : false)
        $(`.${reason_slide_holder}`)
          .removeAttr("style")
          .height($(`.${reason_slide_holder}.master`).height())
      })
      $(`.${reason_slide_holder}`).height(
        $(`.${reason_slide_holder}.master`).height()
      )
      if (currentReason === null) {
        setCurrentReason(Reasons[reasonIndex])
      }
    }
  }, [
    isBrowser,
    slider,
    reason_slide_holder,
    reasonIndex,
    currentReason,
    reasonFeatImage,
    userAvatar,
    userImage,
  ])
  return (
    <React.Fragment>
      {currentReason !== null ? (
        <Layout>
          <SEO title="20 Reasons to Believe" />
          {!isMobile ? (
            <React.Fragment>
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
                            <button
                              onClick={previousReason}
                              className={`${reason_roundButton} mr-2`}
                            >
                              <Left />
                            </button>
                          </div>
                          <Img
                            fixed={
                              currentReason.userAvatar.childImageSharp.fixed
                            }
                            className={box_avatar_image}
                          />
                          <div className={reason_navigators}>
                            <button
                              onClick={previousReason}
                              className={`${reason_roundButton} d-none d-xl-inline-block mr-2`}
                            >
                              <Left />
                            </button>
                            <button
                              onClick={nextReason}
                              className={`${reason_roundButton} ml-2`}
                            >
                              <Right />
                            </button>
                          </div>
                        </div>
                        <div className={reason_box_content_wrapper}>
                          <div className={reason_box_content_area_outer}>
                            <div
                              reason-id={("0" + currentReason.id).slice(-2)}
                              className={reason_box_content_area}
                            >
                              <h6 className={reason_box_small_heading}>
                                <strong>{`REASON ${(
                                  "0" + currentReason.id
                                ).slice(-2)}`}</strong>
                                {` BY ${currentReason.reasonBy}`}
                              </h6>
                              <h3 className={reason_box_big_heading}>
                                {currentReason.reasonBigHeading}
                              </h3>
                              {ReactHtmlParser(currentReason.reasonDescription)}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              (window.location.href = `//toyota.ca`)
                            }
                            className={box_action_button}
                          >
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
                                <div
                                  className={`${reason_slide_holder} master`}
                                  onClick={e => slider.slideNext()}
                                  onKeyPress={e => slider.slideNext()}
                                  role="button"
                                  tabIndex="0"
                                >
                                  <Img
                                    fluid={
                                      currentReason.reasonImage.childImageSharp
                                        .fluid
                                    }
                                    alt="slide-1"
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div
                                  className={reason_slide_holder}
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
                                          className={reason_review_avatar_image}
                                        />
                                      </div>
                                      <div className={reason_review_title}>
                                        <h3>
                                          {currentReason.reasonReviewTitle}
                                        </h3>
                                        <p>
                                          {"reviewed BY "}
                                          <strong>
                                            {currentReason.reviewBy}
                                          </strong>
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
                              <p className={`d-xl-none ${flip_label}`}>
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
              <section className={interactive_section_II}>
                <Container>
                  <Row className="align-items-center justify-content-between">
                    <Col>
                      <p className={filter_label}>ALL 20 REASONS</p>
                    </Col>
                    <Col className="text-right">
                      <button className={filter_button}>
                        <span className={filter_label}>FILTER</span>
                        <Filter />
                      </button>
                    </Col>
                  </Row>
                  <Row className={filter_cards}>
                    {Reasons.map(
                      ({ id, reasonGridTitle, reasonImage }, index) => {
                        return (
                          <Col key={id} md={3}>
                            <div className={reason_card}>
                              <Img
                                fluid={reasonImage.childImageSharp.fluid}
                                alt="reason-1"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setReasonIndex(index)
                                  setCurrentReason(Reasons[index])
                                  $("html, body").animate(
                                    {
                                      scrollTop: 0,
                                    },
                                    500
                                  )
                                }}
                                className={reason_card_body}
                              >
                                <div className={reason_card_content}>
                                  <p className={reason_card_label}>{`REASON #${(
                                    "0" + id
                                  ).slice(-2)}`}</p>
                                  <h4 className={reason_card_title}>
                                    {reasonGridTitle}
                                  </h4>
                                </div>
                              </button>
                            </div>
                          </Col>
                        )
                      }
                    )}
                  </Row>
                </Container>
              </section>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <section className={interactive_section_I}>
                <Container fluid>
                  <Row>
                    <Col xs={12}>
                      <h1 className={main_heading}>
                        <strong>20 Reasons</strong> to believe
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className={interactive_slider_section}>
                <Container>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-grow-1">
                      <p className={filter_label}>ALL 20 REASONS</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className={filter_button}>
                        <span className={filter_label}>FILTER</span>
                        <Filter />
                      </button>
                    </div>
                  </div>
                </Container>
                <Container>
                  <Swiper
                    className={interactive_card_slider}
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 40,
                      stretch: 0,
                      depth: 80,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    updateOnWindowResize={true}
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: false, dynamicBullets: true }}
                    loop={true}
                    simulateTouch={true}
                    slideVisibleClass={interactive_card_slide_visible}
                    slideDuplicateClass={interactive_card_slide_duplicate}
                    slidePrevClass={interactive_card_slide_prev}
                    slideDuplicatePrevClass={interactive_card_slide_prev}
                    slideActiveClass={interactive_card_slide_active}
                    slideDuplicateActiveClass={interactive_card_slide_active}
                    slideNextClass={interactive_card_slide_next}
                    slideDuplicateNextClass={interactive_card_slide_next}
                  >
                    {Reasons.map(
                      ({ id, reasonGridTitle, reasonImage }, index) => {
                        return (
                          <SwiperSlide key={id}>
                            <div className={reason_card}>
                              <Img
                                fluid={reasonImage.childImageSharp.fluid}
                                alt={`reason-${id}`}
                              />
                              <div className={reason_card_body}>
                                <button
                                  onClick={() => {
                                    setReasonIndex(index)
                                    setCurrentReason(Reasons[index])
                                    setShow(true)
                                  }}
                                  className={reason_card_tap_button}
                                >
                                  <div className={reason_card_tap_holder}>
                                    <Flip />
                                  </div>
                                  <div className={reason_card_tap_label}>
                                    <span className="d-block">TAP</span> TO OPEN
                                  </div>
                                </button>
                                <div className={reason_card_content}>
                                  <p className={reason_card_label}>{`REASON #${(
                                    "0" + id
                                  ).slice(-2)}`}</p>
                                  <h4 className={reason_card_title}>
                                    {reasonGridTitle}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      }
                    )}
                  </Swiper>
                </Container>
              </section>
              <Modal
                show={show}
                onHide={() => closeReason()}
                onEntered={() => setRenderMobileSlider(true)}
                backdrop="static"
                keyboard={false}
                className={`fixed-left ${reason_modal}`}
                backdropClassName="d-none"
                contentClassName={reason_modal_content}
                dialogClassName={`modal-dialog-aside ${reason_modal_dialog}`}
                aria-labelledby="reasons-modal"
              >
                <Modal.Body className="p-0">
                  <div className={reason_modal_dismiss}>
                    <button
                      type="button"
                      className={reason_dismiss_button}
                      onClick={() => closeReason()}
                    >
                      <Close />
                    </button>
                  </div>
                  {renderMobileSlider && (
                    <Swiper
                      className={reason_modal_slider}
                      slidesPerView={1}
                      updateOnWindowResize={true}
                      pagination={{ clickable: true }}
                      loop={true}
                    >
                      <SwiperSlide>
                        <div className={reason_modal_body_inner}>
                          <Img
                            fluid={
                              currentReason.reasonImage.childImageSharp.fluid
                            }
                            alt="reasonImage"
                            className={reason_modal_image_holder}
                          />
                          <div className={reason_modal_block}>
                            <div className={reason_modal_block_header}>
                              <div className={reason_modal_header_upper}>
                                <Img
                                  fixed={
                                    currentReason.userAvatar.childImageSharp
                                      .fixed
                                  }
                                  className={reason_modal_user_avatar_image}
                                />
                                <div className={reason_by_section}>
                                  <h6 className={reason_box_small_heading}>
                                    <strong>{`REASON ${(
                                      "0" + currentReason.id
                                    ).slice(-2)}`}</strong>
                                    {` BY ${currentReason.reasonBy}`}
                                  </h6>
                                </div>
                              </div>
                              <div className={reason_heading}>
                                <h3 className={reason_box_big_heading}>
                                  {currentReason.reasonBigHeading}
                                </h3>
                              </div>
                            </div>
                            <div className={reason_modal_block_body}>
                              <div className={reason_modal_body}>
                                {ReactHtmlParser(
                                  currentReason.reasonDescription
                                )}
                              </div>
                              <button
                                type="button"
                                className={box_action_button}
                              >
                                BUILD &amp; PRICE
                              </button>
                            </div>
                          </div>
                          <div className={swipe_holder}>
                            <button type="button" className={swipe_button}>
                              <Flip />
                            </button>
                            <div className={swipe_label}>
                              <span className="d-block">SWIPE TO</span> SWAP IT
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={reason_modal_body_inner}>
                          <div className={reason_modal_block_2}>
                            <div className={reason_modal_block_header}>
                              <div className={reason_modal_header_upper}>
                                <Img
                                  fixed={
                                    currentReason.userImage.childImageSharp
                                      .fixed
                                  }
                                  className={reason_modal_user_avatar_image}
                                />
                                <div className={reason_by_section}>
                                  <h6 className={reason_box_small_heading}>
                                    {"by autojournalist"}
                                    <strong>{currentReason.reviewBy}</strong>
                                  </h6>
                                </div>
                              </div>
                              <div className={reason_heading}>
                                <h3 className={reason_box_big_heading}>
                                  {currentReason.reasonReviewTitle}
                                </h3>
                              </div>
                            </div>
                            <div className={reason_modal_block_body}>
                              <div className={reason_review_image}>
                                <Img
                                  fluid={
                                    currentReason.reasonFeatImage
                                      .childImageSharp.fluid
                                  }
                                />
                              </div>
                              <div className={reason_modal_body}>
                                {ReactHtmlParser(
                                  currentReason.reviewDescription
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  )}
                </Modal.Body>
              </Modal>
            </React.Fragment>
          )}
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
                            </span>{" "}
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
      ) : null}
    </React.Fragment>
  )
}
