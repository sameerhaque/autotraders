// Node components
import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { DefaultPlayer as Video } from "react-html5video"
import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image/withIEPolyfill"
import $ from "jquery"

// Styles
import landing from "../css/landing.module.css"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

// Project components
import videoSrc from "../videos/video.mp4"
import Layout from "../components/layout"
import SEO from "../components/seo"

SwiperCore.use([Pagination])
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
            centeredSlides={true}
            slidePrevClass={landing.card_slider_prev}
            slideDuplicatePrevClass={landing.card_slider_prev}
            slideActiveClass={landing.card_slider_active}
            slideDuplicateActiveClass={landing.card_slider_active}
            slideNextClass={landing.card_slider_next}
            slideDuplicateNextClass={landing.card_slider_next}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            simulateTouch={true}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Img
                  fluid={data.slide2.childImageSharp.fluid}
                  alt="slide-2"
                  className="img-responsive"
                />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>
                    Interactive Content
                  </h5>
                  <h3 className={landing.slide_legend_title}>
                    20 Reasons to Believe
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Img
                  fluid={data.slide3.childImageSharp.fluid}
                  alt="slide-3"
                  className="img-responsive"
                />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>
                    Interactive Content
                  </h5>
                  <h3 className={landing.slide_legend_title}>
                    20 Reasons to Believe
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={landing.hero_card_slide}>
                <Img
                  fluid={data.slide1.childImageSharp.fluid}
                  alt="slide-1"
                  className="img-responsive"
                />
                <div className={landing.slide_legend}>
                  <h5 className={landing.slide_legend_type}>
                    Interactive Content
                  </h5>
                  <h3 className={landing.slide_legend_title}>
                    20 Reasons to Believe
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
