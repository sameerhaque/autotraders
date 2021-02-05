import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img from 'gatsby-image/withIEPolyfill'

import landing_article from './css/landing_article.module.css'

SwiperCore.use([Pagination])
const LandingArticle = () => {
  const isBrowser = typeof window !== 'undefined',
    [isMobile, setMobile] = useState(false),
    [activeSlide, setActiveSlide] = useState(null),
    { Article_1, Article_2 } = useStaticQuery(graphql`
      {
        Article_1: file(relativePath: { eq: "article-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Article_2: file(relativePath: { eq: "article-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  useEffect(() => {
    if (isBrowser) {
      setMobile(window.outerWidth < 768 ? true : false)
      window.addEventListener('resize', () => {
        setMobile(window.outerWidth < 768 ? true : false)
      })
    }
  }, [isBrowser])
  return (
    <section className={landing_article.section}>
      <div className="container-xl px-xl-0">
        <Row className="justify-content-between align-items-end">
          <Col lg={5}>
            <h3 className={`${landing_article.heading} pr-xl-4`}>
              Learn more about the Sienna
            </h3>
          </Col>
          <Col lg={6}>
            <p className={`${landing_article.description} pr-lg-4`}>
              See how the Toyota Sienna{' '}
              <strong>can fit your own lifestyle.</strong>
            </p>
          </Col>
        </Row>
        {!isMobile ? (
          <Row className={landing_article.articles}>
            <Col md={6}>
              <div className={landing_article.article}>
                <Link
                  onClick={() =>
                    window.dataLayer.push({
                      event: 'gtm_bx',
                      eventAction:
                        'toyota sienna 2021 - home - article - family',
                      eventLabel: ``,
                    })
                  }
                  to="/the-hardest-working-family-member/"
                >
                  <Img
                    fluid={Article_1.childImageSharp.fluid}
                    className={landing_article.article_image}
                    alt="Article-1"
                  />
                  <div className={landing_article.article_title}>
                    The hardest working family member
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className={landing_article.article}>
                <Link onClick={() =>
                    window.dataLayer.push({
                      event: 'gtm_bx',
                      eventAction:
                        'toyota sienna 2021 - home - article - sienna',
                      eventLabel: ``,
                    })
                  } to="/sienna-2021-the-view-from-every-row/">
                  <Img
                    fluid={Article_2.childImageSharp.fluid}
                    className={landing_article.article_image}
                    alt="Article-2"
                  />
                  <div className={landing_article.article_title}>
                    Sienna 2021, the view from every row
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        ) : (
          <Swiper
            className={landing_article.slider}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              bulletClass: `swiper-pagination-bullet ${landing_article.bullet}`,
              bulletActiveClass: `swiper-pagination-bullet-active ${landing_article.active_bullet}`,
              clickable: false,
            }}
            onPaginationRender={(swiper, paginationEl) => {
              paginationEl.classList.add(landing_article.slide_pagination)
            }}
            onSlideChange={swiper => {
              setActiveSlide(swiper.activeIndex)
            }}
            onSwiper={swiper => {
              setActiveSlide(swiper.activeIndex)
            }}
          >
            <SwiperSlide>
              <div
                className={
                  activeSlide === 0
                    ? `${landing_article.slide_active} ${landing_article.article}`
                    : landing_article.article
                }
              >
                <Link onClick={() =>
                    window.dataLayer.push({
                      event: 'gtm_bx',
                      eventAction:
                        'toyota sienna 2021 - home - article - family',
                      eventLabel: ``,
                    })
                  } to="/the-hardest-working-family-member/">
                  <Img
                    fluid={Article_1.childImageSharp.fluid}
                    className={landing_article.article_image}
                    alt="Article-1"
                  />
                  <div className={landing_article.article_title}>
                    The hardest working family member
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={
                  activeSlide === 1
                    ? `${landing_article.slide_active} ${landing_article.article}`
                    : landing_article.article
                }
              >
                <Link onClick={() =>
                    window.dataLayer.push({
                      event: 'gtm_bx',
                      eventAction:
                        'toyota sienna 2021 - home - article - sienna',
                      eventLabel: ``,
                    })
                  } to="/sienna-2021-the-view-from-every-row/">
                  <Img
                    fluid={Article_2.childImageSharp.fluid}
                    className={landing_article.article_image}
                    alt="Article-2"
                  />
                  <div className={landing_article.article_title}>
                    Sienna 2021, the view from every row
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default LandingArticle
