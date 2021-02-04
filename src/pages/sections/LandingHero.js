import React, { useEffect, useState } from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import { graphql, useStaticQuery } from 'gatsby'
import $ from 'jquery'

import Down from '../../components/icons/down'

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
    [playedPer, setPlayedPer] = useState(0),
    isBrowser = typeof window !== 'undefined',
    scrollDown = () => {
      $('html, body').animate(
        {
          scrollTop:
            $(`.${landing_hero.hero_image}`).next().offset().top - $(`.${landing_hero.hero_image}`).offset().top,
        },
        200
      )
    },
    fullScreenToggle = () => {
      $(`.${landing_hero.hero_video}`).toggleClass('fullscreen')
    }
  useEffect(() => {
    const videoElement = $(`.${landing_hero.hero_video}`).find('video').get(0)
    videoElement.play()
    videoElement.addEventListener('playing', _ => {
      let fireCount = 0
      window.dataLayer.push({
        event: 'gtm_bx',
        eventAction: 'toyota sienna 2021 - video',
        eventLabel: `play`,
      })
      setInterval(() => {
        const nowPlayed = Math.ceil(
          (videoElement.currentTime / videoElement.duration) * 100
        )
        switch (nowPlayed) {
          case 25:
          case 50:
          case 75:
          case 90:
          case 100:
            if (fireCount === 0 && nowPlayed > playedPer) {
              fireCount++
              setPlayedPer(nowPlayed)
              window.dataLayer.push({
                event: 'gtm_bx',
                eventAction: 'toyota sienna 2021 - video',
                eventLabel: `{{${nowPlayed}}}`,
              })
            }
            break
          default:
            fireCount = 0
        }
      }, 1000)
    })
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
  }, [playedPer])
  return (
    <section className={landing_hero.hero_image}>
      <div className={landing_hero.features_image}>
        {isBrowser && (
          <>
            <Video
              className={landing_hero.hero_video}
              poster={poster.childImageSharp.fluid.src}
              width="1440"
              height="579"
              preload="metadata"
              loop={true}
              muted={true}
              controls={['Fullscreen']}
            >
              <source src={videoSrc} type="video/mp4" />
            </Video>
            <button
              type="button"
              className={landing_hero.hero_button}
              onClick={scrollDown}
            >
              <Down />
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default LandingHero
