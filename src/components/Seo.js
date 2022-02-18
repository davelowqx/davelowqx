import React from 'react'
import Helmet from 'react-helmet'

const SITE_TITLE = 'Dave Low'
const SITE_DESCRIPTION = 'Portfolio Site'
const SITE_URL = 'https://davelowqx.com'

const Seo = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path = '',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={SITE_URL + path} />
      <meta name="twitter:image" content={`${SITE_URL}/og_logo.png`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE_URL + path} />
      <meta property="og:image" content={`${SITE_URL}/og_logo.png`} />
    </Helmet>
  )
}

export default Seo
