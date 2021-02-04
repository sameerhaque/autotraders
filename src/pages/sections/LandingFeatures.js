import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { graphql, useStaticQuery } from 'gatsby'
import { Row, Col, Modal } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'

import landing_features from './css/landing_features.module.css'

import Close from '../../components/icons/close'
import Left from '../../components/icons/left'
import Right from '../../components/icons/right'

const LandingFeatures = () => {
  const {
      featureCar,
      featureCarMd,
      featureCarXs,
      featureI,
      featureII,
      featureIII,
      featureIV,
      featureV,
    } = useStaticQuery(graphql`
      {
        featureCar: file(relativePath: { eq: "feature-car.png" }) {
          childImageSharp {
            fluid(maxWidth: 789, maxHeight: 551) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featureCarMd: file(relativePath: { eq: "feature-car-md.png" }) {
          childImageSharp {
            fluid(maxWidth: 964, maxHeight: 486) {
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
        featureII: file(relativePath: { eq: "feature-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 385, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featureIII: file(relativePath: { eq: "feature-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 385, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featureIV: file(relativePath: { eq: "feature-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 385, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featureV: file(relativePath: { eq: "feature-5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 385, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `),
    featureData = [
      {
        featTitle: 'JBL® Premium Audio System',
        featImg: featureI,
        featContent: `<p>Standard on the Limited and optional on the XSE, the <strong>12-speaker JBL® Premium Audio system can turn the Sienna’s interior into a concert theatre.</strong> The system includes a subwoofer and 1,200-watt amplifier, plus Clari-Fi® digital restoration technology. Coupled with the standard Apple CarPlayTM and Android AutoTM, and available SiriusXM® with 3-month All-Access trial, you can enjoy your music with crystal clarity.</p>`,
      },
      {
        featTitle: 'Digital Display Rearview Mirror',
        featImg: featureII,
        featContent: `<p>With the Sienna filled with passengers or cargo, it could be difficult to see out of the rear-view mirror. But the solution is <strong>Toyota’s Digital Display Rearview Mirror; simply flip the standard mirror up to turn it into a digital screen,</strong> with the image feeding from the rear camera. Now you can see everything behind you, making the drive safer regardless of what you’re carrying.</p>`,
      },
      {
        featTitle: 'Hybrid powertrain is standard',
        featImg: featureIII,
        featContent: `<p>No other minivan comes standard with a hybrid powertrain across the lineup. <strong>A 2.5-litre four-cylinder gasoline engine and two electric motors work together for front-drive versions, combining for 245 horsepower.</strong> For all-wheel-drive models, a third electric motor in the rear activates when wheel slip is detected for on-demand AWD.</p>`,
      },
      {
        featTitle: 'Power Sliding Doors with Kick Sensors',
        featImg: featureIV,
        featContent: `<p>With an armload of groceries or even a child, it could be cumbersome to open a sliding door. But with the Sienna, not only do the side doors slide automatically, but now you don’t even have to touch them. <strong>With the proximity key fob in your pocket, simply wave your foot under the indicator on the bottom sill, and the door will magically open,</strong> giving you access without having to put anything on the ground. The rear cargo door also has the same features.</p>`,
      },
      {
        featTitle: 'Toyota Safety SenseTM 2.0',
        featImg: featureV,
        featContent: `<p>With the Sienna, you’ll likely be carrying the most precious cargo of all: your family. So every Sienna is equipped with <strong>Toyota Safety SenseTM 2.0</strong>, a suite of features that includes <strong>Pre-Collision System with Pedestrian Detection/Low Light Detection and Bicycle Detection, Full-Speed Range Dynamic Radar Cruise Control, Lane Departure Alert with Lane Trace Assist and Automatic High Beams.</strong></p>`,
      },
    ],
    [show, setShow] = useState(false),
    [featureIndex, setFeatureIndex] = useState(null),
    openFeature = (e, dataIndex) => {
      window.dataLayer.push({
        event: 'gtm_bx',
        eventAction: 'toyota sienna 2021 - home - feature',
        eventLabel: `feature ${dataIndex}`,
      })
      e.currentTarget.classList.add(landing_features.features_hot_spot_active)
      setFeatureIndex(dataIndex)
      setShow(true)
    },
    removeActiveClass = () => {
      $(`.${landing_features.features_hot_spot}`).removeClass(
        landing_features.features_hot_spot_active
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
        $(`.${landing_features.features_hot_spot}`)
          .get(featureData.length - 1)
          .classList.add(landing_features.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex - 1)
        $(`.${landing_features.features_hot_spot}`)
          .get(featureIndex - 2)
          .classList.add(landing_features.features_hot_spot_active)
      }
    },
    nextFeature = () => {
      if (featureIndex === featureData.length) {
        removeActiveClass()
        setFeatureIndex(1)
        $(`.${landing_features.features_hot_spot}`)
          .get(0)
          .classList.add(landing_features.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex + 1)
        $(`.${landing_features.features_hot_spot}`)
          .get(featureIndex)
          .classList.add(landing_features.features_hot_spot_active)
      }
    },
    featureCarLoaded = () => {
      $(`.${landing_features.features_hot_spot}`).addClass(
        landing_features.hot_spot_display
      )
    }
  useEffect(() => {}, [])
  return (
    <React.Fragment>
      <section className={landing_features.hero_features_section}>
        <div className={landing_features.hero_section_container}>
          <Row className="d-none d-md-flex d-xl-none align-items-end">
            <Col md={6}>
              <div className={landing_features.features_content_holder}>
                <h5 className={landing_features.features_content_title}>
                  Features we can’t live without
                </h5>
                <div className={landing_features.features_content_wrapper}>
                  <div className={landing_features.features_content}>
                    <p>
                      Discover the technology and features that makes the Toyota
                      Sienna <strong>ready for any adventure.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-right">
              <button
                type="button"
                onClick={() => {
                  window.dataLayer.push({
                    event: 'gtm_bx',
                    eventAction: 'toyota sienna 2021 - exit - toyota',
                    eventLabel: 'build and price',
                  })
                  window.location.href = `//toyota.ca`
                }}
                className={`btn btn-primary ${landing_features.features_button}`}
              >
                BUILD &amp; PRICE
              </button>
            </Col>
          </Row>
          <div className="d-flex flex-column flex-xl-row">
            <div className="flex-grow-1 my-auto order-2 order-xl-1">
              <div className={`${landing_features.features_wrapper}`}>
                <Img
                  fluid={featureCar.childImageSharp.fluid}
                  alt="featureCar"
                  onLoad={() => featureCarLoaded()}
                  className={`d-none d-xl-block ${landing_features.feature_car}`}
                />
                <Img
                  fluid={featureCarMd.childImageSharp.fluid}
                  alt="featureCarMd"
                  onLoad={() => featureCarLoaded()}
                  className={`d-none d-md-block d-xl-none ${landing_features.feature_car}`}
                />
                <Img
                  fluid={featureCarXs.childImageSharp.fluid}
                  alt="featureCarXs"
                  onLoad={() => featureCarLoaded()}
                  className="d-md-none"
                />
                <button
                  type="button"
                  className={`${landing_features.features_hot_spot} ${landing_features.features_hot_spot_I}`}
                  onClick={e => openFeature(e, 1)}
                  aria-label="Hotspot 1"
                />
                <button
                  type="button"
                  className={`${landing_features.features_hot_spot} ${landing_features.features_hot_spot_II}`}
                  onClick={e => openFeature(e, 2)}
                  aria-label="Hotspot 2"
                />
                <button
                  type="button"
                  className={`${landing_features.features_hot_spot} ${landing_features.features_hot_spot_III}`}
                  onClick={e => openFeature(e, 3)}
                  aria-label="Hotspot 3"
                />
                <button
                  type="button"
                  className={`${landing_features.features_hot_spot} ${landing_features.features_hot_spot_IV}`}
                  onClick={e => openFeature(e, 4)}
                  aria-label="Hotspot 4"
                />
                <button
                  type="button"
                  className={`${landing_features.features_hot_spot} ${landing_features.features_hot_spot_V}`}
                  onClick={e => openFeature(e, 5)}
                  aria-label="Hotspot 5"
                />
              </div>
            </div>
            <div className="flex-shrink-1 d-block d-md-none d-xl-block mt-auto order-1 order-xl-2 text-center text-xl-left">
              <div className={landing_features.features_content_holder}>
                <h5 className={landing_features.features_content_title}>
                  Features we can’t live without
                </h5>
                <div className={landing_features.features_content_wrapper}>
                  <div
                    className={`${landing_features.features_content} d-none d-xl-block`}
                  >
                    <p>
                      Discover the technology and features that makes the Toyota
                      Sienna <strong>ready for any adventure.</strong>
                    </p>
                  </div>
                  <div
                    className={`${landing_features.features_content} d-xl-none`}
                  >
                    <p>
                      Discover the technology and features that makes the Toyota
                      Sienna <strong>ready for any adventure.</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      window.dataLayer.push({
                        event: 'gtm_bx',
                        eventAction: 'toyota sienna 2021 - exit - toyota',
                        eventLabel: 'build and price',
                      })
                      window.location.href = `//toyota.ca`
                    }}
                    className={`btn btn-primary ${landing_features.features_button} d-none d-xl-inline-block`}
                  >
                    BUILD &amp; PRICE
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-grow-1 d-md-none order-3 text-center pt-5">
              <button
                type="button"
                onClick={() => {
                  window.dataLayer.push({
                    event: 'gtm_bx',
                    eventAction: 'toyota sienna 2021 - exit - toyota',
                    eventLabel: 'build and price',
                  })
                  window.location.href = `//toyota.ca`
                }}
                className={`btn btn-primary ${landing_features.features_button}`}
              >
                BUILD &amp; PRICE
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => closeFeature()}
        backdrop="static"
        keyboard={false}
        className={`fixed-left ${landing_features.features_modal}`}
        backdropClassName="d-none"
        contentClassName={landing_features.features_modal_content}
        dialogClassName={`modal-dialog-aside ${landing_features.features_dialog}`}
        aria-labelledby="features-modal"
      >
        <Modal.Header className={landing_features.features_modal_header}>
          <div className={landing_features.feature_dismiss}>
            <button
              type="button"
              className={landing_features.roundButton}
              onClick={() => closeFeature()}
            >
              <Close />
            </button>
          </div>
          <div className={landing_features.features_title_wrapper}>
            <h4 className={landing_features.features_modal_title}>
              {featureIndex !== null && featureData[featureIndex - 1].featTitle}
            </h4>
          </div>
        </Modal.Header>
        <Modal.Body className={landing_features.features_modal_body}>
          {featureIndex !== null && (
            <>
              <img
                src={
                  featureData[featureIndex - 1].featImg.childImageSharp.fluid
                    .src
                }
                alt="featImg"
                className={landing_features.featImg}
              />
              <div>
                {ReactHtmlParser(featureData[featureIndex - 1].featContent)}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={landing_features.features_modal_footer}>
          <button
            className={`${landing_features.roundButton} mr-2`}
            onClick={previousFeature}
          >
            <Left />
          </button>
          <button
            className={`${landing_features.roundButton} mx-2`}
            onClick={nextFeature}
          >
            <Right />
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default LandingFeatures
