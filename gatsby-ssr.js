import React from 'react'
import Layout from './src/components/layout'
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
export const onRenderBody = ({ pathname, setHeadComponents }) => {
  let page = ''
  if (pathname) {
    if (pathname.includes('reasons')) page = 'reasons'
    else if (pathname.includes('hardest')) page = 'article-family'
    else if (pathname.includes('described')) page = 'article-sienna'
    else page = 'home'
  }
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `dataLayer=[{pageType:"/brand-experience/toyota-sienna/2021/${page}/en",sponsoredContentCampaign:"toyota sienna - 2021"}];var re=new RegExp("iPad|Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/gm");var GTM_ID=re.test(window.navigator.userAgent)?"GTM-6TXZ":"GTM-K7JHZJ";(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f)})(window,document,"script","dataLayer",GTM_ID);`,
      }}
    />,
  ])
}
