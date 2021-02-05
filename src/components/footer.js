import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import footer from '../css/footer.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    {
      footerImgXl: file(relativePath: { eq: "footer-lg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgMd: file(relativePath: { eq: "footer-md.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgSm: file(relativePath: { eq: "footer-fab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgXs: file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toyotaLogo: file(relativePath: { eq: "toyota-logo-footer.png" }) {
        childImageSharp {
          fixed(width: 75, height: 62) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className={footer.at_footer}>
      <div className={footer.wrapper}>
        <Img
          fluid={data.footerImgXl.childImageSharp.fluid}
          alt="footerImgXl"
          className="d-none d-xl-block"
        />
        <Img
          fluid={data.footerImgMd.childImageSharp.fluid}
          alt="footerImgMd"
          className="d-none d-md-block d-xl-none"
        />
        <Img
          fluid={data.footerImgSm.childImageSharp.fluid}
          alt="footerImgSm"
          className="d-none d-sm-block d-md-none"
        />
        <Img
          fluid={data.footerImgXs.childImageSharp.fluid}
          alt="footerImgXs"
          className="d-sm-none"
        />
        <div className={footer.ad_box}>
          <div className={`container-xl px-xl-0 ${footer.ad_container}`}>
            <div className={footer.ad_inner}>
              <h4 className={footer.ad_heading_big}>
                <span>Get </span>
                <span>yours </span>
                <strong>today</strong>
              </h4>
              <h5 className={footer.ad_heading_I}>
                Become VanProud with your{' '}
                <strong>very own Toyota Sienna.</strong>
              </h5>
              <button
                onClick={() => {
                  window.dataLayer.push({
                    event: 'gtm_bx',
                    eventAction: 'toyota sienna 2021 - exit - toyota',
                    eventLabel: 'build and price',
                  })
                  window.location.href = `//toyota.ca`
                }}
                type="button"
                className={`btn btn-primary ${footer.ad_button}`}
              >
                BUILD &amp; PRICE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
