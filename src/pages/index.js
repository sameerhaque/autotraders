// Node components
import React, { useEffect, useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Modal } from "react-bootstrap"
import { DefaultPlayer as Video } from "react-html5video"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image/withIEPolyfill"
import $ from "jquery"

// Styles
import "swiper/swiper.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"
import landing from "../css/landing.module.css"

// Project components
import videoSrc from "../videos/video.mp4"
import Layout from "../components/layout"
import Families from "../components/families"
import Hotspot from "../components/icons/hotspot"
import Close from "../components/icons/close"
import Left from "../components/icons/left"
import Right from "../components/icons/right"
import StickyAd from "../components/sticky-ad"
import SEO from "../components/seo"

SwiperCore.use([EffectCoverflow, Pagination])
const IndexPage = ({ data }) => {
  const featureData = [
      {
        featTitle: "Lots of storage, a must for a big family",
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p>`,
      },
      {
        featTitle: "Feature 2",
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p>`,
      },
      {
        featTitle: "Feature 3",
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
      {
        featTitle: "Feature 4",
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
    ],
    [show, setShow] = useState(false),
    [featureIndex, setFeatureIndex] = useState(null),
    isBrowser = typeof window !== "undefined",
    fullScreenToggle = () => {
      $(`.${landing.hero_video}`).toggleClass("fullscreen")
    },
    openFeature = (e, dataIndex) => {
      e.currentTarget.classList.add(landing.features_hot_spot_active)
      setFeatureIndex(dataIndex)
      setShow(true)
    },
    removeActiveClass = () => {
      $(`.${landing.features_hot_spot}`).removeClass(
        landing.features_hot_spot_active
      )
    },
    closeFeature = () => {
      removeActiveClass()
      setShow(false)
    },
    previousFeature = () => {
      if (featureIndex === 1) {
        removeActiveClass()
        setFeatureIndex(featureData.length)
        $(`.${landing.features_hot_spot}`)
          .get(featureData.length - 1)
          .classList.add(landing.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex - 1)
        $(`.${landing.features_hot_spot}`)
          .get(featureIndex - 2)
          .classList.add(landing.features_hot_spot_active)
      }
    },
    nextFeature = () => {
      if (featureIndex === featureData.length) {
        removeActiveClass()
        setFeatureIndex(1)
        $(`.${landing.features_hot_spot}`)
          .get(0)
          .classList.add(landing.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex + 1)
        $(`.${landing.features_hot_spot}`)
          .get(featureIndex)
          .classList.add(landing.features_hot_spot_active)
      }
    },
    featureCarLoaded = () => {
      $(`.${landing.features_hot_spot}`).addClass(landing.hot_spot_display)
    },
    featureCarXsLoaded = () => {
      $(`.${landing.features_hot_spot}`).addClass(landing.hot_spot_display)
    }
  useEffect(() => {
    $(`.${landing.hero_video}`).height(
      $(`.${landing.hero_video}`).find("video").height()
    )
    $(`.${landing.hero_video}`).find("video").css({ position: `fixed` })
    $(window).on("load scroll", function () {
      let scrolled = $(this).scrollTop()
      // parallax (25% scroll rate)
      $(`.${landing.hero_video}`).css(
        "transform",
        "translate3d(0, " + scrolled * 0.25 + "px, 0)"
      )
      $(`.rh5v-Fullscreen_component`).css(
        "transform",
        "translate3d(0, " + -(scrolled * 0.25) + "px, 0)"
      )
    })
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
        <div className={landing.families_wrapper}>
          <Container>
            <Row>
              <Col
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 2 }}
                xs={{ span: 12, order: 2 }}
              >
                <div className={landing.hero_cta_tag}>
                  TOYOTA <strong>SIENNA</strong>
                </div>
              </Col>
              <Col
                md={{ span: 5, offset: 1, order: 2 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
              >
                <Families />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className={landing.heading_wrapper}>
                <span className={landing.van_proud}>#</span>
                <h2 className={landing.heading_light}>Makes Us</h2>
                <h2 className={landing.heading_bold}>VanProud</h2>
              </div>
            </Col>
            <Col xl={{ span: 5, offset: 1 }} md={6}>
              <div className={landing.hero_cta_know_more}>
                <p>
                  Discover what it is that makes this people love their Sienna
                  and why they are proud of owning one.
                </p>
                <Link to="#link">Know More</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={landing.hero_card_section}>
        <Container>
          <Swiper
            className={landing.card_slider}
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
            slideVisibleClass={
              landing.card_slide_visible !== ""
                ? landing.card_slide_visible
                : null
            }
            slideDuplicateClass={
              landing.card_slide_duplicate !== ""
                ? landing.card_slide_duplicate
                : null
            }
            slidePrevClass={
              landing.card_slider_prev !== "" ? landing.card_slider_prev : null
            }
            slideDuplicatePrevClass={
              landing.card_slider_prev !== "" ? landing.card_slider_prev : null
            }
            slideActiveClass={
              landing.card_slider_active !== ""
                ? landing.card_slider_active
                : null
            }
            slideDuplicateActiveClass={
              landing.card_slider_active !== ""
                ? landing.card_slider_active
                : null
            }
            slideNextClass={
              landing.card_slider_next !== "" ? landing.card_slider_next : null
            }
            slideDuplicateNextClass={
              landing.card_slider_next !== "" ? landing.card_slider_next : null
            }
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
                effect: "slide",
                allowSlidePrev: false,
                allowSlideNext: false,
              },
            }}
            simulateTouch={true}
            onPaginationRender={(swiper, paginationEl) => {
              paginationEl.classList.add("d-md-none")
            }}
            onResize={swiper => {
              swiper.update()
            }}
          >
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Link to="/the-hardest-working-family-member/">
                  <Img
                    fluid={data.slide2.childImageSharp.fluid}
                    alt="slide-2"
                  />
                  <div className={landing.slide_legend}>
                    <h5 className={landing.slide_legend_type}>ARTICLE</h5>
                    <h3 className={landing.slide_legend_title}>
                      The hardest working
                      <br />
                      family member
                    </h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Link to="/the-sienna-described-from-every-seat/">
                  <Img
                    fluid={data.slide3.childImageSharp.fluid}
                    alt="slide-3"
                  />
                  <div className={landing.slide_legend}>
                    <h5 className={landing.slide_legend_type}>ARTICLE</h5>
                    <h3 className={landing.slide_legend_title}>
                      The Sienna, described
                      <br />
                      from every seat
                    </h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Img fluid={data.slide1.childImageSharp.fluid} alt="slide-1" />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>
                    Interactive Content
                  </h5>
                  <h3 className={landing.slide_legend_title}>
                    20 Reasons
                    <br />
                    to Believe
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <section className={landing.hero_features_section}>
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1 my-auto order-2 order-xl-1">
            <div className={`${landing.features_wrapper} pr-md-5 pr-xl-0`}>
              <Img
                fluid={data.featureCar.childImageSharp.fluid}
                alt="featureCar"
                onLoad={() => featureCarLoaded()}
                className={`d-none d-md-block ${landing.feature_car}`}
              />
              <Img
                fluid={data.featureCarXs.childImageSharp.fluid}
                alt="featureCarXs"
                onLoad={() => featureCarXsLoaded()}
                className="d-md-none"
              />
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_I}`}
                onClick={e => openFeature(e, 1)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_II}`}
                onClick={e => openFeature(e, 2)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_III}`}
                onClick={e => openFeature(e, 3)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_IV}`}
                onClick={e => openFeature(e, 4)}
              >
                <Hotspot />
              </button>
            </div>
          </div>
          <div className="flex-shrink-1 my-auto order-1 order-xl-2 text-center text-xl-left">
            <div className={landing.features_content_holder}>
              <h5 className={landing.features_content_title}>
                Features we cannot live without
              </h5>
              <div className={landing.features_content_wrapper}>
                <div
                  className={`${landing.features_content} d-none d-xl-block`}
                >
                  <p>
                    Hover over the image to discover the features from the
                    Sienna we cannot live without do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className={`${landing.features_content} d-xl-none`}>
                  <p>
                    Tap the image to discover the features from the Sienna we
                    cannot live without do eiusmod tempor.
                  </p>
                </div>
                <button
                  type="button"
                  className={`btn btn-primary ${landing.features_button} d-none d-xl-inline-block`}
                >
                  BUILD &amp; PRICE
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-xl-none order-3 text-center pt-5">
            <button
              type="button"
              className={`btn btn-primary ${landing.features_button}`}
            >
              BUILD &amp; PRICE
            </button>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => closeFeature()}
        backdrop="static"
        keyboard={false}
        className={`fixed-left ${landing.features_modal}`}
        backdropClassName="d-none"
        contentClassName={landing.features_modal_content}
        dialogClassName={`modal-dialog-aside ${landing.features_dialog}`}
        aria-labelledby="features-modal"
      >
        <Modal.Header className={landing.features_modal_header}>
          <div className={landing.feature_dismiss}>
            <button
              type="button"
              className={landing.roundButton}
              onClick={() => closeFeature()}
            >
              <Close />
            </button>
          </div>
          <div className={landing.features_title_wrapper}>
            <h4 className={landing.features_modal_title}>
              {featureIndex !== null && featureData[featureIndex - 1].featTitle}
            </h4>
          </div>
        </Modal.Header>
        <Modal.Body className={landing.features_modal_body}>
          {featureIndex !== null && (
            <>
              <img
                src={
                  featureData[featureIndex - 1].featImg.childImageSharp.fluid
                    .src
                }
                alt="featImg"
                className={landing.featImg}
              />
              <div>
                {ReactHtmlParser(featureData[featureIndex - 1].featContent)}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={landing.features_modal_footer}>
          <button
            className={`${landing.roundButton} mr-2`}
            onClick={previousFeature}
          >
            <Left />
          </button>
          <button
            className={`${landing.roundButton} mx-2`}
            onClick={nextFeature}
          >
            <Right />
          </button>
        </Modal.Footer>
      </Modal>
      <StickyAd />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    hero: file(relativePath: { eq: "captura-de-pantalla.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 575) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
    feature_image: file(relativePath: { eq: "sienna-side2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 976, maxHeight: 432) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide1: file(relativePath: { eq: "slide-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide2: file(relativePath: { eq: "slide-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide3: file(relativePath: { eq: "slide-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureCar: file(relativePath: { eq: "feature-car.png" }) {
      childImageSharp {
        fluid(maxWidth: 913, maxHeight: 570) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureCarXs: file(relativePath: { eq: "feature-car-xs.png" }) {
      childImageSharp {
        fluid(maxWidth: 375, maxHeight: 316) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureI: file(relativePath: { eq: "feature-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 385, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
