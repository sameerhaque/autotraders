// Node components
import React from 'react'

// Project components
import Layout from '../components/layout'
import LandingHero from './sections/LandingHero'
import LandingCTA from './sections/LandingCta'
import LandingArticle from './sections/LandingArticle'
import LandingFeatures from './sections/LandingFeatures'
import StickyAd from '../components/sticky-ad'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <LandingHero />
      <LandingCTA />
      <LandingArticle />
      <LandingFeatures />
      <StickyAd />
    </Layout>
  )
}

export default IndexPage
