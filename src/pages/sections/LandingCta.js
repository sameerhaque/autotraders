import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'

import landing_cta from './css/landing_cta.module.css'

import stringMaxWord from '../../components/functions/stringMaxWord'
import Reasons from '../../components/reasons'
import Hash from '../../components/icons/hash'
import HashMd from '../../components/icons/hash-md'
import HashXl from '../../components/icons/hash-xl'
import Quote from '../../components/icons/quote'

SwiperCore.use([Autoplay, Pagination])
const LandingCTA = () => {
  const {
      reason3Md,
      reason3Sm,
      reason3,
      reason7Md,
      reason7Sm,
      reason7,
      reason10Md,
      reason10Sm,
      reason10,
    } = useStaticQuery(graphql`
      {
        reason3Md: file(relativePath: { eq: "reason-3-home-md.jpg" }) {
          childImageSharp {
            fixed(width: 1110, height: 385) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason3Sm: file(relativePath: { eq: "reason-3-home-sm.jpg" }) {
          childImageSharp {
            fixed(width: 666, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason3: file(relativePath: { eq: "reason-3-home.jpg" }) {
          childImageSharp {
            fixed(width: 333, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason7Md: file(relativePath: { eq: "reason-7-home-md.jpg" }) {
          childImageSharp {
            fixed(width: 1110, height: 385) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason7Sm: file(relativePath: { eq: "reason-7-home-sm.jpg" }) {
          childImageSharp {
            fixed(width: 666, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason7: file(relativePath: { eq: "reason-7-home.jpg" }) {
          childImageSharp {
            fixed(width: 333, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason10Md: file(relativePath: { eq: "reason-10-home-md.jpg" }) {
          childImageSharp {
            fixed(width: 1110, height: 385) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason10Sm: file(relativePath: { eq: "reason-10-home-sm.jpg" }) {
          childImageSharp {
            fixed(width: 666, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reason10: file(relativePath: { eq: "reason-10-home.jpg" }) {
          childImageSharp {
            fixed(width: 333, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    isBrowser = typeof window !== undefined,
    [sliderSize, setSetSliderSize] = useState(null),
    sliderReasons = [3, 7, 10],
    setSliderWidth = useCallback(() => {
      if ($(window).outerWidth() >= 1200) {
        setSetSliderSize($(`.${landing_cta.all_reason}`).width())
      } else if ($(window).outerWidth() >= 768) {
        setSetSliderSize($(window).width() - 60)
      } else {
        setSetSliderSize($(window).width() - 40)
      }
    }, []),
    know_more_text =
      'People love their Toyota Sienna. Find out the reasons why they’re so proud to own one.'
  sliderReasons.forEach(ReasonId => {
    switch (ReasonId) {
      case 3:
        Reasons[ReasonId - 1].slideImageMd = reason3Md
        Reasons[ReasonId - 1].slideImageSm = reason3Sm
        Reasons[ReasonId - 1].slideImage = reason3
        break
      case 7:
        Reasons[ReasonId - 1].slideImageMd = reason7Md
        Reasons[ReasonId - 1].slideImageSm = reason7Sm
        Reasons[ReasonId - 1].slideImage = reason7
        break
      case 10:
        Reasons[ReasonId - 1].slideImageMd = reason10Md
        Reasons[ReasonId - 1].slideImageSm = reason10Sm
        Reasons[ReasonId - 1].slideImage = reason10
        break
      default:
    }
  })
  useEffect(() => {
    if (isBrowser) {
      setSliderWidth()
      $(window).resize(() => {
        setSliderWidth()
      })
    }
  }, [isBrowser, setSliderWidth])
  return (
    <section className={landing_cta.section}>
      <div className={landing_cta.wrapper}>
        <Hash className={landing_cta.hash} />
        <HashMd className={landing_cta.hash} />
        <HashXl className={landing_cta.hash} />
        <div className="container px-xl-0">
          <Row className="justify-content-between align-items-end">
            <Col md={6}>
              <div className={landing_cta.tag}>
                <p>
                  TOYOTA <strong>SIENNA</strong>
                </p>
                <h2 className={landing_cta.heading_light}>Makes Us</h2>
                <h2 className={landing_cta.heading_bold}>VanProud</h2>
              </div>
            </Col>
            <Col md={6}>
              <div className={landing_cta.know_more}>
                <p>{stringMaxWord(know_more_text, 18)}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-xl px-xl-0">
          <Row>
            <Col xs={12}>
              <div className={landing_cta.all_reason}>
                <Swiper
                  className={landing_cta.slider_wrapper}
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{ clickable: true }}
                  updateOnWindowResize={true}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                  }}
                  onPaginationRender={(swiper, paginationEl) => {
                    paginationEl.classList.add(landing_cta.slider_pagination)
                  }}
                  width={sliderSize}
                >
                  {[3, 7, 10].map(ReasonId => {
                    return (
                      <SwiperSlide key={ReasonId}>
                        <Link
                          to="/20-reasons-to-believe/"
                          className={landing_cta.slide_holder}
                          onClick={() =>
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction:
                                'toyota sienna 2021 - home - card - click',
                              eventLabel: `card ${ReasonId}`,
                            })
                          }
                        >
                          <Img
                            fixed={Reasons[ReasonId - 1].slideImageMd.childImageSharp.fixed}
                            alt="slideImageMd"
                            className={`d-none d-md-block ${landing_cta.slide_image}`}
                          />
                          <Img
                            fixed={Reasons[ReasonId - 1].slideImageSm.childImageSharp.fixed}
                            alt="slideImageSm"
                            className={`d-none d-sm-block d-md-none w-100 ${landing_cta.slide_image}`}
                          />
                          <Img
                            fixed={Reasons[ReasonId - 1].slideImage.childImageSharp.fixed}
                            alt="slideImage"
                            className={`d-sm-none w-100 ${landing_cta.slide_image}`}
                          />
                          <div className={landing_cta.slide_content}>
                            <div className={landing_cta.slide_content_inner}>
                              <Quote className={landing_cta.quote} />
                              <div className={landing_cta.slide_content_holder}>
                                <p className={landing_cta.quote_index}>
                                  {`Reason #${ReasonId}`}
                                </p>
                                <h4 className={landing_cta.quote_heading}>
                                  {ReactHtmlParser(
                                    Reasons[ReasonId - 1].reasonBigHeading
                                  )}
                                </h4>
                                <p className={landing_cta.location}>
                                  {ReactHtmlParser(
                                    Reasons[ReasonId - 1].reasonBy
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <Link
                  to="/20-reasons-to-believe/"
                  onClick={() => {
                    window.dataLayer.push({
                      event: 'gtm_bx',
                      eventAction:
                        'toyota sienna 2021 - home - see all reasons',
                      eventLabel: '',
                    })
                  }}
                  className={`btn btn-primary ${landing_cta.reasons_button}`}
                >
                  SEE ALL REASONS
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default LandingCTA
