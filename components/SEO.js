import React from 'react'
import Head from 'next/head'

function SEO({ children, title, description, index = true, image }) {
  const siteDescription = description
    ? description
    : 'Stunning components for faster web development'
  const socialImage = image ? image : 'https://windmillui.com/img/windmillui.png'
  return (
    <Head>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content="Windmill UI" />
      <meta name="robots" content={index ? 'index' : 'noindex'} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:site_name" content="Windmill UI" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@estevanmaito" />
      <meta name="twitter:image" content={socialImage} />

      <title>{title}</title>
      {children}
    </Head>
  )
}

export default SEO
