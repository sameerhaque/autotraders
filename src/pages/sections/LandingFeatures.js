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
      }
    `),
    featureData = [
      {
        featTitle: 'A versatile family mover packed with style and features',
        featImg: featureI,
        featContent: `<p>Take seven or eight passengers in comfort or fold the seats for a huge cargo area; the 2021 Toyota Sienna is the do-it-all vehicle to fit your family’s busy lifestyle. With a standard hybrid powertrain, available all-wheel drive and loads of features, the Sienna transports both people and their stuff safely and efficiently.</p>`,
      },
      {
        featTitle: 'Feature 2',
        featImg: featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p>`,
      },
      {
        featTitle: 'Feature 3',
        featImg: featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
      {
        featTitle: 'Feature 4',
        featImg: featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
    ],
    [show, setShow] = useState(false),
    [featureIndex, setFeatureIndex] = useState(null),
    openFeature = (e, dataIndex) => {
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
                      Sienna ready for any adventure.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-right">
              <button
                type="button"
                onClick={() => (window.location.href = `//toyota.ca`)}
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
                      Sienna ready for any adventure.
                    </p>
                  </div>
                  <div
                    className={`${landing_features.features_content} d-xl-none`}
                  >
                    <p>
                      Discover the technology and features that makes the Toyota
                      Sienna ready for any adventure.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => (window.location.href = `//toyota.ca`)}
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
                onClick={() => (window.location.href = `//toyota.ca`)}
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
