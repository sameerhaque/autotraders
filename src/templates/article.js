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
      hero_image,
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
      nav_image,
      nav_area,
      navigate_previous,
      navigate_next,
    } = navigation,
    { excerpt, frontmatter } = post,
    {
      author,
      title,
      description,
      heading_strong,
      heading_thin,
      author_image,
      imageDesktop,
      imageMobile,
      entryQuote,
      entryBody,
      entrySliderImages,
      middleQuote,
      middleBody,
      middleSliderImages,
      exitQuote,
      exitBody,
      exitSliderImages,
    } = frontmatter,
    { prevImageI, prevImageII, nextImage } = data,
    [entrySlider, setEntrySlider] = useState(null),
    [middleSlider, setMiddleSlider] = useState(null),
    [exitSlider, setExitSlider] = useState(null),
    scrollDown = () => {
      $('html, body').animate(
        {
          scrollTop:
            $(`.${hero}`).next().offset().top - $(`.${hero}`).offset().top,
        },
        200
      )
    },
    isBrowser = typeof window !== 'undefined',
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
      if (
        window.dataLayer[window.dataLayer.length - 1].pageType !==
        `/brand-experience/toyota-sienna/2021/article-${
          window.location.pathname.includes('family') ? 'family' : 'sienna'
        }/en`
      ) {
        window.dataLayer.push({
          event: 'gtm_page_load',
          pageType: `/brand-experience/toyota-sienna/2021/article-${
            window.location.pathname.includes('family') ? 'family' : 'sienna'
          }/en`,
          sponsoredContentCampaign: 'toyota sienna - 2021',
        })
      }
      setSliderWidth()
      $(window).width() >= 768
        ? $(`.${hero}`).height($(`.${hero_image}.imageDesktop`).height())
        : $(`.${hero}`).height($(`.${hero_image}.imageMobile`).height())
      $(`.${hero_image} picture`).find('img').css({ position: `fixed` })
      $(window).on('load scroll', function () {
        let scrolled = $(this).scrollTop()
        // parallax (25% scroll rate)
        $(`.${hero_image}`).css(
          'transform',
          'translate3d(0, ' + scrolled * 0.25 + 'px, 0)'
        )
      })
      $(window).resize(() => {
        setSliderWidth()
        $(window).width() >= 768
          ? $(`.${hero}`).height($(`.${hero_image}.imageDesktop`).height())
          : $(`.${hero}`).height($(`.${hero_image}.imageMobile`).height())
      })
    }
  }, [isBrowser, setSliderWidth, hero, hero_image])
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
            className={`d-none d-sm-block w-100 imageDesktop ${hero_image}`}
          />
        )}
        {imageMobile !== null && (
          <Img
            fixed={imageMobile.childImageSharp.fixed}
            alt="hero-image"
            objectFit="cover"
            objectPosition="50% 50%"
            className={`d-sm-none w-100 imageMobile ${hero_image}`}
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
                  <strong>autoTRADER</strong>
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
            onSwiper={swiper => setEntrySlider(swiper)}
            width={sliderSize}
          >
            {entrySliderImages.map((slide, index) => {
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
              onClick={() => entrySlider.slidePrev()}
            >
              <Prev />
            </button>
            <button
              className={slider_button}
              onClick={() => entrySlider.slideNext()}
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
                <h3>{middleQuote}</h3>
              </div>
            </Col>
            <Col>
              <div className={article_content}>
                {middleBody !== '' &&
                  ReactHtmlParser(markdown.toHTML(middleBody))}
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
            onSwiper={swiper => setMiddleSlider(swiper)}
            width={sliderSize}
          >
            {middleSliderImages.map((slide, index) => {
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
              onClick={() => middleSlider.slidePrev()}
            >
              <Prev />
            </button>
            <button
              className={slider_button}
              onClick={() => middleSlider.slideNext()}
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
            onSwiper={swiper => setExitSlider(swiper)}
            width={sliderSize}
          >
            {exitSliderImages.map((slide, index) => {
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
              onClick={() => exitSlider.slidePrev()}
            >
              <Prev />
            </button>
            <button
              className={slider_button}
              onClick={() => exitSlider.slideNext()}
            >
              <Next />
            </button>
          </div>
        </Container>
      </section>
      <section className={navigation_section}>
        {isBrowser && (
          <Container>
            <Row>
              <Col md={6} className="text-center">
                <div className={`w-100 ${nav_wrapper}`}>
                  <div className={`w-100 ${nav_holder}`}>
                    <Img
                      className={`w-100 ${nav_image}`}
                      fluid={
                        window.location.pathname.includes(
                          'the-hardest-working-family-member'
                        )
                          ? prevImageI.childImageSharp.fluid
                          : prevImageII.childImageSharp.fluid
                      }
                    />
                    <div className={nav_area}>
                      <p>Previous</p>
                      <Link
                        to={
                          window.location.pathname.includes(
                            'the-hardest-working-family-member'
                          )
                            ? '/sienna-2021-the-view-from-every-row/'
                            : '/the-hardest-working-family-member/'
                        }
                        className={navigate_previous}
                      >
                        {window.location.pathname.includes(
                          'the-hardest-working-family-member'
                        ) ? (
                          <h4>
                            <span className="d-block">Sienna 2021,</span> The
                            View from Every Row
                          </h4>
                        ) : (
                          <h4>
                            <span className="d-block">The hardest working</span>{' '}
                            family member
                          </h4>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="text-center">
                <div className={`w-100 ${nav_wrapper}`}>
                  <div className={`w-100 ${nav_holder}`}>
                    <Img
                      className={`w-100 ${nav_image}`}
                      fluid={nextImage.childImageSharp.fluid}
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
        )}
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
        entryQuote
        entryBody
        entrySliderImages {
          childImageSharp {
            fluid(maxWidth: 2230, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        middleQuote
        middleBody
        middleSliderImages {
          childImageSharp {
            fluid(maxWidth: 2230, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        exitQuote
        exitBody
        exitSliderImages {
          childImageSharp {
            fluid(maxWidth: 2230, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    prevImageI: file(relativePath: { eq: "sienna-2021.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1085, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prevImageII: file(relativePath: { eq: "hardest-working.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1085, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nextImage: file(relativePath: { eq: "20-reason.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1085, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
