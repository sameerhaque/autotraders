import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import $ from "jquery"
import Img from "gatsby-image/withIEPolyfill"

import Family from "../css/families.module.css"

const Families = () => {
  const { user1, user2, user3 } = useStaticQuery(graphql`
    {
      user1: file(relativePath: { eq: "user-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 208, maxHeight: 208) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      user2: file(relativePath: { eq: "user-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 208, maxHeight: 208) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      user3: file(relativePath: { eq: "user-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 208, maxHeight: 208) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useEffect(() => {
    $(`.${Family.families_button}`).hover(
      function () {
        $(`.${Family.families_button}`).removeClass(Family.active_button)
        $(this).addClass(`${Family.active_button} ${Family.hover_button}`)
      },
      function () {
        $(this).removeClass(`${Family.active_button} ${Family.hover_button}`)
        $(`.${Family.families_button}:nth-child(even)`).addClass(
          Family.active_button
        )
      }
    )
  }, [])
  return (
    <div className={Family.families_block}>
      <div
        className={`btn-group ${Family.families_inner_block}`}
        aria-label="Basic example"
        role="group"
      >
        <button type="button" className={Family.families_button}>
          <Img
            fluid={user1.childImageSharp.fluid}
            alt="families"
            objectFit="contain"
            objectPosition="50% 50%"
          />
          <div className={Family.button_hover_area}>
            <div className={Family.button_hover_area_inner}>
              <h5>
                The <strong>Smithersons</strong>
              </h5>
              <h6>See their reasons</h6>
            </div>
          </div>
        </button>
        <button
          type="button"
          className={`${Family.families_button} ${Family.active_button}`}
        >
          <Img
            fluid={user2.childImageSharp.fluid}
            alt="families"
            objectFit="contain"
            objectPosition="50% 50%"
          />
          <div className={Family.button_hover_area}>
            <div className={Family.button_hover_area_inner}>
              <h5>
                The <strong>Smithersons</strong>
              </h5>
              <h6>See their reasons</h6>
            </div>
          </div>
        </button>
        <button type="button" className={Family.families_button}>
          <Img
            fluid={user3.childImageSharp.fluid}
            alt="families"
            objectFit="contain"
            objectPosition="50% 50%"
          />
          <div className={Family.button_hover_area}>
            <div className={Family.button_hover_area_inner}>
              <h5>
                The <strong>Smithersons</strong>
              </h5>
              <h6>See their reasons</h6>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Families
