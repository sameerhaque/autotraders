import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import SwiperCore, { EffectCoverflow } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Down from "../components/icons/down"
import Prev from "../components/icons/prev"
import Next from "../components/icons/next"

import Article from "../css/article.module.css"
import "swiper/swiper.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"

SwiperCore.use([EffectCoverflow])
export default () => {
  const {
      hero,
      hero_content,
      hero_holder,
      hero_inner,
      author_info,
      author_img,
      hero_button,
      article_content_wrapper,
      article_quote,
      article_content,
      slider_section,
      slider_container,
      article_slider,
      article_slide,
      swiper_nav,
      slider_button,
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
    } = Article,
    {
      heroImage,
      heroImageSM,
      sliderImage,
      prevImage,
      nextImage,
      neilImage,
    } = useStaticQuery(graphql`
      {
        heroImage: file(relativePath: { eq: "captura-de-pantalla-1.jpg" }) {
          childImageSharp {
            fixed(width: 375, height: 599) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heroImageSM: file(relativePath: { eq: "captura-de-pantalla-2.jpg" }) {
          childImageSharp {
            fixed(width: 1440, height: 841) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sliderImage: file(relativePath: { eq: "captura-de-pantalla-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1115, maxHeight: 601) {
              ...GatsbyImageSharpFluid
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
        neilImage: file(relativePath: { eq: "neil.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    [slider, setSlider] = useState(null)
  return (
    <Layout>
      <SEO title="The hardest working family member" />
      <section className={hero}>
        <Img
          fixed={heroImageSM.childImageSharp.fixed}
          alt="hero-image-sm"
          objectFit="cover"
          objectPosition="50% 50%"
          className="d-none d-sm-block"
        />
        <Img
          fixed={heroImage.childImageSharp.fixed}
          alt="hero-image"
          objectFit="cover"
          objectPosition="50% 50%"
          className="d-sm-none w-100"
        />
        <div className={hero_content}>
          <div className={hero_holder}>
            <div className={hero_inner}>
              <h1>
                <strong>The hardest </strong>working family member
              </h1>
              <div className={author_info}>
                <div className={author_img}>
                  <Img
                    fixed={neilImage.childImageSharp.fixed}
                    alt="neilImage"
                  />
                </div>
                <p>
                  <span>
                    by <strong>Neil Vorano</strong>,
                  </span>{" "}
                  <strong>autoTRADER</strong> specialist
                </p>
              </div>
            </div>
            <button type="button" className={hero_button}>
              <Down />
            </button>
          </div>
        </div>
      </section>
      <section className={article_content_wrapper}>
        <Container>
          <Row>
            <Col xl={5} lg={4} xs={12}>
              <div className={article_quote}>
                <h3>
                  This is a quote to discover what it is that makes this people
                  love their Sienna so much.
                </h3>
              </div>
            </Col>
            <Col>
              <div className={article_content}>
                <p>
                  Discover what it is that makes this people love their Sienna
                  and why they are proud of owning one. Lorem ipsum dolor sit
                  amet nostrud. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={slider_section}>
        <Container className={slider_container}>
          <Swiper
            className={article_slider}
            slidesPerView={1}
            spaceBetween={10}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: -80,
              depth: 170,
              modifier: 1,
              slideShadows: true,
            }}
            simulateTouch={true}
            onSwiper={swiper => setSlider(swiper)}
          >
            <SwiperSlide>
              <div className={article_slide}>
                <Img fluid={sliderImage.childImageSharp.fluid} alt="slide-1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={article_slide}>
                <Img fluid={sliderImage.childImageSharp.fluid} alt="slide-2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={article_slide}>
                <Img fluid={sliderImage.childImageSharp.fluid} alt="slide-3" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={swiper_nav}>
            <button
              className={slider_button}
              onClick={() => slider.slidePrev()}
            >
              <Prev />
            </button>
            <button
              className={slider_button}
              onClick={() => slider.slideNext()}
            >
              <Next />
            </button>
          </div>
        </Container>
      </section>
      <section className={article_content_wrapper}>
        <Container>
          <Row>
            <Col xl={5} lg={4} xs={12}>
              <div className={article_quote}>
                <h3>
                  This is a quote to discover what it is that makes this people
                  love their Sienna so much.
                </h3>
              </div>
            </Col>
            <Col>
              <div className={article_content}>
                <p>
                  Discover what it is that makes this people love their Sienna
                  and why they are proud of owning one. Lorem ipsum dolor sit
                  amet nostrud. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
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
                    <p>Previous</p>
                    <Link to="#link" className={navigate_next}>
                      <h4>
                        <span className="d-block">20 Reasons</span> to Believe
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
