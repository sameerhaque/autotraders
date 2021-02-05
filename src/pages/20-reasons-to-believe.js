import React, { useCallback, useEffect, useState } from 'react'
import { navigate, Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'
import SwiperCore, { EffectFlip, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Close from '../components/icons/close'
import Left from '../components/icons/left'
import Right from '../components/icons/right'
import Flip from '../components/icons/flip'
import Open from '../components/icons/open'
import Quote from '../components/icons/quote'
import Reasons from '../components/reasons'

import card from '../css/card.module.css'
import navigation from '../css/navigation.module.css'

SwiperCore.use([EffectFlip, EffectCoverflow, Pagination])
export default () => {
  const {
      breadcrumb_section,
      breadcrumb_back_button,
      breadcrumb_content,
      breadcrumb_button,
      reason_slider_section,
      reason_slider_bg,
      reason_slider_content_area,
      reason_slider_content_top,
      reason_slider_content_below,
      reason_slider_tablet,
      reason_slider_mobile,
      reason_slider,
      reason_slider_pagination,
      reason_slider_pagination_bullet,
      reason_slider_pagination_active_bullet,
      reason_card_holder,
      reason_card_image,
      reason_card_inner,
      reason_card_inner_content_area,
      reason_slider_modal_open,
      reason_modal_area,
      reason_modal_wrapper,
      reason_modal_dismiss,
      reason_modal_slider,
      reason_modal_pagination,
      reason_modal_pagination_bullet,
      reason_modal_pagination_active_bullet,
      reason_modal_title,
      reason_modal_author,
      reason_modal_feat_image,
      reason_modal_content,
      reason_card_button,
      reason_card_button_label,
      reason_card_button_element,
      reason_card_button_icon,
      reason_card_inner_content,
      reason_card_inner_content_label,
      reason_card_inner_content_title,
      reason_content_wrapper,
      reason_content_holder,
      reason_content_quote,
      reason_navigation,
      reason_content_wrap,
      reason_content,
      reason_box_heading,
      reason_box_author,
      reason_flip_slider_col,
      reason_flip_slider,
      reason_slide_holder,
      reason_slide_loader,
      reason_slide_master,
      reason_slide_review,
      reason_review_header,
      reason_review_avatar,
      reason_review_avatar_image,
      reason_review_title,
      reason_review_body,
      reason_review_image,
      reason_review_content,
      button_dark,
      desktop_flip_button,
      flip_button,
      flip_label,
      main_heading,
      reason_roundButton,
      prev,
      next,
      view_all_reasons,
      reason_section_title,
      bold_title,
      reason_card_wrap,
      reason_card,
      reason_card_img,
      reason_card1,
      reason_card2,
      reason_card3,
      reason_card4,
      reason_card_content,
      reason_card_label_index,
      reason_card_title,
      reason_card_title_width,
      reason_card_city,
      reason_card_city2,
    } = card,
    {
      userAvatar,
      heroBgXl,
      heroBgMd,
      heroBg,
      reason1,
      reason2,
      reason3,
      reason4,
      reason5,
      reason6,
      reason7,
      reason8,
      reason9,
      reason10,
      reason11,
      reason12,
      reason13,
      reason14,
      reason15,
      reason16,
      reason17,
      reason18,
      reason19,
      reason20,
      reasonImage1,
      reasonImage2,
      reasonImage3,
      reasonImage4,
      reasonImage5,
      reasonImage6,
      reasonImage7,
      reasonImage8,
      reasonImage9,
      reasonImage10,
      reasonImage11,
      reasonImage12,
      reasonImage13,
      reasonImage14,
      reasonImage15,
      reasonImage16,
      reasonImage17,
      reasonImage18,
      reasonImage19,
      reasonImage20,
      reasonFeatImage1,
      reasonFeatImage2,
      reasonFeatImage3,
      reasonFeatImage4,
      reasonFeatImage5,
      reasonFeatImage6,
      reasonFeatImage7,
      reasonFeatImage8,
      reasonFeatImage9,
      reasonFeatImage10,
      reasonFeatImage11,
      reasonFeatImage12,
      reasonFeatImage13,
      reasonFeatImage14,
      reasonFeatImage15,
      reasonFeatImage16,
      reasonFeatImage17,
      reasonFeatImage18,
      reasonFeatImage19,
      reasonFeatImage20,
      reasonBoxImage1,
      reasonBoxImage2,
      reasonBoxImage3,
      reasonBoxImage4,
      reasonBoxImage5,
      reasonBoxImage6,
      reasonBoxImage7,
      reasonBoxImage8,
      reasonBoxImage9,
      reasonBoxImage10,
      reasonBoxImage11,
      reasonBoxImage12,
      reasonBoxImage13,
      reasonBoxImage14,
      reasonBoxImage15,
      reasonBoxImage16,
      reasonBoxImage17,
      reasonBoxImage18,
      reasonBoxImage19,
      reasonBoxImage20,
      userImage,
      prevImage,
      nextImage,
    } = useStaticQuery(graphql`
      {
        userAvatar: file(relativePath: { eq: "user-avatar.png" }) {
          childImageSharp {
            fixed(width: 190, height: 190) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heroBgXl: file(relativePath: { eq: "reason-1-bg.jpg" }) {
          childImageSharp {
            fixed(width: 869, height: 740) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heroBgMd: file(relativePath: { eq: "reason-1-bg-md.jpg" }) {
          childImageSharp {
            fixed(width: 1024, height: 433) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heroBg: file(relativePath: { eq: "reason-1-bg-xs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 750, maxHeight: 903) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason1: file(relativePath: { eq: "reason-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage1: file(relativePath: { eq: "reason-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 434, maxHeight: 598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage1: file(relativePath: { eq: "reason-1-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage1: file(relativePath: { eq: "reason-1-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason2: file(relativePath: { eq: "reason-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage2: file(relativePath: { eq: "reason-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage2: file(relativePath: { eq: "reason-2-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage2: file(relativePath: { eq: "reason-2-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason3: file(relativePath: { eq: "reason-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage3: file(relativePath: { eq: "reason-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage3: file(relativePath: { eq: "reason-3-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage3: file(relativePath: { eq: "reason-3-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason4: file(relativePath: { eq: "reason-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage4: file(relativePath: { eq: "reason-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage4: file(relativePath: { eq: "reason-4-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage4: file(relativePath: { eq: "reason-4-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason5: file(relativePath: { eq: "reason-5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage5: file(relativePath: { eq: "reason-5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage5: file(relativePath: { eq: "reason-5-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage5: file(relativePath: { eq: "reason-5-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason6: file(relativePath: { eq: "reason-6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage6: file(relativePath: { eq: "reason-6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage6: file(relativePath: { eq: "reason-6-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage6: file(relativePath: { eq: "reason-6-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason7: file(relativePath: { eq: "reason-7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage7: file(relativePath: { eq: "reason-7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage7: file(relativePath: { eq: "reason-7-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage7: file(relativePath: { eq: "reason-7-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason8: file(relativePath: { eq: "reason-8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage8: file(relativePath: { eq: "reason-8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage8: file(relativePath: { eq: "reason-8-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage8: file(relativePath: { eq: "reason-8-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason9: file(relativePath: { eq: "reason-9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage9: file(relativePath: { eq: "reason-9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage9: file(relativePath: { eq: "reason-9-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage9: file(relativePath: { eq: "reason-9-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason10: file(relativePath: { eq: "reason-10.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage10: file(relativePath: { eq: "reason-10.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage10: file(relativePath: { eq: "reason-10-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage10: file(relativePath: { eq: "reason-10-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason11: file(relativePath: { eq: "reason-11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage11: file(relativePath: { eq: "reason-11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 434, maxHeight: 598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage11: file(relativePath: { eq: "reason-11-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage11: file(relativePath: { eq: "reason-11-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason12: file(relativePath: { eq: "reason-12.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage12: file(relativePath: { eq: "reason-12.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage12: file(relativePath: { eq: "reason-12-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage12: file(relativePath: { eq: "reason-12-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason13: file(relativePath: { eq: "reason-13.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage13: file(relativePath: { eq: "reason-13.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage13: file(relativePath: { eq: "reason-13-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage13: file(relativePath: { eq: "reason-13-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason14: file(relativePath: { eq: "reason-14.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage14: file(relativePath: { eq: "reason-14.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage14: file(relativePath: { eq: "reason-14-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage14: file(relativePath: { eq: "reason-14-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason15: file(relativePath: { eq: "reason-15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage15: file(relativePath: { eq: "reason-15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage15: file(relativePath: { eq: "reason-15-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage15: file(relativePath: { eq: "reason-15-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason16: file(relativePath: { eq: "reason-16.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage16: file(relativePath: { eq: "reason-16.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage16: file(relativePath: { eq: "reason-16-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage16: file(relativePath: { eq: "reason-16-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason17: file(relativePath: { eq: "reason-17.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage17: file(relativePath: { eq: "reason-17.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage17: file(relativePath: { eq: "reason-17-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage17: file(relativePath: { eq: "reason-17-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason18: file(relativePath: { eq: "reason-18.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage18: file(relativePath: { eq: "reason-18.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage18: file(relativePath: { eq: "reason-18-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage18: file(relativePath: { eq: "reason-18-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason19: file(relativePath: { eq: "reason-19.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage19: file(relativePath: { eq: "reason-19.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage19: file(relativePath: { eq: "reason-19-box.jpg" }) {
          childImageSharp {
            fixed(width: 735, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage19: file(relativePath: { eq: "reason-19-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reason20: file(relativePath: { eq: "reason-20.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 547, maxHeight: 708) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonImage20: file(relativePath: { eq: "reason-20.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 261, maxHeight: 359) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reasonBoxImage20: file(relativePath: { eq: "reason-20-box.jpg" }) {
          childImageSharp {
            fixed(width: 356, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reasonFeatImage20: file(relativePath: { eq: "reason-20-flip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 447, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        userImage: file(relativePath: { eq: "neilx90.png" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        prevImage: file(relativePath: { eq: "hardest-working.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 542, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nextImage: file(relativePath: { eq: "sienna-2021.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 543, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `),
    isBrowser = typeof window !== undefined,
    [mode, setMode] = useState('desktop'),
    [sliderSize, setSetSliderSize] = useState(null),
    [activeSlide, setActiveSlide] = useState(null),
    [slider, setSlider] = useState(null),
    [tabletModal, setTabletModal] = useState(false),
    [reasonIndex, setReasonIndex] = useState(0),
    [currentReason, setCurrentReason] = useState(null),
    openTabletModal = (_, index) => {
      setReasonIndex(index)
      setCurrentReason(Reasons[index])
      setTabletModal(true)
      window.dataLayer.push({
        event: 'gtm_bx',
        eventAction: 'toyota sienna 2021 - card - click',
        eventLabel: `card ${('0' + index + 1).slice(-2)}`,
      })
    },
    closeTabletModal = () => {
      setTabletModal(false)
    },
    previousReason = () => {
      $(`.${reason_slide_loader}`).show()
      if (reasonIndex === 0) {
        setReasonIndex(Reasons.length - 1)
        setCurrentReason(Reasons[Reasons.length - 1])
        window.dataLayer.push({
          event: 'gtm_bx',
          eventAction: 'toyota sienna 2021 - card - nav - prev',
          eventLabel: `card ${('0' + Reasons.length).slice(-2)}`,
        })
      } else {
        setReasonIndex(reasonIndex - 1)
        setCurrentReason(Reasons[reasonIndex - 1])
        window.dataLayer.push({
          event: 'gtm_bx',
          eventAction: 'toyota sienna 2021 - card - nav - prev',
          eventLabel: `card ${('0' + reasonIndex).slice(-2)}`,
        })
      }
    },
    nextReason = () => {
      $(`.${reason_slide_loader}`).show()
      if (reasonIndex === Reasons.length - 1) {
        setReasonIndex(0)
        setCurrentReason(Reasons[0])
        window.dataLayer.push({
          event: 'gtm_bx',
          eventAction: 'toyota sienna 2021 - card - nav - next',
          eventLabel: `card 0${1}`,
        })
      } else {
        setReasonIndex(reasonIndex + 1)
        setCurrentReason(Reasons[reasonIndex + 1])
        window.dataLayer.push({
          event: 'gtm_bx',
          eventAction: 'toyota sienna 2021 - card - nav - next',
          eventLabel: `card ${('0' + reasonIndex + 2).slice(-2)}`,
        })
      }
    },
    resetMode = useCallback(() => {
      if ($(window).outerWidth() >= 1200) {
        setMode('desktop')
      } else if ($(window).outerWidth() >= 768) {
        setMode('tablet')
      } else {
        setMode('mobile')
      }
    }, []),
    setSliderWidth = useCallback(() => {
      if ($(window).width() >= 1363) {
        setSetSliderSize($(`.${reason_content_wrap}`).width() / 2 - 30)
      } else if ($(window).width() >= 1200) {
        setSetSliderSize($(`.${reason_content_wrap}`).width() / 2 - 30)
      }
    }, [reason_content_wrap])
  Reasons.forEach((_, index) => {
    Reasons[index].userAvatar = userAvatar
    switch (index + 1) {
      case 1:
        Reasons[index].reasonImage = reason1
        Reasons[index].reasonImageMd = reasonImage1
        Reasons[index].reasonBoxImage = reasonBoxImage1
        Reasons[index].reasonFeatImage = reasonFeatImage1
        break
      case 2:
        Reasons[index].reasonImage = reason2
        Reasons[index].reasonImageMd = reasonImage2
        Reasons[index].reasonBoxImage = reasonBoxImage2
        Reasons[index].reasonFeatImage = reasonFeatImage2
        break
      case 3:
        Reasons[index].reasonImage = reason3
        Reasons[index].reasonImageMd = reasonImage3
        Reasons[index].reasonBoxImage = reasonBoxImage3
        Reasons[index].reasonFeatImage = reasonFeatImage3
        break
      case 4:
        Reasons[index].reasonImage = reason4
        Reasons[index].reasonImageMd = reasonImage4
        Reasons[index].reasonBoxImage = reasonBoxImage4
        Reasons[index].reasonFeatImage = reasonFeatImage4
        break
      case 5:
        Reasons[index].reasonImage = reason5
        Reasons[index].reasonImageMd = reasonImage5
        Reasons[index].reasonBoxImage = reasonBoxImage5
        Reasons[index].reasonFeatImage = reasonFeatImage5
        break
      case 6:
        Reasons[index].reasonImage = reason6
        Reasons[index].reasonImageMd = reasonImage6
        Reasons[index].reasonBoxImage = reasonBoxImage6
        Reasons[index].reasonFeatImage = reasonFeatImage6
        break
      case 7:
        Reasons[index].reasonImage = reason7
        Reasons[index].reasonImageMd = reasonImage7
        Reasons[index].reasonBoxImage = reasonBoxImage7
        Reasons[index].reasonFeatImage = reasonFeatImage7
        break
      case 8:
        Reasons[index].reasonImage = reason8
        Reasons[index].reasonImageMd = reasonImage8
        Reasons[index].reasonBoxImage = reasonBoxImage8
        Reasons[index].reasonFeatImage = reasonFeatImage8
        break
      case 9:
        Reasons[index].reasonImage = reason9
        Reasons[index].reasonImageMd = reasonImage9
        Reasons[index].reasonBoxImage = reasonBoxImage9
        Reasons[index].reasonFeatImage = reasonFeatImage9
        break
      case 10:
        Reasons[index].reasonImage = reason10
        Reasons[index].reasonImageMd = reasonImage10
        Reasons[index].reasonBoxImage = reasonBoxImage10
        Reasons[index].reasonFeatImage = reasonFeatImage10
        break
      case 11:
        Reasons[index].reasonImage = reason11
        Reasons[index].reasonImageMd = reasonImage11
        Reasons[index].reasonBoxImage = reasonBoxImage11
        Reasons[index].reasonFeatImage = reasonFeatImage11
        break
      case 12:
        Reasons[index].reasonImage = reason12
        Reasons[index].reasonImageMd = reasonImage12
        Reasons[index].reasonBoxImage = reasonBoxImage12
        Reasons[index].reasonFeatImage = reasonFeatImage12
        break
      case 13:
        Reasons[index].reasonImage = reason13
        Reasons[index].reasonImageMd = reasonImage13
        Reasons[index].reasonBoxImage = reasonBoxImage13
        Reasons[index].reasonFeatImage = reasonFeatImage13
        break
      case 14:
        Reasons[index].reasonImage = reason14
        Reasons[index].reasonImageMd = reasonImage14
        Reasons[index].reasonBoxImage = reasonBoxImage14
        Reasons[index].reasonFeatImage = reasonFeatImage14
        break
      case 15:
        Reasons[index].reasonImage = reason15
        Reasons[index].reasonImageMd = reasonImage15
        Reasons[index].reasonBoxImage = reasonBoxImage15
        Reasons[index].reasonFeatImage = reasonFeatImage15
        break
      case 16:
        Reasons[index].reasonImage = reason16
        Reasons[index].reasonImageMd = reasonImage16
        Reasons[index].reasonBoxImage = reasonBoxImage16
        Reasons[index].reasonFeatImage = reasonFeatImage16
        break
      case 17:
        Reasons[index].reasonImage = reason17
        Reasons[index].reasonImageMd = reasonImage17
        Reasons[index].reasonBoxImage = reasonBoxImage17
        Reasons[index].reasonFeatImage = reasonFeatImage17
        break
      case 18:
        Reasons[index].reasonImage = reason18
        Reasons[index].reasonImageMd = reasonImage18
        Reasons[index].reasonBoxImage = reasonBoxImage18
        Reasons[index].reasonFeatImage = reasonFeatImage18
        break
      case 19:
        Reasons[index].reasonImage = reason19
        Reasons[index].reasonImageMd = reasonImage19
        Reasons[index].reasonBoxImage = reasonBoxImage19
        Reasons[index].reasonFeatImage = reasonFeatImage19
        break
      case 20:
        Reasons[index].reasonImage = reason20
        Reasons[index].reasonImageMd = reasonImage20
        Reasons[index].reasonBoxImage = reasonBoxImage20
        Reasons[index].reasonFeatImage = reasonFeatImage20
        break
      default:
    }
    Reasons[index].userImage = userImage
  })
  useEffect(() => {
    if (isBrowser) {
      if (
        window.dataLayer[window.dataLayer.length - 1].pageType !==
        '/brand-experience/toyota-sienna/2021/reasons/en'
      ) {
        window.dataLayer.push({
          event: 'gtm_bx_virtual_page',
          pageType: '/brand-experience/toyota-sienna/2021/reasons/en',
          sponsoredContentCampaign: 'toyota sienna - 2021',
        })
      }
      resetMode()
      setTimeout(() => {
        setSliderWidth()
      }, 1000)
      $(window).resize(() => {
        const masters = `.${reason_slide_holder}.master`,
          others = `.${reason_slide_holder}:not(.master)`,
          mastersHeight = $(masters).height(),
          othersHeight = $(others).height()
        resetMode()
        setSliderWidth()
        if (mastersHeight > othersHeight) {
          $(others).height($(masters).height())
        } else {
          $(masters).height($(others).height())
        }
      })
      if (currentReason === null) {
        setCurrentReason(Reasons[reasonIndex])
        setReasonIndex(0)
      }
    }
  }, [
    isBrowser,
    resetMode,
    reasonIndex,
    setReasonIndex,
    currentReason,
    reason_content_wrap,
    reason_slide_holder,
    setSliderWidth,
  ])
  return (
    <Layout>
      <SEO title="20 Reasons to Believe" />
      {(mode === 'desktop' || mode === 'tablet') && (
        <section className={breadcrumb_section}>
          <Container fluid>
            <div className="d-flex">
              <div className="flex-grow-1 my-auto">
                <div className="d-flex">
                  <div className="flex-shrink-1">
                    <button
                      type="button"
                      className={`btn btn-primary ${breadcrumb_back_button}`}
                      onClick={() => {
                        navigate('/')
                      }}
                    >
                      <Left />
                    </button>
                  </div>
                  <div className={`flex-grow-1 my-auto ${breadcrumb_content}`}>
                    <Link to="/">toyota sienna</Link>
                    <span>20 reasons to believe</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-1">
                <button
                  type="button"
                  onClick={() => (window.location.href = `//toyota.ca`)}
                  className={`btn btn-primary ${breadcrumb_button}`}
                >
                  BUILD &amp; PRICE
                </button>
              </div>
            </div>
          </Container>
        </section>
      )}
      {(mode === 'desktop' || mode === 'tablet') && (
        <section
          className={
            tabletModal
              ? `${reason_slider_section} ${reason_slider_modal_open}`
              : reason_slider_section
          }
        >
          {currentReason !== null ? (
            <>
              <Img
                className={`d-none d-xl-block ${reason_slider_bg}`}
                fixed={heroBgXl.childImageSharp.fixed}
              />
              <Img
                className={`d-none d-md-block d-xl-none ${reason_slider_bg}`}
                fixed={heroBgMd.childImageSharp.fixed}
              />
              <div className={reason_slider_content_area}>
                <div className={reason_slider_content_top}>
                  <Container fluid>
                    <Row>
                      <Col xl={4}>
                        <h1 className={main_heading}>
                          <strong>20</strong>
                          <span> Reasons </span>
                          <strong className="d-xl-block">to believe</strong>
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {mode === 'desktop' && (
                  <div className={reason_slider_content_below}>
                    <div
                      className={`container-fluid ${reason_content_wrapper}`}
                    >
                      <div
                        className={`row no-gutters ${reason_content_holder}`}
                      >
                        <div className={`col ${reason_navigation}`}>
                          <button
                            onClick={previousReason}
                            className={`${reason_roundButton} ${prev}`}
                          >
                            <Left />
                          </button>
                        </div>
                        <div className={`col-10 ${reason_content_wrap}`}>
                          <Quote className={reason_content_quote} />
                          <Row noGutters={true} className="h-100">
                            <Col xl={6}>
                              <div className={reason_content}>
                                <h3 className={reason_box_heading}>
                                  {`#${('0' + currentReason.id).slice(-2)} `}
                                  {ReactHtmlParser(
                                    currentReason.reasonBigHeading
                                  )}
                                </h3>
                                {ReactHtmlParser(
                                  currentReason.reasonDescription
                                )}
                                <h5 className={reason_box_author}>
                                  {ReactHtmlParser(currentReason.reasonBy)}
                                </h5>
                              </div>
                            </Col>
                            <Col xl={6} className={reason_flip_slider_col}>
                              <div className={reason_flip_slider}>
                                <Swiper
                                  slidesPerView={1}
                                  centeredSlides={true}
                                  effect="flip"
                                  updateOnWindowResize={true}
                                  loop={true}
                                  simulateTouch={false}
                                  allowTouchMove={false}
                                  onSwiper={swiper => {
                                    setSlider(swiper)
                                  }}
                                  onSlideNextTransitionStart={() => {
                                    const masters = `.${reason_slide_holder}.master`,
                                      others = `.${reason_slide_holder}:not(.master)`
                                    setTimeout(() => {
                                      const mastersHeight = $(masters).height(),
                                        othersHeight = $(others).height()
                                      if (mastersHeight > othersHeight) {
                                        $(others).height($(masters).height())
                                      } else {
                                        $(masters).height($(others).height())
                                      }
                                    }, 1100)
                                  }}
                                  width={sliderSize}
                                  setWrapperSize={false}
                                >
                                  <SwiperSlide>
                                    <div
                                      className={`${reason_slide_holder} master`}
                                      onClick={e => {
                                        window.dataLayer.push({
                                          event: 'gtm_bx',
                                          eventAction:
                                            'toyota sienna 2021 - card - flip',
                                          eventLabel: `card ${(
                                            '0' + currentReason.id
                                          ).slice(-2)}`,
                                        })
                                        slider.slideNext()
                                      }}
                                      onKeyPress={e => {
                                        window.dataLayer.push({
                                          event: 'gtm_bx',
                                          eventAction:
                                            'toyota sienna 2021 - card - flip',
                                          eventLabel: `card ${(
                                            '0' + currentReason.id
                                          ).slice(-2)}`,
                                        })
                                        slider.slideNext()
                                      }}
                                      role="button"
                                      tabIndex="0"
                                    >
                                      <div className={reason_slide_loader}>
                                        <div
                                          className="spinner-grow text-secondary"
                                          role="status"
                                          style={{
                                            width: '3rem',
                                            height: '3rem',
                                          }}
                                        >
                                          <span className="sr-only">
                                            Loading...
                                          </span>
                                        </div>
                                      </div>
                                      <Img
                                        fluid={
                                          currentReason.reasonImage
                                            .childImageSharp.fluid
                                        }
                                        className={`${reason_slide_master} h-100`}
                                        imgStyle={{ maxWidth: sliderSize }}
                                        style={{
                                          maxWidth: sliderSize,
                                          zIndex: 999,
                                        }}
                                        onLoad={() => {
                                          $(`.${reason_slide_loader}`).hide()
                                        }}
                                        alt="slide-1"
                                      />
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div
                                      className={`${reason_slide_holder}`}
                                      onClick={e => {
                                        window.dataLayer.push({
                                          event: 'gtm_bx',
                                          eventAction:
                                            'toyota sienna 2021 - card - flip',
                                          eventLabel: `card ${(
                                            '0' + currentReason.id
                                          ).slice(-2)}`,
                                        })
                                        slider.slideNext()
                                      }}
                                      onKeyPress={e => {
                                        window.dataLayer.push({
                                          event: 'gtm_bx',
                                          eventAction:
                                            'toyota sienna 2021 - card - flip',
                                          eventLabel: `card ${(
                                            '0' + currentReason.id
                                          ).slice(-2)}`,
                                        })
                                        slider.slideNext()
                                      }}
                                      role="button"
                                      tabIndex="0"
                                    >
                                      <div className={reason_slide_review}>
                                        <div className={reason_review_header}>
                                          <div className={reason_review_avatar}>
                                            <Img
                                              fixed={
                                                currentReason.userImage
                                                  .childImageSharp.fixed
                                              }
                                              alt="slide-1"
                                              className={
                                                reason_review_avatar_image
                                              }
                                            />
                                          </div>
                                          <div className={reason_review_title}>
                                            <h3>Expert Review</h3>
                                            <p>
                                              {`BY ${currentReason.reviewBy}`}
                                            </p>
                                          </div>
                                        </div>
                                        <div className={reason_review_body}>
                                          <div className={reason_review_image}>
                                            <Img
                                              fluid={
                                                currentReason.reasonFeatImage
                                                  .childImageSharp.fluid
                                              }
                                              alt="slide-1"
                                            />
                                          </div>
                                          <div
                                            className={reason_review_content}
                                          >
                                            {ReactHtmlParser(
                                              currentReason.reviewDescription
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper>
                                <div
                                  onClick={e => {
                                    window.dataLayer.push({
                                      event: 'gtm_bx',
                                      eventAction:
                                        'toyota sienna 2021 - card - flip',
                                      eventLabel: `card ${(
                                        '0' + currentReason.id
                                      ).slice(-2)}`,
                                    })
                                    e.currentTarget.classList.toggle(
                                      button_dark
                                    )
                                    slider.slideNext()
                                  }}
                                  onKeyPress={e => {
                                    window.dataLayer.push({
                                      event: 'gtm_bx',
                                      eventAction:
                                        'toyota sienna 2021 - card - flip',
                                      eventLabel: `card ${(
                                        '0' + currentReason.id
                                      ).slice(-2)}`,
                                    })
                                    e.currentTarget.classList.toggle(
                                      button_dark
                                    )
                                    slider.slideNext()
                                  }}
                                  className={desktop_flip_button}
                                  role="button"
                                  tabIndex="0"
                                >
                                  <button type="button" className={flip_button}>
                                    <Flip />
                                  </button>
                                  <p className={flip_label}>
                                    <span className="d-block">click</span> to
                                    flip
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className={`col text-right ${reason_navigation}`}>
                          <button
                            onClick={nextReason}
                            className={`${reason_roundButton} ${next}`}
                          >
                            <Right />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {mode === 'tablet' && (
                  <div className={reason_slider_content_below}>
                    <div className={reason_slider_tablet}>
                      <Swiper
                        className={reason_slider}
                        slidesPerView={1}
                        spaceBetween={70}
                        centeredSlides={true}
                        effect="coverflow"
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 110,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        updateOnWindowResize={true}
                        keyboard={{ enabled: true }}
                        pagination={{
                          clickable: false,
                          bulletClass: reason_slider_pagination_bullet,
                          bulletActiveClass: reason_slider_pagination_active_bullet,
                        }}
                        loop={true}
                        simulateTouch={true}
                        slideToClickedSlide={true}
                        onPaginationRender={(_, paginationEl) => {
                          paginationEl.classList.add(reason_slider_pagination)
                        }}
                        onSlideChange={swiper => {
                          setActiveSlide(swiper.realIndex)
                        }}
                        onSwiper={swiper => {
                          setActiveSlide(swiper.realIndex)
                        }}
                        onSlideNextTransitionEnd={swiper => {
                          window.dataLayer.push({
                            event: 'gtm_bx',
                            eventAction:
                              'toyota sienna 2021 - card - nav - next',
                            eventLabel: `card ${(
                              '0' + swiper.activeIndex
                            ).slice(-2)}`,
                          })
                        }}
                        onSlidePrevTransitionEnd={swiper => {
                          window.dataLayer.push({
                            event: 'gtm_bx',
                            eventAction:
                              'toyota sienna 2021 - card - nav - prev',
                            eventLabel: `card ${(
                              '0' + swiper.activeIndex
                            ).slice(-2)}`,
                          })
                        }}
                      >
                        {Reasons.map(
                          ({ id, reasonImageMd, reasonBigHeading }, index) => {
                            return (
                              <SwiperSlide key={id}>
                                <div className={reason_card_holder}>
                                  <Img
                                    fluid={reasonImageMd.childImageSharp.fluid}
                                    alt={`reason-${id}`}
                                  />
                                  {activeSlide === index && (
                                    <div className={reason_card_inner}>
                                      <div
                                        className={
                                          reason_card_inner_content_area
                                        }
                                      >
                                        <div className={reason_card_button}>
                                          <p
                                            className={reason_card_button_label}
                                          >
                                            TAP{' '}
                                            <span className="d-block">
                                              TO OPEN
                                            </span>
                                          </p>
                                          <button
                                            className={
                                              reason_card_button_element
                                            }
                                            onClick={e => {
                                              openTabletModal(e, index)
                                            }}
                                          >
                                            <Open
                                              className={
                                                reason_card_button_icon
                                              }
                                            />
                                          </button>
                                        </div>
                                        <div
                                          className={reason_card_inner_content}
                                        >
                                          <p
                                            className={
                                              reason_card_inner_content_label
                                            }
                                          >{`REASON #${('0' + id).slice(
                                            -2
                                          )}`}</p>
                                          <h4
                                            className={
                                              reason_card_inner_content_title
                                            }
                                          >
                                            {ReactHtmlParser(reasonBigHeading)}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </SwiperSlide>
                            )
                          }
                        )}
                      </Swiper>
                    </div>
                  </div>
                )}
              </div>
              {mode === 'tablet' && (
                <div className={reason_modal_area}>
                  <div className={reason_modal_wrapper}>
                    <button
                      onClick={closeTabletModal}
                      className={reason_modal_dismiss}
                    >
                      <Close />
                    </button>
                    <Swiper
                      className={reason_modal_slider}
                      pagination={{
                        clickable: false,
                        bulletClass: reason_modal_pagination_bullet,
                        bulletActiveClass: reason_modal_pagination_active_bullet,
                      }}
                      onPaginationRender={(_, paginationEl) => {
                        paginationEl.classList.add(reason_modal_pagination)
                      }}
                      width={718}
                    >
                      <SwiperSlide>
                        <Row className="m-0">
                          <Col md={7}>
                            <h3 className={reason_modal_title}>
                              <strong>{`#${('0' + currentReason.id).slice(
                                -2
                              )}`}</strong>
                              {` ${ReactHtmlParser(
                                currentReason.reasonBigHeading
                              )}`}
                            </h3>
                            <h5 className={reason_modal_author}>
                              {ReactHtmlParser(currentReason.reasonBy)}
                            </h5>
                          </Col>
                          <Col md={12}>
                            <div className={reason_modal_content}>
                              {ReactHtmlParser(
                                currentReason.reasonDescriptionTablet
                              )}
                            </div>
                          </Col>
                        </Row>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Row className="m-0">
                          <Col md={7}>
                            <div className={reason_review_header}>
                              <div className={reason_review_avatar}>
                                <Img
                                  fixed={
                                    currentReason.userImage.childImageSharp
                                      .fixed
                                  }
                                  alt="slide-1"
                                  className={reason_review_avatar_image}
                                />
                              </div>
                              <div className={reason_review_title}>
                                <h3 className={reason_modal_title}>
                                  Expert Review
                                </h3>
                                <h5
                                  className={reason_modal_author}
                                >{`BY ${currentReason.reviewBy}`}</h5>
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <Img
                              fluid={
                                currentReason.reasonFeatImage.childImageSharp
                                  .fluid
                              }
                              className={reason_modal_feat_image}
                              alt="slide-1"
                            />
                          </Col>
                          <Col md={6}>
                            <div className={reason_review_content}>
                              {ReactHtmlParser(currentReason.reviewDescription)}
                            </div>
                          </Col>
                        </Row>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </section>
      )}
      {mode === 'mobile' && (
        <>
          {currentReason !== null ? (
            <section
              className={
                tabletModal
                  ? `${reason_slider_section} ${reason_slider_modal_open}`
                  : reason_slider_section
              }
            >
              <Img
                className={reason_slider_bg}
                fluid={heroBg.childImageSharp.fluid}
              />
              <div className={reason_slider_content_area}>
                <div className={reason_slider_content_top}>
                  <button
                    type="button"
                    onClick={() => (window.location.href = `//toyota.ca`)}
                    className={`btn btn-primary ${breadcrumb_button}`}
                  >
                    BUILD &amp; PRICE
                  </button>
                  <h1 className={main_heading}>
                    <strong>20</strong>
                    <span> Reasons </span>
                    <strong className="d-block">to believe</strong>
                  </h1>
                </div>
                <div className={reason_slider_content_below}>
                  <div className={reason_slider_mobile}>
                    <Swiper
                      className={reason_slider}
                      slidesPerView={1}
                      spaceBetween={40}
                      centeredSlides={true}
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 110,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      updateOnWindowResize={true}
                      keyboard={{ enabled: true }}
                      pagination={{
                        clickable: false,
                        bulletClass: reason_slider_pagination_bullet,
                        bulletActiveClass: reason_slider_pagination_active_bullet,
                      }}
                      loop={true}
                      simulateTouch={true}
                      slideToClickedSlide={true}
                      onPaginationRender={(_, paginationEl) => {
                        paginationEl.classList.add(reason_slider_pagination)
                      }}
                      onSlideChange={swiper => {
                        setActiveSlide(swiper.realIndex)
                      }}
                      onSwiper={swiper => {
                        setActiveSlide(swiper.realIndex)
                      }}
                    >
                      {Reasons.map(
                        ({ id, reasonImageMd, reasonBigHeading }, index) => {
                          return (
                            <SwiperSlide key={id}>
                              <div className={reason_card_holder}>
                                <Img
                                  fluid={reasonImageMd.childImageSharp.fluid}
                                  alt={`reason-${id}`}
                                  className={reason_card_image}
                                />
                                {activeSlide === index && (
                                  <div className={reason_card_inner}>
                                    <div
                                      className={reason_card_inner_content_area}
                                    >
                                      <div className={reason_card_button}>
                                        <p className={reason_card_button_label}>
                                          TAP{' '}
                                          <span className="d-block">
                                            TO OPEN
                                          </span>
                                        </p>
                                        <button
                                          className={reason_card_button_element}
                                          onClick={e => {
                                            openTabletModal(e, index)
                                          }}
                                        >
                                          <Open
                                            className={reason_card_button_icon}
                                          />
                                        </button>
                                      </div>
                                      <div
                                        className={reason_card_inner_content}
                                      >
                                        <p
                                          className={
                                            reason_card_inner_content_label
                                          }
                                        >{`REASON #${('0' + id).slice(-2)}`}</p>
                                        <h4
                                          className={
                                            reason_card_inner_content_title
                                          }
                                        >
                                          {ReactHtmlParser(reasonBigHeading)}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </SwiperSlide>
                          )
                        }
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className={reason_modal_area}>
                <div className={reason_modal_wrapper}>
                  <button
                    onClick={closeTabletModal}
                    className={reason_modal_dismiss}
                  >
                    <Close />
                  </button>
                  <Swiper
                    className={reason_modal_slider}
                    spaceBetween={20}
                    updateOnWindowResize={true}
                    pagination={{
                      clickable: false,
                      bulletClass: reason_modal_pagination_bullet,
                      bulletActiveClass: reason_modal_pagination_active_bullet,
                    }}
                    onPaginationRender={(_, paginationEl) => {
                      paginationEl.classList.add(reason_modal_pagination)
                    }}
                    width={$(`.${reason_modal_wrapper}`).width()}
                  >
                    <SwiperSlide>
                      <Row noGutters={true} className="justify-content-center">
                        <Col xs={12} sm={7}>
                          <button
                            type="button"
                            onClick={() =>
                              (window.location.href = `//toyota.ca`)
                            }
                            className={`btn btn-primary ${breadcrumb_button}`}
                          >
                            BUILD &amp; PRICE
                          </button>
                          <h3 className={reason_modal_title}>
                            <strong>{`#${('0' + currentReason.id).slice(
                              -2
                            )}`}</strong>
                            {` ${ReactHtmlParser(
                              currentReason.reasonBigHeading
                            )}`}
                          </h3>
                          <h5 className={reason_modal_author}>
                            {ReactHtmlParser(currentReason.reasonBy)}
                          </h5>
                        </Col>
                        <Col xs={12} sm={7}>
                          <div className={reason_modal_content}>
                            {ReactHtmlParser(currentReason.reasonDescription)}
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Row noGutters={true} className="justify-content-center">
                        <Col xs={12} sm={7}>
                          <div className={reason_review_header}>
                            <div className={reason_review_avatar}>
                              <Img
                                fixed={
                                  currentReason.userImage.childImageSharp.fixed
                                }
                                alt="slide-1"
                                className={reason_review_avatar_image}
                              />
                            </div>
                            <div className={reason_review_title}>
                              <h3 className={reason_modal_title}>
                                Expert Review
                              </h3>
                              <h5
                                className={reason_modal_author}
                              >{`BY ${currentReason.reviewBy}`}</h5>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} sm={7}>
                          <Img
                            fluid={
                              currentReason.reasonFeatImage.childImageSharp
                                .fluid
                            }
                            className={reason_modal_feat_image}
                            alt="slide-1"
                          />
                          <div className={reason_modal_content}>
                            {ReactHtmlParser(currentReason.reviewDescription)}
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
      {(mode === 'desktop' || mode === 'tablet') && (
        <section className={view_all_reasons}>
          <Container>
            <Row className="mb-3">
              <Col className="col-12">
                <p className={reason_section_title}>
                  <strong className={bold_title}>View</strong> all reasons
                </p>
              </Col>
            </Row>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <Row>
                    <Col md={4} className="mb-3">
                      <div className={`${reason_card_wrap}`}>
                        <div className={`${reason_card} ${reason_card1}`}>
                          <Img
                            fixed={
                              Reasons[4 * index + 0].reasonBoxImage
                                .childImageSharp.fixed
                            }
                            alt={`reason-${Reasons[4 * index + 0].id}`}
                            className={reason_card_img}
                          />
                          <div className={reason_card_content}>
                            <p className={reason_card_label_index}>
                              {`${('0' + Reasons[4 * index + 0].id).slice(-2)}`}
                            </p>
                            <h4 className={reason_card_title}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 0].reasonBigHeading
                              )}
                            </h4>
                            <span className={reason_card_city}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 0].reasonBy
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={8} className="mb-3">
                      <div className={`${reason_card_wrap}`}>
                        <div className={`${reason_card} ${reason_card2}`}>
                          <Img
                            fixed={
                              Reasons[4 * index + 1].reasonBoxImage
                                .childImageSharp.fixed
                            }
                            alt={`reason-${Reasons[4 * index + 1].id}`}
                            className={reason_card_img}
                          />
                          <div className={reason_card_content}>
                            <p className={reason_card_label_index}>
                              {`${('0' + Reasons[4 * index + 1].id).slice(-2)}`}
                            </p>
                            <h4 className={reason_card_title_width}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 1].reasonBigHeading
                              )}
                            </h4>
                            <span className={reason_card_city2}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 1].reasonBy
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} className="mb-3">
                      <div className={`${reason_card_wrap}`}>
                        <div className={`${reason_card} ${reason_card3}`}>
                          <Img
                            fixed={
                              Reasons[4 * index + 2].reasonBoxImage
                                .childImageSharp.fixed
                            }
                            alt={`reason-${Reasons[4 * index + 2].id}`}
                            className={reason_card_img}
                          />
                          <div className={reason_card_content}>
                            <p className={reason_card_label_index}>
                              {`${('0' + Reasons[4 * index + 2].id).slice(-2)}`}
                            </p>
                            <h4 className={reason_card_title_width}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 2].reasonBigHeading
                              )}
                            </h4>
                            <span className={reason_card_city2}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 2].reasonBy
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className={`${reason_card_wrap}`}>
                        <div className={`${reason_card} ${reason_card4}`}>
                          <Img
                            fixed={
                              Reasons[4 * index + 3].reasonBoxImage
                                .childImageSharp.fixed
                            }
                            alt={`reason-${Reasons[4 * index + 3].id}`}
                            className={reason_card_img}
                          />
                          <div className={reason_card_content}>
                            <p className={reason_card_label_index}>
                              {`${('0' + Reasons[4 * index + 3].id).slice(-2)}`}
                            </p>
                            <h4 className={reason_card_title}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 3].reasonBigHeading
                              )}
                            </h4>
                            <span className={reason_card_city}>
                              {ReactHtmlParser(
                                Reasons[4 * index + 3].reasonBy
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
              )
            })}
          </Container>
        </section>
      )}
      <section
        className={`${navigation.reasons} ${navigation.navigation_section}`}
      >
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <div className={`w-100 ${navigation.nav_wrapper}`}>
                <div className={`w-100 ${navigation.nav_holder}`}>
                  <Img
                    className={`w-100 ${navigation.nav_image}`}
                    fluid={prevImage.childImageSharp.fluid}
                  />
                  <div className={navigation.nav_area}>
                    <p>Previous</p>
                    <Link
                      to="/the-hardest-working-family-member/"
                      className={navigation.navigate_previous}
                    >
                      <h4>
                        <span className="d-block">The hardest working</span>{' '}
                        family member
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div className={`w-100 ${navigation.nav_wrapper}`}>
                <div className={`w-100 ${navigation.nav_holder}`}>
                  <Img
                    className={`w-100 ${navigation.nav_image}`}
                    fluid={nextImage.childImageSharp.fluid}
                  />
                  <div className={navigation.nav_area}>
                    <p>Next</p>
                    <Link
                      to="/sienna-2021-the-view-from-every-row/"
                      className={navigation.navigate_next}
                    >
                      <h4>
                        <span className="d-block">Sienna 2021,</span> The View
                        from Every Row
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
