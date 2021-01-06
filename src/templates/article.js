import React, { useCallback, useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import SwiperCore, { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { markdown } from 'markdown'
import ReactHtmlParser from 'react-html-parser'
import $ from 'jquery'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Down from '../components/icons/down'
import Prev from '../components/icons/prev'
import Next from '../components/icons/next'

import Article from '../css/article.module.css'
import navigation from '../css/navigation.module.css'

SwiperCore.use([EffectCoverflow])
const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark,
    {
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
    } = Article,
    {
      navigation_section,
      nav_wrapper,
      nav_holder,
      nav_area,
      navigate_previous,
      navigate_next,
    } = navigation,
    { excerpt, frontmatter } = post,
    {
      author,
      designation,
      title,
      description,
      heading_strong,
      heading_thin,
      author_image,
      imageDesktop,
      imageMobile,
      entryQuote,
      entryBody,
      exitQuote,
      exitBody,
      sliderImages,
    } = frontmatter,
    { prevImage, nextImage } = data,
    [slider, setSlider] = useState(null),
    scrollDown = () => {
      $('html, body').animate(
        {
          scrollTop:
            $(`.${hero}`).next().offset().top - $(`.${hero}`).offset().top,
        },
        200
      )
    },
    isBrowser = typeof window !== undefined,
    [sliderSize, setSetSliderSize] = useState(null),
    setSliderWidth = useCallback(() => {
      if ($(window).outerWidth() >= 1200) {
        setSetSliderSize(1010)
      } else if ($(window).outerWidth() >= 768) {
        setSetSliderSize(720)
      } else {
        setSetSliderSize($(window).width())
      }
    }, [])
  useEffect(() => {
    if (isBrowser) {
      setSliderWidth()
      $(window).resize(() => {
        setSliderWidth()
      })
    }
  }, [isBrowser, setSliderWidth])
  return (
    <Layout itemScope itemType="http://schema.org/Article">
      <SEO title={title} description={description || excerpt} />
      <section className={hero}>
        {imageDesktop !== null && (
          <Img
            fixed={imageDesktop.childImageSharp.fixed}
            alt="hero-image-sm"
            objectFit="cover"
            objectPosition="50% 50%"
            className="d-none d-sm-block w-100"
          />
        )}
        {imageMobile !== null && (
          <Img
            fixed={imageMobile.childImageSharp.fixed}
            alt="hero-image"
            objectFit="cover"
            objectPosition="50% 50%"
            className="d-sm-none w-100"
          />
        )}
        <div className={hero_content}>
          <div className={hero_holder}>
            <div className={hero_inner}>
              <h1>
                <strong>{`${heading_strong} `}</strong>
                {heading_thin}
              </h1>
              <div className={author_info}>
                <div className={author_img}>
                  <Img fixed={author_image.childImageSharp.fixed} />
                </div>
                <p>
                  <span>
                    by <strong>{author}</strong>,
                  </span>{' '}
                  <strong>autoTRADER</strong> {designation}
                </p>
              </div>
            </div>
            <button type="button" className={hero_button} onClick={scrollDown}>
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
                <h3>{entryQuote}</h3>
              </div>
            </Col>
            <Col>
              <div className={article_content}>
                {entryBody !== '' &&
                  ReactHtmlParser(markdown.toHTML(entryBody))}
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
              slideShadows: false,
            }}
            simulateTouch={true}
            slideToClickedSlide={true}
            onSwiper={swiper => setSlider(swiper)}
            width={sliderSize}
          >
            {sliderImages.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <Img
                    fluid={slide.childImageSharp.fluid}
                    className={article_slide}
                  />
                </SwiperSlide>
              )
            })}
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
                <h3>{exitQuote}</h3>
              </div>
            </Col>
            <Col>
              <div className={article_content}>
                {exitBody !== '' && ReactHtmlParser(markdown.toHTML(exitBody))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
                      to="/the-sienna-described-from-every-seat/"
                      className={navigate_previous}
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
                      to="/20-reasons-to-believe/"
                      className={navigate_next}
                    >
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

export default ArticleTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        heading_strong
        heading_thin
        author_image {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        description
        imageMobile {
          childImageSharp {
            fixed(width: 375, height: 599) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        imageDesktop {
          childImageSharp {
            fixed(width: 1440, height: 841) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        author
        designation
        entryQuote
        entryBody
        exitQuote
        exitBody
        sliderImages {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
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
`
