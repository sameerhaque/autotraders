// Node components
import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { DefaultPlayer as Video } from "react-html5video"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image/withIEPolyfill"
import $ from "jquery"

// Styles
import landing from "../css/landing.module.css"
import "swiper/swiper.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"

// Project components
import videoSrc from "../videos/video.mp4"
import Layout from "../components/layout"
import SEO from "../components/seo"

SwiperCore.use([EffectCoverflow, Pagination])
const IndexPage = ({ data }) => {
  const fullScreenToggle = () => {
      $(`.${landing.hero_video}`).toggleClass("fullscreen")
    },
    isBrowser = typeof window !== "undefined"
  // [showPagination, setShowPagination] = useState(false)
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
                md={{ span: 6, order: 2 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
              >
                <div className="text-center text-md-right">
                  <Img
                    fixed={data.families.childImageSharp.fixed}
                    alt="families"
                    objectFit="contain"
                    objectPosition="50% 50%"
                    className={`img-fluid d-none d-md-inline-block ${landing.families_image}`}
                  />
                  <Img
                    fixed={data.familiesM.childImageSharp.fixed}
                    alt="families-m"
                    objectFit="contain"
                    objectPosition="50% 50%"
                    className={`img-fluid d-inline-block d-md-none ${landing.families_image}`}
                  />
                </div>
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
                <Link
                  to="#link"
                  className="font-weight-bold text-right border-bottom"
                >
                  Know More
                </Link>
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
            slideVisibleClass={landing.card_slide_visible}
            slideDuplicateClass={landing.card_slide_duplicate}
            slidePrevClass={landing.card_slider_prev}
            slideDuplicatePrevClass={landing.card_slider_prev}
            slideActiveClass={landing.card_slider_active}
            slideDuplicateActiveClass={landing.card_slider_active}
            slideNextClass={landing.card_slider_next}
            slideDuplicateNextClass={landing.card_slider_next}
            pagination={{ clickable: true }}
            mousewheel={{ releaseOnEdges: true }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 10, effect: "slide" },
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
                <Img fluid={data.slide2.childImageSharp.fluid} alt="slide-2" />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>ARTICLE</h5>
                  <h3 className={landing.slide_legend_title}>
                    The hardest working
                    <br />
                    family member
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Img fluid={data.slide3.childImageSharp.fluid} alt="slide-3" />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>ARTICLE</h5>
                  <h3 className={landing.slide_legend_title}>
                    The Sienna, described
                    <br />
                    from every seat
                  </h3>
                </div>
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
                className={`d-none d-md-block ${landing.feature_car}`}
              />
              <Img
                fluid={data.featureCarXs.childImageSharp.fluid}
                alt="featureCarXs"
                className="d-md-none"
              />
              <img
                src={data.hotSpot.publicURL}
                alt="hotSpot-1"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_I}`}
              />
              <img
                src={data.hotSpot.publicURL}
                alt="hotSpot-2"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_II}`}
              />
              <img
                src={data.hotSpot.publicURL}
                alt="hotSpot-2"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_III}`}
              />
              <img
                src={data.hotSpot.publicURL}
                alt="hotSpot-2"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_IV}`}
              />
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
    hotSpot: file(relativePath: { eq: "hotspot.svg" }) {
      publicURL
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
