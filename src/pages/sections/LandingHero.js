import React from 'react'
import $ from 'jquery'

import Down from '../../components/icons/down'

import landing_hero from './css/landing_hero.module.css'

const LandingHero = () => {
  const isBrowser = typeof window !== 'undefined',
    scrollDown = () => {
      $('html, body').animate(
        {
          scrollTop:
            $(`.${landing_hero.hero_image}`).next().offset().top -
            $(`.${landing_hero.hero_image}`).offset().top,
        },
        200
      )
    }
  return (
    <section className={landing_hero.hero_image}>
      <div className={landing_hero.features_image}>
        {isBrowser && (
          <>
            <iframe
              className={landing_hero.iframe}
              title="Sienna 2021"
              src="https://player.vimeo.com/video/508977604?autoplay=1&muted=1&loop=1&autopause=0&controls=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen={true}
            />
            <button
              type="button"
              className={`${landing_hero.hero_button} d-none`}
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
