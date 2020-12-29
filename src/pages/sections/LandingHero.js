import React, { useEffect } from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import { graphql, useStaticQuery } from 'gatsby'
import $ from 'jquery'

import landing_hero from './css/landing_hero.module.css'
import videoSrc from '../../videos/video.mp4'

const LandingHero = () => {
  const { poster } = useStaticQuery(graphql`
      {
        poster: file(relativePath: { eq: "captura-de-pantalla.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, maxHeight: 575) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `),
    isBrowser = typeof window !== 'undefined',
    fullScreenToggle = () => {
      $(`.${landing_hero.hero_video}`).toggleClass('fullscreen')
    }
  useEffect(() => {
    $(`.${landing_hero.hero_video}`).height(
      $(`.${landing_hero.hero_video}`).find('video').height()
    )
    $(`.${landing_hero.hero_video}`).find('video').css({ position: `fixed` })
    $(window).on('load scroll', function () {
      let scrolled = $(this).scrollTop()
      // parallax (25% scroll rate)
      $(`.${landing_hero.hero_video}`).css(
        'transform',
        'translate3d(0, ' + scrolled * 0.25 + 'px, 0)'
      )
      $(`.rh5v-Fullscreen_component`).css(
        'transform',
        'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'
      )
    })
    $('.rh5v-Fullscreen_button').click(fullScreenToggle)
  }, [])
  return (
    <section className={landing_hero.hero_image}>
      <div className={landing_hero.features_image}>
        {isBrowser && (
          <Video
            className={landing_hero.hero_video}
            poster={poster.childImageSharp.fluid.src}
            width="1440"
            height="579"
            preload="metadata"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={['Fullscreen']}
          >
            <source src={videoSrc} type="video/mp4" />
          </Video>
        )}
      </div>
    </section>
  )
}

export default LandingHero
