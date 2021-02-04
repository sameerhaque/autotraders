// Node components
import React, { useEffect } from 'react'

// Project components
import Layout from '../components/layout'
import LandingHero from './sections/LandingHero'
import LandingCTA from './sections/LandingCta'
import LandingArticle from './sections/LandingArticle'
import LandingFeatures from './sections/LandingFeatures'
import StickyAd from '../components/sticky-ad'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  useEffect(() => {
    if (
      window.dataLayer[window.dataLayer.length - 1].pageType !==
      '/brand-experience/toyota-sienna/2021/home/en'
    ) {
      window.dataLayer.push({
        event: 'gtm_bx_virtual_page',
        pageType: '/brand-experience/toyota-sienna/2021/home/en',
        sponsoredContentCampaign: 'toyota sienna - 2021',
      })
    }
  }, [])
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
