import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import $ from "jquery"
import Img from "gatsby-image/withIEPolyfill"

import Ad from "../css/ad.module.css"

const StickyAd = () => {
  const { AdImage, toyotaLogo } = useStaticQuery(graphql`
      {
        AdImage: file(relativePath: { eq: "toyota-fixed-banner.jpg" }) {
          childImageSharp {
            fixed(width: 194, height: 268) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        toyotaLogo: file(relativePath: { eq: "toyota-fixed-logo.png" }) {
          childImageSharp {
            fixed(width: 75, height: 62) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    dismissAd = () => {
      $(`.${Ad.wrapper}`).removeClass(Ad.showAd)
    }
  useEffect(() => {
    setTimeout(() => {
      $(`.${Ad.wrapper}`).addClass(Ad.showAd)
    }, 500)
  }, [])
  return (
    <div className={Ad.wrapper}>
      <div className={Ad.holder}>
        <div className={Ad.imageHolder}>
          <Img fixed={AdImage.childImageSharp.fixed} alt="Ad-Image" />
        </div>
        <div className={Ad.contentOuter}>
          <div className={Ad.contentInner}>
            <Img fixed={toyotaLogo.childImageSharp.fixed} alt="Toyota" />
            <button
              onClick={() => (window.location.href = `//toyota.ca`)}
              type="button"
              className={Ad.buildButton}
            >
              Build Your Own
            </button>
          </div>
        </div>
        <button type="button" onClick={dismissAd} className={Ad.dismissButton}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="//www.w3.org/2000/svg"
          >
            <path
              d="M14.8239 13.7843L8.44684 7.40741L14.7004 1.15388C14.9363 0.917889 14.9363 0.535587 14.7004 0.299612C14.4644 0.0636746 14.0818 0.0636746 13.8461 0.299612L7.59256 6.55312L1.21543 0.176089C0.980644 -0.0586963 0.59976 -0.0586963 0.364971 0.176089C0.129909 0.410874 0.129909 0.792024 0.364971 1.02681L6.74198 7.40374L0.176883 13.9688C-0.0589609 14.2048 -0.0589609 14.5871 0.176883 14.823C0.412843 15.059 0.795327 15.059 1.03129 14.823L7.59629 8.25804L13.9735 14.6351C14.2083 14.8699 14.5888 14.8699 14.8239 14.6351C15.0587 14.4003 15.0587 14.0192 14.8239 13.7843H14.8239Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default StickyAd
